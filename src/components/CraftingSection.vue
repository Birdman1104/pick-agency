<script setup>
import { ref, computed } from 'vue'
import Modal from './Modal.vue'
import CraftingTag from './CraftingTag.vue'
import { tags, tagLayout, ROTATION_BASE, ROTATION_STEP } from '../data/services'

const showModal = ref(false)
const selectedTag = ref(null)

function openModal(tag) {
  selectedTag.value = tag
  showModal.value = true
}

const BOX_ORDER = ['left-top', 'left-bottom', 'right-top', 'right-bottom']

const tagsByBox = computed(() => {
  const groups = Object.fromEntries(BOX_ORDER.map((box) => [box, []]))
  tagLayout.forEach(({ tagIndex, box, classes }) => {
    groups[box].push({ tag: tags[tagIndex], classes })
  })
  return groups
})

const boxConfig = {
  'left-top': {
    boxClass: 'left-top-box relative',
    style: { '--rotation': `${ROTATION_BASE + 1 * ROTATION_STEP}deg`, position: 'absolute' },
  },
  'left-bottom': { boxClass: 'left-bottom-box absolute' },
  'right-top': { boxClass: 'right-top-box absolute' },
  'right-bottom': { boxClass: 'right-bottom-box absolute' },
}
</script>

<template>
  <section class="crafting" id="services">
    <div class="crafting__inner">
      <div class="crafting__title">
        <span>CRAFTING A</span>
        <span>BETTER WORLD</span>

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
  background: var(--color-dark-purple);
  padding: 150px 24px 90px 24px;
}

.top {
  rotate: 50deg;
  position: absolute;
  left: 20px;
  top: -60px;
  width: 170px;
}

.top-sec-text {
  rotate: 10deg;
}

.sec-text {
  top: 60px;
  position: absolute;
  left: -16px;
}

.crafting__inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.left-top-box {
  rotate: -21deg;
  left: 0px;
}

.left-bottom-box {
  z-index: 1;
  rotate: 20deg;
  left: -60px;
  bottom: -20px;
}

.bottom-second-text {
  rotate: 30deg;
}

.bottom-first-text {
  rotate: -10deg;
}

.right-top-box {
  right: 0;
  top: 0;
  z-index: 1;
  rotate: 25deg;
}

.right-bottom-box {
  z-index: 1;
  rotate: -12deg;
  right: -60px;
  bottom: 0;
}

.fit-content {
  height: fit-content;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.crafting__title {
  position: relative;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-white);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 500px) {
  .left-top-box {
    rotate: -30deg;
  }

  .right-top-box {
    right: -30px;
  }

  .right-bottom-box {
    right: -50px;
    bottom: -20px;
  }

  .top {
    left: 29px !important;
    top: -39px !important;
    width: 130px;
  }

  .bottom-second-text {
    top: 35px !important;
  }
}

@media screen and (min-width: 300px) and (max-width: 800px) {
  .left-top-box {
    left: -40px;
    rotate: -20deg;
  }

  .top {
    left: 2px;
    top: -43px;
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
    width: 500px;
  }
}
</style>
