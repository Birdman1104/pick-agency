<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero__top">
      <div class="container hero__top-inner">
        <div class="hero__brand">
          <img src="/logo_big.png" alt="PICK" class="hero__logo" />
          <img src="/marketing_agency_distorted_text.png" alt="MARKETING AGENCY" class="hero__subtitle" />
        </div>
      </div>
    </div>
    <div class="hero__bottom">
      <div class="container hero__bottom-inner">
        <h1 class="hero__title">MARKETING AGENCY</h1>
        <p class="hero__description">
          At PICK Agency, we specialize in designing and installing modern solutions
          for both residential and business needs. Full marketing & strategy,
          influencer marketing, and creative digital campaigns.
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
  gap: 16px;
}

.hero__logo {
  max-width: 780px;
  width: 100%;
  height: auto;
}

.hero__subtitle {
  max-width: 400px;
  width: 100%;
  height: auto;
}

.hero__bottom {
  position: relative;
  background: var(--color-yellow);
  padding: 60px 0 0;
  min-height: 500px;
}

.hero__bottom-inner {
  text-align: center;
  padding-bottom: 24px;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.hero__description {
  max-width: 600px;
  margin: 0 auto 32px;
  font-size: 1rem;
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
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
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

  .hero__subtitle {
    max-width: 680px;
  }

  .hero__bottom {
    padding: 80px 0 0;
  }
}
</style>
