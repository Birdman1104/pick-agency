<script setup>
import AboutSection from './components/AboutSection.vue'
import CraftingSection from './components/CraftingSection.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import PartnersSection from './components/PartnersSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import StayConnected from './components/StayConnected.vue'
</script>

<template>
  <div class="app">
    <Header />
    <main>
      <Hero />
      <CraftingSection />
      <AboutSection />
      <PortfolioSection />
      <PartnersSection />
      <StayConnected />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  overflow-x: hidden;
  max-width: 100%;
}
</style>
