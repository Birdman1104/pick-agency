<script setup>
const partners = [
  { logo: 'partner_1.png', name: 'Company' },
  { logo: 'partner_2.png', name: 'Support' },
  { logo: 'partner_3.png', name: 'Consult' },
  { logo: 'partner_4.png', name: 'Contact' },
  { logo: 'partner_5.png', name: '' },
]
</script>

<template>
  <section class="partners">
    <div class="container">
      <h2 class="partners__title">OUR PARTNERS</h2>
      <div class="partners__list">
        <div v-for="partner in partners" :key="partner.logo" class="partners__item">
          <img :src="partner.logo" :alt="partner.name" class="partners__logo" />
          <span v-if="partner.name" class="partners__name">{{ partner.name }}</span>
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
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--color-dark-purple);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
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
