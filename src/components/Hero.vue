<script setup>
/**
 * Chaotic final layout + random-ish drop delays (stable per build).
 * Each entry: char, rotation (deg), translate x/y (px), animation delay (s)
 */
const chaosLetters = [
  { char: "M", r: -28, tx: 30, ty: 12, d: 0.08 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.1 },
  { char: "A", r: -70, tx: 30, ty: 50, d: 0.72 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.2 },
  { char: "R", r: 18, tx: -20, ty: 15, d: 0.28 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.1 },
  { char: "K", r: 6, tx: -20, ty: 60, d: 1.05 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.25 },
  { char: "E", r: -6, tx: -20, ty: 9, d: 0.42 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.15 },
  { char: "T", r: -10, tx: -30, ty: 40, d: 0.18 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "I", r: 24, tx: -60, ty: 0, d: 0.88 },
  { char: "\u00A0", isSpace: true, r: 0, tx: -10, ty: 0, d: 0.62 },
  { char: "N", r: 16, tx: -70, ty: 40, d: 0.55 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "G", r: -20, tx: -60, ty: 11, d: 0.33 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "A", r: -49, tx: -40, ty: 80, d: 0.12 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "G", r: 0, tx: -80, ty: 85, d: 0.95 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "E", r: 0, tx: -100, ty: 25, d: 0.48 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "N", r: 0, tx: 375, ty: -60, d: 0.25 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "C", r: 14, tx: 350, ty: -80, d: 1.18 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "Y", r: -38, tx: 343, ty: -127, d: 0.65 },
];

const chaosLettersMB = [
  { char: "M", r: -28, tx: 10, ty: 12, d: 0.08 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.1 },
  { char: "A", r: -45, tx: 15, ty: 50, d: 0.72 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.2 },
  { char: "R", r: 18, tx: -20, ty: 15, d: 0.28 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.1 },
  { char: "K", r: 6, tx: -10, ty: 40, d: 1.05 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.25 },
  { char: "E", r: -6, tx: -10, ty: 9, d: 0.42 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.15 },
  { char: "T", r: -10, tx: -20, ty: 55, d: 0.18 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "I", r: 24, tx: -50, ty: 0, d: 0.88 },
  { char: "\u00A0", isSpace: true, r: 0, tx: -10, ty: 0, d: 0.62 },
  { char: "N", r: 45, tx: -60, ty: 40, d: 0.55 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "G", r: -40, tx: 20, ty: 20, d: 0.33 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "A", r: -49, tx: -50, ty: -14, d: 0.12 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "G", r: 0, tx: -60, ty: 15, d: 0.95 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "E", r: 30, tx: -60, ty: 0, d: 0.48 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "N", r: -35, tx: -15, ty: 0, d: 0.25 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "C", r: 14, tx: 10, ty: -10, d: 1.18 },
  { char: "\u00A0", isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: "Y", r: -30, tx: 20, ty: 0, d: 0.65 },
];
import { useMediaQuery } from "@vueuse/core";
import { onMounted, ref } from "vue";

const isMobile = useMediaQuery("(max-width: 768px)");
const isVisible = ref(false);
const isAligned = ref(false);

onMounted(() => {
  if (isMobile.value) {
    isVisible.value = true;
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold: 0.4 },
  );

  const el = document.querySelector(".hero__top");
  if (el) observer.observe(el);

  const handleScroll = () => {
    const heroBottom = document.querySelector(".hero__bottom");
    if (!heroBottom) return;

    const bottomRect = heroBottom.getBoundingClientRect();

    if (bottomRect.top < window.innerHeight * 0.7) {
      isAligned.value = true;
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
});
</script>

<template>
  <section class="hero">
    <div
      class="hero__top"
      :class="{ 'hero__top--centered': !isMobile && isAligned }"
    >
      <div class="container hero__top-inner">
        <div
          class="hero__brand"
          :class="{ 'hero__brand--centered': !isMobile && isAligned }"
        >
          <img
            src="/logo_big.png"
            alt="PICK"
            :class="['hero__logo', { 'hero__logo--visible': isAligned }]"
          />
          <div
            class="hero__subtitle-chaos"
            :class="{ 'hero__subtitle-chaos--aligned': !isMobile && isAligned }"
            role="text"
            aria-label="MARKETING AGENCY"
          >
            <span
              v-for="(item, i) in isMobile ? chaosLettersMB : chaosLetters"
              :key="i"
              class="hero__chaos-letter"
              :class="{
                'hero__chaos-letter--space': item.isSpace,
                'is-visible': !isMobile && isVisible,
              }"
              :style="{
                '--r': `${item.r}deg`,
                '--tx': `${item.tx}px`,
                '--ty': `${item.ty}px`,
                '--delay': `${item.d}s`,
              }"
            >
              {{ item.char }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__bottom">
      <div class="container hero__bottom-inner">
        <div class="hero__title-target">
          <h2
            :class="[
              'hero__title',
              'hero__title--desktop',
              { 'hero__title--visible': isAligned },
            ]"
          >
            MARKETING AGENCY
          </h2>
        </div>
        <h2 class="hero__title hero__title--mobile">MARKETING AGENCY</h2>
        <p class="hero__description">
          At Pick Agency, we specialize in designing and installing modern solar
          systems for both residential and business needs.
        </p>
        <a href="#contact" class="hero__cta">Contact Us</a>
      </div>
      <div class="hero__image">
        <img src="/section_2_bkg.png" alt="Creative workspace" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 80px;
  max-width: 100%;
}

