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
      document.body.style.overflow = 'hidden'
    } else {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
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
  padding: 24px 16px;
  padding-bottom: max(24px, env(safe-area-inset-bottom));
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
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
  padding: 40px 32px 32px;
  border-radius: 12px;
  width: min(740px, 100%);
  max-height: min(480px, calc(100dvh - 48px));
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin: auto;
}

.modal-title {
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  margin-bottom: 12px;
  line-height: 1.15;
  padding-inline: 28px;
  font-family: 'BebasNeue', sans-serif;
  letter-spacing: 0.03em;
}

.modal-description {
  margin-bottom: 0;
  font-size: clamp(0.9rem, 2.2vw, 1.05rem);
  line-height: 1.55;
  max-width: 56ch;
}

.close-btn {
  position: absolute;
  top: 4px;
  right: 8px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 100;
  line-height: 1;
  color: inherit;
  z-index: 1;
}

@media screen and (max-width: 700px) {
  .overlay {
    align-items: flex-end;
    padding: 12px 12px max(12px, env(safe-area-inset-bottom));
  }

  .modal {
    width: 100%;
    max-height: min(85dvh, calc(100dvh - 24px));
    height: auto;
    padding: 36px 20px 24px;
    border-radius: 16px 16px 12px 12px;
    justify-content: flex-start;
  }

  .modal-enter-from .modal,
  .modal-leave-to .modal {
    transform: translateY(24px) scale(1);
  }

  .modal-title {
    font-size: 1.65rem;
    margin-bottom: 14px;
    padding-inline: 32px;
  }

  .modal-description {
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: left;
  }

  .close-btn {
    top: 2px;
    right: 4px;
    font-size: 34px;
  }
}
</style>