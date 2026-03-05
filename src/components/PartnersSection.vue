<script setup>
const partners = [
  { logo: '/partner_1.png', name: 'Company' },
  { logo: '/partner_2.png', name: 'Support' },
  { logo: '/partner_3.png', name: 'Consult' },
  { logo: '/partner_4.png', name: 'Contact' },
  { logo: '/partner_5.png', name: '' },
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
    <a href="mailto:arsenmazmanyan11@gmail.com" class="partners__contact-btn" aria-label="Contact us">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    </a>
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

.partners__contact-btn {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-dark-purple);
  color: var(--color-white);
  z-index: 50;
  transition: transform 0.2s;
}

.partners__contact-btn:hover {
  transform: translateY(-50%) scale(1.05);
}

@media (max-width: 768px) {
  .partners__contact-btn {
    width: 48px;
    height: 48px;
  }
}
</style>
