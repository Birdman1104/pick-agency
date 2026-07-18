<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import {
  ROTATION_BASE,
  ROTATION_STEP,
  tagLayout,
  tags,
} from "../data/services";
import CraftingTag from "./CraftingTag.vue";
import Modal from "./Modal.vue";

/** Single cursor image for desktop + mobile */
const CURSOR_SRC = "/cursor.svg";

const showModal = ref(false);
const selectedTag = ref(null);

const sectionRef = ref(null);
const cursorX = ref(0);
const cursorY = ref(0);

let lastTouchX = null;
let lastTouchY = null;
let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

function openModal(tag) {
  selectedTag.value = tag;
  showModal.value = true;
}

function clampCursor(x, y) {
  const el = sectionRef.value;
  if (!el) return { x, y };

  const maxX = Math.max(0, el.clientWidth - 40);
  const maxY = Math.max(0, el.clientHeight - 48);

  return {
    x: Math.min(Math.max(0, x), maxX),
    y: Math.min(Math.max(0, y), maxY),
  };
}

function setCursor(x, y) {
  const next = clampCursor(x, y);
  cursorX.value = next.x;
  cursorY.value = next.y;
}

function moveCursorBy(dx, dy) {
  setCursor(cursorX.value + dx, cursorY.value + dy);
}

function centerCursor() {
  const el = sectionRef.value;
  if (!el) return;
  setCursor(el.clientWidth * 0.55, el.clientHeight * 0.45);
}

/** Mouse: cursor follows pointer (absolute) */
function onPointerMove(e) {
  if (e.pointerType !== "mouse") return;

  const el = sectionRef.value;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  setCursor(e.clientX - rect.left, e.clientY - rect.top);
}

/** Touch: move cursor by finger delta (trackpad-style) */
function onTouchStart(e) {
  const touch = e.touches[0];
  if (!touch) return;
  lastTouchX = touch.clientX;
  lastTouchY = touch.clientY;
}

function onTouchMove(e) {
  const touch = e.touches[0];
  if (!touch || lastTouchX == null || lastTouchY == null) return;

  const dx = touch.clientX - lastTouchX;
  const dy = touch.clientY - lastTouchY;
  lastTouchX = touch.clientX;
  lastTouchY = touch.clientY;
  moveCursorBy(dx, dy);
}

function onTouchEnd() {
  lastTouchX = null;
  lastTouchY = null;
}

/** Scroll / trackpad wheel also nudges the cursor */
function onWheel(e) {
  moveCursorBy(e.deltaX * 0.35, e.deltaY * 0.35);
}

function onWindowScroll() {
  const el = sectionRef.value;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const inView = rect.bottom > 0 && rect.top < window.innerHeight;
  if (!inView) {
    lastScrollY = window.scrollY;
    return;
  }

  const dy = window.scrollY - lastScrollY;
  lastScrollY = window.scrollY;
  if (dy === 0) return;
  moveCursorBy(0, dy * 0.25);
}

function onResize() {
  setCursor(cursorX.value, cursorY.value);
}

onMounted(() => {
  centerCursor();
  lastScrollY = window.scrollY;
  window.addEventListener("scroll", onWindowScroll, { passive: true });
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onWindowScroll);
  window.removeEventListener("resize", onResize);
});

const BOX_ORDER = ["left-top", "left-bottom", "right-top", "right-bottom"];

const tagsByBox = computed(() => {
  const groups = Object.fromEntries(BOX_ORDER.map((box) => [box, []]));
  tagLayout.forEach(({ tagIndex, box, classes }) => {
    groups[box].push({ tag: tags[tagIndex], classes });
  });
  return groups;
});

const boxConfig = {
  "left-top": {
    boxClass: "left-top-box relative",
    style: {
      "--rotation": `${ROTATION_BASE + 1 * ROTATION_STEP}deg`,
      position: "absolute",
    },
  },
  "left-bottom": { boxClass: "left-bottom-box absolute" },
  "right-top": { boxClass: "right-top-box absolute" },
  "right-bottom": { boxClass: "right-bottom-box absolute" },
};
</script>

<template>
  <section
    ref="sectionRef"
    class="crafting"
    id="services"
    @pointermove="onPointerMove"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
    @wheel.passive="onWheel"
  >
    <img
      class="crafting__cursor"
      :src="CURSOR_SRC"
      alt=""
      aria-hidden="true"
      :style="{
        transform: `translate3d(${cursorX}px, ${cursorY}px, 0)`,
      }"
    />
    <div class="crafting__inner">
      <div class="crafting__title">
        <div class="crafting__title-text crafting__title-text--desktop">
          <span>OUR EXPERT</span>
          <span>SERVICE SUITE</span>
        </div>
        <div class="crafting__title-text crafting__title-text--mobile">
          <span>OUR</span>
          <span>EXPERT</span>
          <span>SERVICE</span>
          <span>SUITE</span>
        </div>

        <div
          v-for="(boxTags, boxName) in tagsByBox"
          :key="boxName"
          :class="boxConfig[boxName]?.boxClass"
          :style="boxConfig[boxName]?.style"
        >
          <CraftingTag
            v-for="(item, i) in boxTags"
            :key="i"
            :tag="item.tag"
            :tag-classes="item.classes"
            @click="openModal"
          />
        </div>
      </div>

      <Modal
        v-if="selectedTag"
        v-model="showModal"
        :title="selectedTag.text"
        :description="selectedTag.description"
        :variant="selectedTag.color"
      />
    </div>
  </section>
