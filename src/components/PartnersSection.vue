<script setup>
const tools = [
  { logo: 'after-effects.png', name: 'After Effects' },
  { logo: 'ahrefs.png', name: 'Ahrefs' },
  { logo: 'figma.png', name: 'Figma' },
  { logo: 'google-ads.png', name: 'Google Ads' },
  { logo: 'google-analytics.png', name: 'Google Analytics' },
  { logo: 'google-tag-manager.png', name: 'Google Tag Manager' },
  { logo: 'illustrator.png', name: 'Illustrator' },
  { logo: 'meta.png', name: 'Meta' },
  { logo: 'photoshop.png', name: 'Photoshop' },
  { logo: 'premier-pro.png', name: 'Premier Pro' },
  { logo: 'screaming-frog.png', name: 'Screaming Frog' },
  { logo: 'semrush.png', name: 'Semrush' },
  { logo: 'slack.png', name: 'Slack' },
  { logo: 'spyfu.png', name: 'Spyfu' },
  { logo: 'tiktok.png', name: 'TikTok' },
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
          <img :src="partner.logo" :alt="partner.name" class="partners__logo" />
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

@media screen and (max-width: 700px) {
  .partners__title {
    line-height: normal;
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
