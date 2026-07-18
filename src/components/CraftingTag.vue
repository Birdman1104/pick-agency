<script setup>
import { TAG_COLORS } from "../data/tagColors";

defineProps({
  tag: {
    type: Object,
    required: true,
  },
  tagClasses: {
    type: String,
    default: "",
  },
});

defineEmits(["click"]);
</script>

<template>
  <div class="crafting__tag" :class="tagClasses" :style="{
    background: TAG_COLORS[tag.color]?.background,
    color: TAG_COLORS[tag.color]?.color,
  }" @click="$emit('click', tag)">
    {{ tag.text }}
  </div>
</template>

<style scoped>
.crafting__tag {
  padding: 12px 15px;
  font-size: 1.4rem;
  font-family: var(--font-body);
  font-weight: 300;
  letter-spacing: 0.0075em;
  border-radius: 8px;
  transform: rotate(var(--rotation, 0deg));
  transition: transform 0.2s;
  cursor: pointer;
}

.crafting__tag:hover {
  transform: rotate(var(--rotation, 0deg)) scale(1.05);
}

@media screen and (max-width: 700px) {
  .crafting__tag {
    font-size: 0.9rem;
    padding: 11px 16px;
    animation: tagFloat 3.2s ease-in-out infinite;
    animation-delay: 1.35s;
  }

  .crafting__tag.top {
    animation-delay: 0s;
  }

  .crafting__tag.top-sec-text {
    animation-delay: 0.55s;
  }

  .crafting__tag.right-top-text {
    animation-delay: 1.1s;
  }

  .crafting__tag.bottom-first-text {
    animation-delay: 0.3s;
  }

  .crafting__tag.bottom-second-text {
    animation-delay: 0.85s;
  }
}

@keyframes tagFloat {
  0%,
  100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -5px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .crafting__tag {
    animation: none;
  }
}
</style>
