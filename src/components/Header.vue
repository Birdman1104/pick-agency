<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact us', href: '#contact' },
]
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#" class="header__logo">
        <img src="/logo_big.png" alt="PICK Marketing Agency" class="header__logo-img" />
      </a>
      <nav class="nav" :class="{ 'nav--open': isMenuOpen }">
        <a v-for="link in navLinks" :key="link.label" :href="link.href" class="nav__link" @click="isMenuOpen = false">
          {{ link.label }}
        </a>
      </nav>
      <button class="menu-toggle" :class="{ 'menu-toggle--open': isMenuOpen }" aria-label="Toggle menu"
        @click="isMenuOpen = !isMenuOpen">
        <span class="menu-toggle__line"></span>
        <span class="menu-toggle__line"></span>
        <span class="menu-toggle__line"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  padding: 20px 0;
  background: var(--color-dark-purple-deep);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo-img {
  height: 40px;
  width: auto;
}

.nav {
  display: none;
  gap: 32px;
}

@media (min-width: 768px) {
  .nav {
    display: flex;
  }
}

.nav__link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-white);
  text-transform: capitalize;
}

.nav__link:hover {
  opacity: 0.9;
}

.menu-toggle {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
}

@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }
}

.menu-toggle__line {
  width: 24px;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

.menu-toggle--open .menu-toggle__line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle--open .menu-toggle__line:nth-child(2) {
  opacity: 0;
}

.menu-toggle--open .menu-toggle__line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 767px) {
  .nav--open {
    display: flex;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 24px;
    gap: 20px;
    background: var(--color-dark-purple);
  }
}
</style>
