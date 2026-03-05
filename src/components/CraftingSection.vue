<script setup>
const tags = [
  { text: 'Storytelling & Copy', color: 'pink' },
  { text: 'Digital Marketing & SEO', color: 'blue' },
  { text: 'Content Creation', color: 'orange' },
  { text: 'Full-stack development', color: 'green' },
  { text: 'Visual Identity', color: 'purple' },
  { text: 'Brand Strategy', color: 'lightgreen' },
]
</script>

<template>
  <section class="crafting" id="services">
    <div class="crafting__inner">
      <h2 class="crafting__title">CRAFTING A BETTER WORLD</h2>
      <div class="crafting__tags">
        <span
          v-for="(tag, i) in tags"
          :key="tag.text"
          class="crafting__tag"
          :class="`crafting__tag--${tag.color}`"
          :style="{ '--rotation': `${-15 + i * 8}deg`, '--delay': `${i * 0.1}s` }"
        >
          {{ tag.text }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.crafting {
  background: var(--color-dark-purple);
  padding: 80px 24px;
}

.crafting__inner {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.crafting__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-white);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
}

.crafting__tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.crafting__tag {
  padding: 12px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-white);
  border-radius: 8px;
  transform: rotate(var(--rotation));
  transition: transform 0.2s;
}

.crafting__tag:hover {
  transform: rotate(var(--rotation)) scale(1.05);
}

.crafting__tag--pink {
  background: #e91e63;
}

.crafting__tag--blue {
  background: #2196f3;
}

.crafting__tag--orange {
  background: #ff9800;
}

.crafting__tag--green {
  background: #4caf50;
}

.crafting__tag--purple {
  background: #9c27b0;
}

.crafting__tag--lightgreen {
  background: #8bc34a;
}
</style>
