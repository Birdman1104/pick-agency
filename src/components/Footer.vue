<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const sitemapLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Projects', href: '#portfolio' },
  { label: 'Contact Us', href: '#contact' },
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'TikTok', href: '#' },
]

const JUMP_DURATION = 2000
const touchColorPairs = [
  { emailBg: '#fcb316', emailColor: '#2d1b4e', smileyBkgFilter: 'none' },
  { emailBg: '#E588B2', emailColor: '#2E154C', smileyBkgFilter: 'hue-rotate(180deg)' },
  { emailBg: '#9C88B5', emailColor: '#2E154C', smileyBkgFilter: 'hue-rotate(90deg)' },
  { emailBg: '#FCB316', emailColor: '#014934', smileyBkgFilter: 'hue-rotate(270deg)' },
]

const colorIndex = ref(0)
let touchTimeout
let touchInterval

function cycleColors() {
  colorIndex.value = (colorIndex.value + 1) % touchColorPairs.length
}

onMounted(() => {
  touchTimeout = setTimeout(() => {
    cycleColors()
    touchInterval = setInterval(cycleColors, JUMP_DURATION)
  }, JUMP_DURATION / 2)
})

onUnmounted(() => {
  clearTimeout(touchTimeout)
  clearInterval(touchInterval)
})
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <div class="footer__logo-row">
          <img src="/logo_big.png" alt="PICK" class="footer__logo" />
        </div>
        <div class="footer__brand-visual">
          <a href="mailto:pickagency@gmail.com" class="footer__email" :style="{
            background: touchColorPairs[colorIndex].emailBg,
            color: touchColorPairs[colorIndex].emailColor,
          }">
            pickagency@gmail.com
          </a>
          <div class="footer__smiley-wrap">
            <img src="/smiley_bkg.png" alt="" class="footer__smiley-bkg" aria-hidden="true"
              :style="{ filter: touchColorPairs[colorIndex].smileyBkgFilter }" />
            <img src="/smiley.png" alt="" class="footer__smiley" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div class="footer__sitemap">
        <h4 class="footer__heading">Sitemap</h4>
        <nav class="footer__nav">
          <a v-for="link in sitemapLinks" :key="link.label" :href="link.href" class="footer__link">
            {{ link.label }}
          </a>
        </nav>
      </div>
      <div class="footer__socials">
        <h4 class="footer__heading">Socials</h4>
        <nav class="footer__nav">
          <a v-for="social in socialLinks" :key="social.label" :href="social.href" class="footer__link">
            {{ social.label }}
          </a>
        </nav>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copyright">© 2026 Pick Agency. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-dark-purple);
  padding: 60px 0 0;
}

.footer__inner {
  display: grid;
  gap: 40px;
  padding-bottom: 40px;
}

@media (min-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.footer__logo-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer__logo {
  height: 60px;
  width: auto;
}

.footer__brand-visual {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
}

.footer__smiley-wrap {
  position: absolute;
  right: 120px;
  top: -100px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: smileyJump 2s ease-in-out infinite;
}

.footer__smiley-bkg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 0;
  transition: filter 0.15s ease;
}

.footer__smiley {
  position: relative;
  width: 32px;
  height: 32px;
  z-index: 1;
}

.footer__email {
  font-size: 0.95rem;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  transform: rotate(var(--rotation, -15deg));
  transition: background 0.15s ease, color 0.15s ease;
}

@keyframes smileyJump {

  0%,
  100% {
    top: -100px;
  }

  50% {
    top: -70px;
  }
}

.footer__email:hover {
  opacity: 0.9;
}

.footer__heading {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--color-yellow);
  margin-bottom: 16px;
}

.footer__nav {
  display: flex;
  flex-direction: column;
}

.footer__link {
  font-size: 0.9rem;
  color: var(--color-yellow);
  opacity: 0.9;
}

.footer__link:hover {
  opacity: 1;
}

.footer__bottom {
  padding: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__copyright {
  font-size: 0.85rem;
  color: var(--color-white);
  opacity: 0.8;
  text-align: center;
}
</style>
