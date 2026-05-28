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
</script>

<template>
  <section class="partners">
    <div class="container">
      <h2 class="partners__title">BUILT ON TRUSTED TECHNOLOGIES</h2>
      <div class="partners__list">
        <div v-for="partner in tools" :key="partner.logo" class="partners__item">
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
}

.partners__title {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  color: var(--color-dark-purple);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: 0.05em;
}

.partners__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.partners__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.partners__logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.partners__name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-dark-purple);
}
</style>
