<script setup>
const tools = [
  { logo: 'after-effects.png' },
  { logo: 'ahrefs.png' },
  { logo: 'figma.png' },
  { logo: 'google-ads.png' },
  { logo: 'google-analytics.png' },
  { logo: 'google-tag-manager.png' },
  { logo: 'illustrator.png' },
  { logo: 'meta.png' },
  { logo: 'photoshop.png' },
  { logo: 'premier-pro.png' },
  { logo: 'screaming-frog.png' },
  { logo: 'semrush.png' },
  { logo: 'slack.png' },
  { logo: 'spyfu.png' },
  { logo: 'tiktok.png' },
]

const marqueeTools = [...tools, ...tools]
</script>

<template>
  <section class="partners">
    <div class="container">
      <h2 class="partners__title">BUILT ON TRUSTED TECHNOLOGIES</h2>
    </div>

    <div class="partners__carousel">
      <div class="partners__track">
        <div v-for="(partner, index) in marqueeTools" :key="`${partner.logo}-${index}`" class="partners__item"
          :aria-hidden="index >= tools.length">
          <img :src="`/${partner.logo}`"
            :alt="index < tools.length ? partner.logo.replace('.png', '').replace(/-/g, ' ') : ''"
            class="partners__logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners {
  position: relative;
  background: var(--color-lavender);
  padding: 80px 0;
  overflow: hidden;
}

.partners__title {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  color: var(--color-dark-purple);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: 0.05em;
}

.partners__carousel {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right,
      transparent,
      black 8%,
      black 92%,
      transparent);
}

.partners__track {
  display: flex;
  align-items: center;
  width: max-content;
  gap: 64px;
  padding: 0 32px;
  animation: partners-scroll 50s linear infinite;
}

.partners__track:hover {
  animation-play-state: paused;
}

.partners__item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partners__logo {
  height: 80px;
  object-fit: contain;
}

@keyframes partners-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .partners__track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .partners__carousel {
    mask-image: none;
  }
}
</style>
