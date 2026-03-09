<template>
  <Teleport to="body">
    <div v-if="modelValue" class="overlay" @click.self="close">
      <div class="modal" :class="`modal--${variant}`">
        <button class="close-btn" @click="close">×</button>
        <h2 class="modal-title">{{ title }}</h2>

        <p class="modal-description">
          {{ description }}
        </p>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
  title: String,
  description: String,
  variant: String
})

const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}
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

.modal--pink {
  background: #E588B2;
  color: #2E154C;
  border: 4px solid #FF9AC7;
}

.modal--blue {
  background: #32668F;
  color: #FCB316;
  border: 4px solid #FCB316;
}

.modal--orange {
  background: #FCB316;
  color: #2E154C;
  border: 4px solid #FFD781;
}

.modal--green {
  background: #014934;
  color: #FCB316;
  border: 4px solid #FCB316;
}

.modal--lavender {
  background: #9C88B5;
  color: #2E154C;
  border: 4px solid #CEA5FF;
}

.modal--dark-orange {
  background: #F57E20;
  color: #014934;
  border: 4px solid #FF7100;
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