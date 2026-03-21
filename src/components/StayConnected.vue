<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
})

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <section class="stay-connected" id="contact">
    <div class="stay-connected__bg">
      <img src="/smiley_big.png" alt="" class="stay-connected__smiley" aria-hidden="true" />
    </div>
    <div class="container stay-connected__inner">
      <h2 class="stay-connected__title">
        <span class="stay-connected__asterisk">*</span>BOOK A CALL
      </h2>
      <form class="stay-connected__form" @submit="handleSubmit">
        <input v-model="form.name" type="text" placeholder="Name Surname" class="stay-connected__input" required />
        <input v-model="form.phone" type="tel" placeholder="Phone Number" class="stay-connected__input" required />
        <button type="submit" class="stay-connected__submit">Contact Us</button>
      </form>
    </div>
    <a href="mailto:arsenmazmanyan11@gmail.com" class="stay-connected__contact-btn" aria-label="Contact us">
      <img src="/email_icon.png" alt="" width="24" height="24" />
    </a>
  </section>
</template>

<style scoped>
.stay-connected {
  position: relative;
  background: var(--color-yellow);
  padding: 80px 24px;
  overflow: hidden;
}

.stay-connected__bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  pointer-events: none;
}

.stay-connected__smiley {
  position: absolute;
  right: -10%;
  top: 50%;
  transform: translateY(-50%);
  width: 60%;
  max-width: 400px;
  height: auto;
}


.stay-connected__inner {
  position: relative;
  z-index: 1;
  max-width: 500px;
  margin: 0 auto;
}

.stay-connected__title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: var(--color-dark-purple);
  text-align: center;
  letter-spacing: 0.15em;
  margin-bottom: 40px;
}

.stay-connected__asterisk {
  font-size: 2em;
  margin-right: 8px;
  position: relative;
  left: -10px;
}

.stay-connected__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stay-connected__input {
  padding: 16px 20px;
  font-size: 1rem;
  color: var(--color-dark-purple);
  background: var(--color-yellow);
  border: 1px solid var(--color-dark-purple);
  border-radius: 8px;
}

.stay-connected__input::placeholder {
  color: var(--color-dark-purple);
  opacity: 0.7;
}

.stay-connected__input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.8);
}

.stay-connected__submit {
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-yellow);
  background: var(--color-dark-purple);
  border-radius: 8px;
  transition: opacity 0.2s, transform 0.2s;
}

.stay-connected__submit:hover {
  opacity: 0.95;
  transform: translateY(-2px);
}


.stay-connected__contact-btn {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-dark-purple);
  color: var(--color-white);
  z-index: 50;
  transition: transform 0.2s;
}

.stay-connected__contact-btn:hover {
  transform: translateY(-50%) scale(1.05);
}
</style>
