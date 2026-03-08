<script setup>
const tags = [
  { text: 'Storytelling & Copy', color: 'pink' },
  { text: 'Digital Marketing & SEO', color: 'blue' },
  { text: 'Content Creation', color: 'orange' },
  { text: 'Full-stack development', color: 'green' },
  { text: 'Visual Identity', color: 'purple' },
  { text: 'Brand Strategy', color: 'lightgreen' },
]
</script>

<template>
  <section class="crafting" id="services">
    <div class="crafting__inner">
      <div class="crafting__title">
        <span>
          CRAFTING A</span>
        <span>BETTER WORLD</span>
        <div class="left-top-box relative"
          :style="{ '--rotation': `${-15 + 1 * 8}deg`, '--delay': `${1 * 0.1}s`, position: 'absolute' }">
          <div class=" crafting__tag top " :class="`crafting__tag--${tags[0].color}`">
            {{ tags[0].text }}
          </div>
          <div class="fit-content crafting__tag top-sec-text" :class="`crafting__tag--${tags[1].color}`">
            {{ tags[1].text }}
          </div>
        </div>

        <div class="left-bottom-box" :class="'absolute'">
          <div class="crafting__tag" :class="`crafting__tag--${tags[2].color}`">
            {{ tags[2].text }}
          </div>
        </div>

        <div class=" right-top-box" :class="'absolute'">
          <div class="crafting__tag" :class="`crafting__tag--${tags[5].color}`">
            {{ tags[5].text }}

          </div>
        </div>
        <div class="right-bottom-box" :class="'absolute'">
          <div class="crafting__tag bottom-first-text" :class="`crafting__tag--${tags[3].color}`">
            {{ tags[3].text }}
          </div>
          <div class="crafting__tag bottom-second-text sec-text" :class="`crafting__tag--${tags[4].color}`">
            {{ tags[4].text }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.crafting {
  background: var(--color-dark-purple);
  padding: 150px 24px 90px 24px;
}

.top {
  rotate: 50deg;
  position: absolute;
  left: 20px;
  top: -60px;
  width: 170px;
}

.top-sec-text {
  rotate: 10deg;
}

.sec-text {
  top: 60px;
  position: absolute;
  left: -16px;
}

.crafting__inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.left-top-box {
  rotate: -21deg;
  left: 0px;
}

.left-bottom-box {
  z-index: 1;
  rotate: 20deg;
  left: -60px;
  bottom: -20px;
}

.bottom-second-text {
  rotate: 30deg;
}

.bottom-first-text {
  rotate: -10deg;
}

.right-top-box {
  right: 0;
  top: 0;
  z-index: 1;
  rotate: 25deg;
}

.right-bottom-box {
  z-index: 1;
  rotate: -12deg;
  right: -60px;
  bottom: 0
}

.fit-content {
  height: fit-content;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.crafting__title {
  position: relative;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-white);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -0.02em;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
}

.crafting__tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.top-first-text {
  position: absolute;
}

.crafting__tag {
  padding: 5px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-white);
  border-radius: 8px;
  transform: rotate(var(--rotation));
  transition: transform 0.2s;
}

.crafting__tag:hover {
  transform: rotate(var(--rotation)) scale(1.05);
}

.crafting__tag--pink {
  background: #e91e63;
}

.crafting__tag--blue {
  background: #2196f3;
}

.crafting__tag--orange {
  background: #ff9800;
}

.crafting__tag--green {
  background: #4caf50;
}

.crafting__tag--purple {
  background: #9c27b0;
}

.crafting__tag--lightgreen {
  background: #8bc34a;
}

@media screen and (max-width: 500px) {
  .left-top-box {
    rotate: -30deg;
  }

  .crafting__tag {
    font-size: 10px;
  }

  .right-top-box {
    right: -30px
  }

  .right-bottom-box {
    right: -50px;
    bottom: -20px;
  }

  .top {
    left: 29px !important;
    top: -39px !important;
    width: 130px;
  }

  .bottom-second-text {
    top: 35px !important;
  }
}

@media screen and (min-width: 300px) and (max-width: 800px) {

  .left-top-box {
    left: -40px;
    rotate: -20deg;
  }

  .crafting__tag {
    font-size: 10px;
  }

  .top {
    left: 2px;
    top: -43px;
  }

}


@media screen and (min-width: 700px) and(max-width: 800px) {
  .crafting__title {
    width: 300px;
  }

  .left-top-box {
    left: -40px;
  }

}

@media screen and (min-width: 800px)and (max-width: 1024px) {
  .crafting__title {
    width: 400px;
  }

  .left-top-box {
    left: -50px;
  }

}

@media screen and (min-width: 1024px) {
  .crafting__title {
    width: 500px;
  }

}
</style>
