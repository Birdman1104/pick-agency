<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div v-if="modelValue" class="overlay" @click.self="close">
        <div class="modal" :style="variantStyles">
          <button class="close-btn" @click="close">×</button>
          <h2 class="modal-title">{{ title }}</h2>

          <p class="modal-description">
            {{ description }}
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch, onUnmounted } from 'vue'
import { TAG_COLORS } from '../data/tagColors'

const props = defineProps({
  modelValue: Boolean,
  title: String,
  description: String,
  variant: String,
})

const emit = defineEmits(['update:modelValue'])

const variantStyles = computed(() => {
  const colors = TAG_COLORS[props.variant]
  if (!colors) return {}
  return {
    background: colors.background,
    color: colors.color,
    border: `4px solid ${colors.border}`,
  }
})

function close() {
  emit('update:modelValue', false)
}

function handleEscape(e) {
  if (e.key === 'Escape') close()
}

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    } else {
      window.removeEventListener('keydown', handleEscape)
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal,
.modal-leave-active .modal {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.8);
  opacity: 0;
}

.modal {
  background: white;
  position: relative;
  padding: 30px;
  border-radius: 10px;
  max-width: 740px;
  max-height: 480px;
  width: 80%;
  height: 50%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-title {
  font-size: 35px;
  margin-bottom: 12px;
}

.modal-description {
  margin-bottom: 18px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 40px;
  font-weight: 100;
  color: inherit;
}

@media screen and (max-width: 600px) {
  .modal-title {
    font-size: 20px;
  }

  .modal-description {
    font-size: 12px;
  }
}
</style>