<script setup>
const projects = [
  { image: 'collage_1.png', name: 'Project Name' },
  { image: 'collage_2.png', name: 'Project Name' },
  { image: 'collage_3.png', name: 'Project Name' },
  { image: 'collage_4.png', name: 'Project Name' },
]
</script>

<template>
  <section class="portfolio">
    <div class="container">
      <h2 class="portfolio__title">PORTFOLIO</h2>
      <div class="portfolio__grid">
        <article class="portfolio__card portfolio__card--large">
          <div class="portfolio__image">
            <img :src="projects[0].image" :alt="projects[0].name" />
          </div>
          <p class="portfolio__name">{{ projects[0].name }}</p>
          <div class="portfolio__image-overlay"></div>

        </article>
        <article class="cards-wrapper">

          <div class="wrapper">
            <div class="portfolio__card">
              <div class="portfolio__image">
                <img :src="projects[1].image" :alt="projects[1].name" />
              </div>
              <p class="portfolio__name">{{ projects[1].name }}</p>
              <div class="portfolio__image-overlay"></div>
            </div>
            <div class="portfolio__card">
              <div class="portfolio__image">
                <img :src="projects[2].image" :alt="projects[2].name" />
              </div>
              <p class="portfolio__name">{{ projects[2].name }}</p>
              <div class="portfolio__image-overlay"></div>
            </div>
          </div>
          <div class="portfolio__card">
            <div class="portfolio__image">
              <img :src="projects[3].image" :alt="projects[3].name" />
            </div>
            <p class="portfolio__name">{{ projects[3].name }}</p>
            <div class="portfolio__image-overlay"></div>
          </div>
        </article>
      </div>
      <div class="portfolio__link-wrapper">
        <a href="#contact" class="portfolio__link">
          View More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  background: var(--color-lavender);
  padding: 80px 0;
}

.portfolio__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--color-dark-purple);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
}

.portfolio__grid {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}

@media (min-width: 768px) {
  .portfolio__grid {
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto auto;
    gap: 24px;
  }
}

.portfolio__card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
}

.cards-wrapper {
  display: flex;
  height: 50%;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
}

.half-height {
  height: 50%;
}


.portfolio__card--large {
  grid-row: span 2;
}

.portfolio__image {
  overflow: hidden;
}

.portfolio__card--large .portfolio__image {
  height: 100%;
}

@media (min-width: 768px) {
  .portfolio__card--large .portfolio__image {
    height: 100%;
    aspect-ratio: auto;
  }
}

.wrapper {
  display: flex;
  gap: 10px;
}

.portfolio__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.portfolio__name {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-white);
  z-index: 1;
}

.portfolio__image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%);
}

.portfolio__link-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  width: fit-content;

  border-bottom: 1px solid var(--color-dark-purple);
}

.portfolio__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-dark-purple);
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.portfolio__link:hover {
  opacity: 0.8;
}

.container {
  width: fit-content;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
