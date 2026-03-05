<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import CraftingSection from './components/CraftingSection.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import StayConnected from './components/StayConnected.vue'
import Footer from './components/Footer.vue'
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
}
</style>
