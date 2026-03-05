<script setup>
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
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <div class="footer__logo-row">
          <img src="/logo_top.png" alt="PICK" class="footer__logo" />
          <img src="/smiley.png" alt="" class="footer__smiley" aria-hidden="true" />
        </div>
        <a href="mailto:pickagency@gmail.com" class="footer__email">pickagency@gmail.com</a>
      </div>
      <div class="footer__sitemap">
        <h4 class="footer__heading">Sitemap</h4>
        <nav class="footer__nav">
          <a
            v-for="link in sitemapLinks"
            :key="link.label"
            :href="link.href"
            class="footer__link"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
      <div class="footer__socials">
        <h4 class="footer__heading">Socials</h4>
        <nav class="footer__nav">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            class="footer__link"
          >
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
  height: 36px;
  width: auto;
}

.footer__smiley {
  width: 32px;
  height: 32px;
}

.footer__email {
  font-size: 0.95rem;
  color: var(--color-yellow);
  padding: 8px 16px;
  background: rgba(245, 213, 71, 0.2);
  border-radius: 20px;
  display: inline-block;
}

.footer__email:hover {
  opacity: 0.9;
}

.footer__heading {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-white);
  margin-bottom: 16px;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__link {
  font-size: 0.9rem;
  color: var(--color-white);
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
