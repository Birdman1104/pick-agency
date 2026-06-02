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
  <div
    class="crafting__tag"
    :class="tagClasses"
    :style="{
      background: TAG_COLORS[tag.color]?.background,
      color: TAG_COLORS[tag.color]?.color,
    }"
    @click="$emit('click', tag)"
  >
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
  cursor: url("cursor.svg"), auto;
}

@media screen and (max-width: 500px), (min-width: 300px) and (max-width: 800px) {
  .crafting__tag {
    font-size: 10px;
  }
}
</style>
