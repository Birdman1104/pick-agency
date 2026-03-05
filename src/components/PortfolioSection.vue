<script setup>
const projects = [
  { image: '/collage_1.png', name: 'Project Name' },
  { image: '/collage_2.png', name: 'Project Name' },
  { image: '/collage_3.png', name: 'Project Name' },
  { image: '/collage_4.png', name: 'Project Name' },
]
</script>

<template>
  <section class="portfolio">
    <div class="container">
      <h2 class="portfolio__title">PORTFOLIO</h2>
      <div class="portfolio__grid">
        <article
          v-for="(project, i) in projects"
          :key="project.image"
          class="portfolio__card"
          :class="{ 'portfolio__card--large': i === 0 }"
        >
          <div class="portfolio__image">
            <img :src="project.image" :alt="project.name" />
          </div>
          <p class="portfolio__name">{{ project.name }}</p>
        </article>
      </div>
      <a href="#contact" class="portfolio__link">
        View More
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  border-radius: 12px;
  overflow: hidden;
}

.portfolio__card--large {
  grid-row: span 2;
}

.portfolio__image {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.portfolio__card--large .portfolio__image {
  aspect-ratio: 3/4;
}

@media (min-width: 768px) {
  .portfolio__card--large .portfolio__image {
    height: 100%;
    aspect-ratio: auto;
  }
}

.portfolio__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.portfolio__name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-dark-purple);
  margin-top: 12px;
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
</style>