.hero__top {
  background: var(--color-dark-purple);
  padding: 60px 0 40px;
  overflow-x: clip;
  transition:
    min-height 0.6s ease,
    padding 0.6s ease;
}

.hero__top--centered {
  min-height: calc(100dvh - 80px);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__top-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.hero__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  max-width: 100%;
}

.hero__brand--centered {
  overflow: visible;
}

.hero__logo {
  width: min(92%, 78vw);
  max-width: min(900px, 100%);
  height: auto;
  display: block;
  transform-origin: center center;
}

.hero__title-target {
  width: 100%;
  min-height: 1.1em;
  margin-bottom: 20px;
}

.hero__subtitle-chaos {
  --letter-spread: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  row-gap: 0.06em;
  max-width: min(100%, 800px);
  width: 100%;
  font-family: "BebasNeue", sans-serif;
  font-weight: 800;
  color: var(--color-yellow);
  line-height: 0.85;
  padding: 2px 0 19px;
  margin-top: -4px;
  min-height: 3.2em;
  overflow: hidden;
}

.hero__chaos-letter {
  display: inline-block;
  flex-shrink: 0;
  transform-origin: 50% 88%;
  opacity: 0;
  transform: translateY(-110vh);
  will-change: transform, opacity;
}

.hero__chaos-letter.is-visible {
  animation: letterDrop 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--delay);
}

.hero__subtitle-chaos--aligned {
  opacity: 0;
  visibility: hidden;
  height: 0;
  min-height: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  pointer-events: none;
  transition:
    opacity 0.45s ease,
    visibility 0.45s ease,
    height 0.45s ease,
    min-height 0.45s ease,
    padding 0.45s ease,
    margin 0.45s ease;
}

.hero__chaos-letter--space {
  width: 0.25em;
  min-width: 0.25em;
}

@keyframes letterDrop {
  0% {
    transform: translateY(-110vh)
      translateX(calc(var(--tx, 0px) * 0.45 * var(--letter-spread, 1)))
      rotate(calc(var(--r, 0deg) * 1.35 + 18deg));
    opacity: 0;
  }

  55% {
    opacity: 1;
  }

  100% {
    transform: translateX(calc(var(--tx, 0px) * var(--letter-spread, 1)))
      translateY(var(--ty, 0px)) rotate(var(--r, 0deg));
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__chaos-letter {
    animation: none;
    opacity: 1;
    transform: translateX(calc(var(--tx, 0px) * var(--letter-spread, 1)))
      translateY(var(--ty, 0px)) rotate(var(--r, 0deg));
  }

  .hero__subtitle-chaos--aligned {
    opacity: 0;
    visibility: hidden;
  }

  .hero__title--desktop {
    opacity: 1;
    transform: none;
  }
}

.hero__bottom {
  position: relative;
  background: var(--color-yellow);
  padding: 60px 0 0;
  min-height: 500px;
  overflow-x: clip;
  max-width: 100%;
}

.hero__bottom-inner {
  text-align: center;
  padding-bottom: -24px;
}

.hero__title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 400;
  color: var(--color-dark-purple);
  font-family: "BebasNeue", sans-serif;
  letter-spacing: 0.02em;
  line-height: 0.95;
  text-transform: uppercase;
}

.hero__title--desktop {
  display: block;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.5s ease 0.1s,
    transform 0.5s ease 0.1s;
}

.hero__title--desktop.hero__title--visible {
  opacity: 1;
  transform: translateY(0);
}

.hero__title--mobile {
  display: none;
  margin-bottom: 20px;
}

.hero__description {
  max-width: 640px;
  margin: 0 auto 32px;
  font-size: 1.2rem;
  color: var(--color-dark-purple);
  font-family: var(--font-body), sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

.hero__cta {
  display: inline-block;
  padding: 15px clamp(32px, 8vw, 100px);
  max-width: 100%;
  box-sizing: border-box;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-yellow);
  background: var(--color-dark-purple);
  border-radius: 12px;
  font-family: var(--font-body), sans-serif;
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.hero__cta:hover {
  opacity: 0.95;
  transform: translateY(-2px);
}

.hero__image {
  position: relative;
  width: 100%;
  margin: 0 auto -30px auto;
}

.hero__image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px 12px 0 0;
}

@media (min-width: 768px) {
  .hero__top {
    padding: 120px 0 60px;
  }

  .hero__top--centered {
    padding: 0;
  }

  .hero__logo {
    width: min(92%, 72vw);
    max-width: min(920px, 100%);
  }

  .hero__subtitle-chaos {
    max-width: min(100%, 800px);
    font-size: 100px;
    padding: 4px 0 50px;
    margin-top: -8px;
  }

  .hero__bottom {
    padding: 80px 0 0;
  }
}

@media (max-width: 767px) {
  .hero__chaos-letter {
    opacity: 1;
    transform: translateX(var(--tx)) translateY(var(--ty)) rotate(var(--r));
    animation: none !important;
  }

  .hero__logo {
    max-width: 260px !important;
  }

  .hero__subtitle-chaos {
    font-size: 66px;
    min-height: 220px;
    position: relative;
  }

  .hero__title--desktop {
    display: none;
  }

  .hero__title-target {
    display: none;
  }

  .hero__title--mobile {
    display: block;
    font-size: 3.5rem;
    margin-bottom: 16px;
    line-height: 1;
  }
}

@media (max-width: 500px) {
  .hero__subtitle-chaos {
    font-size: 55px;
    min-height: 220px;
    position: relative;
  }

  .hero__title--mobile {
    font-size: 2.75rem;
  }

  .hero__cta {
    padding: 14px 28px;
    width: min(100%, 280px);
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
  }
}
</style>
