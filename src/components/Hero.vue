<script setup>
/**
 * Chaotic final layout + random-ish drop delays (stable per build).
 * Each entry: char, rotation (deg), translate x/y (px), animation delay (s)
 */
const chaosLetters = [
  { char: 'M', r: -28, tx: 5, ty: 12, d: 0.08 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.1 },
  { char: 'A', r: 22, tx: -16, ty: -8, d: 0.72 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.2 },
  { char: 'R', r: -18, tx: -12, ty: 15, d: 0.28 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.1 },
  { char: 'K', r: 32, tx: -8, ty: -12, d: 1.05 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.25 },
  { char: 'E', r: -14, tx: -10, ty: 9, d: 0.42 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.15 },
  { char: 'T', r: 20, tx: -14, ty: -16, d: 0.18 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: 'I', r: -24, tx: 6, ty: 13, d: 0.88 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: 'N', r: 16, tx: -12, ty: -9, d: 0.55 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: 'G', r: -20, tx: -15, ty: 11, d: 0.33 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: 'A', r: 26, tx: 7, ty: -11, d: 0.12 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: 'G', r: -16, tx: -13, ty: 14, d: 0.95 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: 'E', r: 18, tx: -9, ty: -7, d: 0.48 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: 'N', r: -22, tx: -11, ty: 12, d: 0.25 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: 'C', r: 14, tx: -7, ty: -14, d: 1.18 },
  { char: '\u00A0', isSpace: true, r: 0, tx: 0, ty: 0, d: 0.62 },
  { char: 'Y', r: -30, tx: -20, ty: 8, d: 0.65 },
]

import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const isAligned = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.4 }
  )

  const el = document.querySelector('.hero__top')
  if (el) observer.observe(el)

  // Scroll event to trigger alignment
  const handleScroll = () => {
    const heroTop = document.querySelector('.hero__top')
    const heroBottom = document.querySelector('.hero__bottom')
    if (!heroTop || !heroBottom) return

    const topRect = heroTop.getBoundingClientRect()
    const bottomRect = heroBottom.getBoundingClientRect()

    // When hero__bottom comes into view, align letters
    if (bottomRect.top < window.innerHeight * 0.7 && !isAligned.value) {
      isAligned.value = true
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="hero">
    <div class="hero__top">
      <div class="container hero__top-inner">
        <div class="hero__brand">
          <img src="/logo_big.png" alt="PICK" :class="['hero__logo', { 'hero__logo--visible': isAligned }]" />
          <div class="hero__subtitle-chaos" role="text" aria-label="MARKETING AGENCY">
            <span v-for="(item, i) in chaosLetters" :key="i" class="hero__chaos-letter" :class="[
              {
                'hero__chaos-letter--space': item.isSpace,
                'is-visible': isVisible,
                'is-aligned': isAligned
              }
            ]" :style="{
              '--r': `${item.r}deg`,
              '--tx': `${item.tx}px`,
              '--ty': `${item.ty}px`,
              '--delay': `${item.d}s`,
              '--align-delay': `${item.d * 0.25}s`,
            }">
              {{ item.char }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__bottom">
      <div class="container hero__bottom-inner">
        <div class="hero__title-target"></div>
        <p class="hero__description">
          At Pick Agency, we specialize in designing and installing modern solar systems for both residential and
          business needs.
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
}

.hero__top {
  background: var(--color-dark-purple);
  padding: 60px 0 40px;
}

.hero__top-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.hero__logo {
  max-width: 780px;
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.hero__logo--visible {
  transform: scale(1.5);
  margin-top: 30%;
}

.hero__title-target {
  width: 100%;
  height: 100px;
}

.hero__subtitle-chaos {
  --letter-spread: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  max-width: min(100vw, 1200px);
  font-family: var(--font-heading, 'BebasNeue', sans-serif);
  font-size: clamp(3rem, 7.8vw, 4.2rem);
  font-weight: 800;
  color: var(--color-yellow);
  line-height: 0.85;
  padding: 2px 0 19px;
  margin-top: -4px;
  min-height: 3.2em;
}

.hero__chaos-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(-110vh);
  will-change: transform, opacity;
}

.hero__chaos-letter.is-visible {
  animation: letterDrop 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--delay);
}

.hero__chaos-letter.is-aligned {
  animation: letterAlign 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: var(--align-delay);
}


.hero__chaos-letter--space {
  width: 0.25em;
  min-width: 0.25em;
}

@keyframes letterDrop {
  0% {
    transform: translateY(-110vh) translateX(calc(var(--tx, 0px) * 0.5 * var(--letter-spread, 1))) rotate(calc(var(--r, 0deg) * 1.8 + 25deg));
    opacity: 0;
  }

  55% {
    opacity: 1;
  }

  100% {
    transform: translateX(calc(var(--tx, 0px) * var(--letter-spread, 1))) translateY(var(--ty, 0px)) rotate(var(--r, 0deg));
    opacity: 1;
  }
}

@keyframes letterAlign {
  0% {
    transform: translateX(var(--tx)) translateY(var(--ty)) rotate(var(--r)) scale(1);
    opacity: 1;
    color: var(--color-yellow);
  }

  50% {
    opacity: 0.9;
  }

  100% {
    transform: translateX(0) translateY(250px) rotate(0deg) scale(0.5);
    opacity: 1;
    color: var(--color-dark-purple);
    z-index: 1000;
    width: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__chaos-letter {
    animation: none;
    opacity: 1;
    transform: translateX(calc(var(--tx, 0px) * var(--letter-spread, 1))) translateY(var(--ty, 0px)) rotate(var(--r, 0deg));
  }
}

.hero__bottom {
  position: relative;
  background: var(--color-yellow);
  padding: 60px 0 0;
  min-height: 500px;
}

.hero__bottom-inner {
  text-align: center;
  padding-bottom: -24px;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--color-dark-purple);
  margin-bottom: 20px;
  letter-spacing: 0.05em;
}

.hero__description {
  max-width: 640px;
  margin: 0 auto 32px;
  font-size: 1.2rem;
  color: var(--color-black);
  line-height: 1.6;
  opacity: 0.9;
}

.hero__cta {
  display: inline-block;
  padding: 12px 70px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-yellow);
  background: var(--color-dark-purple);
  border-radius: 12px;
  transition: opacity 0.2s, transform 0.2s;
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
    padding: 80px 0 60px;
  }

  .hero__logo {
    max-width: 540px;
  }

  .hero__subtitle-chaos {
    --letter-spread: 1.38;
    max-width: min(100vw, 1800px);
    font-size: clamp(4.5rem, 11.7vw, 6.3rem);
    padding: 4px 0 29px;
    margin-top: -8px;
  }

  .hero__chaos-letter--space {
    width: 0.15em;
    min-width: 0.15em;
  }

  .hero__bottom {
    padding: 80px 0 0;
  }
}
</style>
