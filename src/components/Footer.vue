<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const currentYear = new Date(Date.now()).getFullYear()

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
  { smileyBkgColor: '#E588B2', img: 'smiley_0.png' },
  { smileyBkgColor: '#2B516F', img: 'smiley_1.png' },
  { smileyBkgColor: '#9C88B5', img: 'smiley_2.png' },
  { smileyBkgColor: '#054230', img: 'smiley_3.png' },
  { smileyBkgColor: '#D46F1F', img: 'smiley_4.png' },
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
          <div class="footer__email-wrap">
            <a href="mailto:pickagency@gmail.com" class="footer__email" :style="{
              background: '#FCB316',
            }">
              pickagency@gmail.com
            </a>
            <div class="footer__smiley-wrap">
              <div class="footer__smiley-bkg" aria-hidden="true"
                :style="{ backgroundColor: touchColorPairs[colorIndex].smileyBkgColor }" />
              <img :src="touchColorPairs[colorIndex].img" alt="" class="footer__smiley" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer__sitemap">
        <h4 class="footer__heading" style="font-family: 'Montserrat', sans-serif;">Sitemap</h4>
        <nav class="footer__nav">
          <a v-for="link in sitemapLinks" :key="link.label" :href="link.href" class="footer__link">
            {{ link.label }}
          </a>
        </nav>
      </div>
      <div class="footer__socials">
        <h4 class="footer__heading" style="font-family: 'Montserrat', sans-serif;">Socials</h4>
        <nav class="footer__nav">
          <a v-for="social in socialLinks" :key="social.label" :href="social.href" class="footer__link">
            {{ social.label }}
          </a>
        </nav>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copyright">Copyright © PickAgency {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-dark-purple);
  padding: 100px 0 0;
  font-family: 'Montserrat', sans-serif;
}

.footer__inner {
  display: grid;
  gap: 40px;
  padding-bottom: 40px;
}

@media (max-width: 767px) {
  .footer__inner {
    justify-items: center;
  }

  .footer__brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer__logo-row {
    justify-content: center;
  }

  .footer__brand-visual {
    justify-content: center;
  }

  .footer__sitemap,
  .footer__socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer__nav {
    align-items: center;
  }
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
  display: flex;
  flex-direction: row;
  align-items: center;
}

/* Wraps email so smiley is anchored to the email's top-right corner on any screen size */
.footer__email-wrap {
  position: relative;
  display: inline-block;
}

.footer__smiley-wrap {
  position: absolute;
  right: 0;
  top: -100px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: smileyJump 2s ease-in-out infinite;
}

.footer__smiley-bkg {
  position: absolute;
  inset: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  z-index: 0;
  transition: background-color 0.15s ease;
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
  color: #2E154C;
  font-weight: 600;
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
  font-size: 1.1rem;
  font-weight: 500;
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
  font-weight: 400;
  opacity: 0.9;
}

.footer__link:hover {
  opacity: 1;
}

.footer__bottom {
  padding: 24px;
}

.footer__copyright {
  font-size: 0.85rem;
  color: var(--color-white);
  opacity: 0.8;
  text-align: center;
}
</style>
