<script setup>
</script>

<template>
  <section class="about" id="about">
    <div class="container about__inner">
      <div class="about__image">
        <img src="/section_3_img.png" alt="Team at PICK Agency" />
      </div>
      <div class="about__content">
        <p class="about__label">ABOUT US</p>
        <h2 class="about__title">
          <span class="about__title-line">We offer</span>
          <span class="about__title-line about__title-line--emphasis">premium-class</span>
          <span class="about__title-line">solar systems.</span>
        </h2>
        <p class="about__description">
          At PICK Agency, we specialize in designing and installing modern solutions
          for both residential and business needs. Our mission is to provide
          premium-class marketing and creative services that help our clients
          achieve their goals.
        </p>
        <a href="#contact" class="about__link">
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--color-lavender);
  padding: 80px 0;
}

.about__inner {
  display: grid;
  gap: 30px;
  align-items: center;
}

.about__image {
  border-radius: 12px;
  overflow: hidden;
}

.about__image img {
  width: 100%;
  height: auto;
  display: block;
}

.about__label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-dark-purple);
  letter-spacing: 0.15em;
  margin-bottom: 12px;
}

.about__title {
  display: flex;
  flex-direction: column;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  /* font-weight: 100; */
  color: var(--color-dark-purple);
  font-family: var(--font-body), sans-serif;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.about__title-line {
  display: block;
  font-weight: 200;
  margin-bottom: -10px;
}

.about__title-line--emphasis {
  font-weight: 800;
}

.about__description {
  font-size: 1.1rem;
  color: var(--color-dark-purple);
  opacity: 0.85;
  line-height: 1.7;
  margin-bottom: 24px;
}

.about__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-dark-purple);
}

.about__link:hover {
  opacity: 0.8;
}

@media (min-width: 768px) {
  .about__inner {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