</template>

<style scoped>
.crafting {
  position: relative;
  background: var(--color-dark-purple);
  padding: 250px 24px 150px 24px;
  cursor: none;
  overflow-x: clip;
  max-width: 100%;
}

.crafting :deep(.crafting__tag) {
  cursor: none;
}

.crafting__cursor {
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: auto;
  margin-top: -8px;
  margin-left: -10px;
  pointer-events: none;
  z-index: 40;
  will-change: transform;
  user-select: none;
}

.top {
  rotate: 40deg;
  position: absolute;
  left: -15px;
  top: -80px;
  width: 200px;
}

.top-sec-text {
  rotate: 10deg;
  position: absolute;
  left: -150px;
  top: -10px;
  white-space: nowrap;
  width: fit-content;
  max-width: min(320px, 80vw);
}

.sec-text {
  top: 60px;
  position: absolute;
  left: -16px;
  padding: 10px 30px 10px 30px;
}

.crafting__inner {
  max-width: min(900px, 100%);
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  overflow: visible;
}

.crafting__title {
  position: relative;
  font-size: clamp(3.5rem, 18vw, 8rem);
  font-weight: 400;
  color: var(--color-white);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: 0.05em;
  word-wrap: break-word;
  max-width: 100%;
}

.crafting__title-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.92;
  gap: 0;
}

.crafting__title-text--mobile {
  display: none;
}

.left-top-box {
  rotate: -21deg;
  top: 0;
}

.left-bottom-box {
  z-index: 1;
  rotate: 20deg;
  left: -60px;
  bottom: -30px;
}

.bottom-second-text {
  rotate: 20deg;
}

.right-top-box {
  right: -150px;
  top: -20px;
  z-index: 1;
  rotate: 25deg;
}

.right-bottom-box {
  z-index: 1;
  rotate: -12deg;
  right: -90px;
  bottom: -50px;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

@media screen and (max-width: 700px) {
  .crafting {
    padding: 120px 16px 110px;
  }

  .crafting__cursor {
    width: 40px;
  }

  .crafting__title-text--desktop {
    display: none;
  }

  .crafting__title-text--mobile {
    display: flex;
    line-height: 0.88;
    gap: 0.02em;
  }

  .crafting__title {
    width: min(280px, 78vw);
    margin: 0 auto;
    font-size: clamp(3.6rem, 15.5vw, 4.5rem);
    letter-spacing: 0.03em;
    padding: 56px 0 48px;
  }

  /* Telegram Ads — top left */
  .left-top-box {
    rotate: 0deg;
  }

  .top {
    left: -6px !important;
    top: -28px !important;
    width: fit-content;
    max-width: none;
    rotate: -18deg;
    font-size: 0.95rem;
  }

  /* Digital Marketing & SMM — mid left, overlapping OUR/EXPERT */
  .top-sec-text {
    left: -52px;
    top: 42px;
    rotate: -20deg;
    width: fit-content;
    max-width: none;
    white-space: nowrap;
    font-size: 0.95rem;
  }

  /* Full Marketing & Strategy — steep top right */
  .right-top-box {
    right: -58px;
    top: -8px;
    rotate: 48deg;
  }

  .right-top-text {
    width: fit-content;
    max-width: none;
    white-space: nowrap;
    font-size: 0.95rem;
  }

  /* Creative Ideas — bottom left */
  .left-bottom-box {
    left: -28px !important;
    bottom: 8px !important;
    rotate: 38deg !important;
    width: fit-content;
    max-width: none;
  }

  /* Influencer Marketing + Reel Making — bottom right */
  .right-bottom-box {
    right: -28px;
    bottom: -6px;
    rotate: -28deg;
    width: fit-content;
    max-width: none;
  }

  .bottom-first-text {
    white-space: nowrap;
  }

  .bottom-second-text {
    top: 48px !important;
    left: 8px;
    rotate: 8deg;
  }

  .sec-text {
    padding: 0;
    left: 0;
  }

  :deep(.crafting__tag) {
    font-size: 0.9rem;
    padding: 11px 16px;
    border-radius: 10px;
    white-space: nowrap;
  }
}

@media screen and (min-width: 700px) and (max-width: 800px) {
  .crafting__title {
    width: 300px;
  }

  .left-top-box {
    left: -40px;
  }
}

@media screen and (min-width: 800px) and (max-width: 1024px) {
  .crafting__title {
    width: 400px;
  }

  .left-top-box {
    left: -50px;
  }
}

@media screen and (min-width: 1024px) {
  .crafting__title {
    width: fit-content;
  }
}
</style>
