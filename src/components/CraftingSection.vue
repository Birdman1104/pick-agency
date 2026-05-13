<script setup>
import { computed, ref } from 'vue'
import { ROTATION_BASE, ROTATION_STEP, tagLayout, tags } from '../data/services'
import CraftingTag from './CraftingTag.vue'
import Modal from './Modal.vue'

const showModal = ref(false)
const selectedTag = ref(null)

function openModal(tag) {
  selectedTag.value = tag
  showModal.value = true
}

const BOX_ORDER = ['left-top', 'left-bottom', 'right-top', 'right-bottom']

const tagsByBox = computed(() => {
  const groups = Object.fromEntries(BOX_ORDER.map((box) => [box, []]))
  tagLayout.forEach(({ tagIndex, box, classes }) => {
    groups[box].push({ tag: tags[tagIndex], classes })
  })
  return groups
})

const boxConfig = {
  'left-top': {
    boxClass: 'left-top-box relative',
    style: { '--rotation': `${ROTATION_BASE + 1 * ROTATION_STEP}deg`, position: 'absolute' },
  },
  'left-bottom': { boxClass: 'left-bottom-box absolute' },
  'right-top': { boxClass: 'right-top-box absolute' },
  'right-bottom': { boxClass: 'right-bottom-box absolute' },
}
</script>

<template>
  <section class="crafting" id="services">
    <div class="crafting__inner">
      <div class="crafting__title">
        <span>OUR EXPERT</span>
        <span>SERVICE SUITE</span>

        <div v-for="(boxTags, boxName) in tagsByBox" :key="boxName" :class="boxConfig[boxName]?.boxClass"
          :style="boxConfig[boxName]?.style">
          <CraftingTag v-for="(item, i) in boxTags" :key="i" :tag="item.tag" :tag-classes="item.classes"
            @click="openModal" />
        </div>
      </div>

      <Modal v-if="selectedTag" v-model="showModal" :title="selectedTag.text" :description="selectedTag.description"
        :variant="selectedTag.color" />
    </div>
  </section>
</template>

<style scoped>
.crafting {
  background: var(--color-dark-purple);
  padding: 250px 24px 150px 24px;
}

.top {
  rotate: 40deg;
  position: absolute;
  left: -15px;
  top: -80px;
  width: 200px;
}

.top-sec-text {
  rotate: 10deg;
  position: absolute;
  left: -150px;
  top: -10px;
  white-space: nowrap;
  width: fit-content;
}

.sec-text {
  top: 60px;
  position: absolute;
  left: -16px;
  padding: 10px 30px 10px 30px;
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
}

.left-bottom-box {
  z-index: 1;
  rotate: 20deg;
  left: -60px;
  bottom: -30px;
}

.bottom-second-text {
  rotate: 20deg;
}


.right-top-box {
  right: -150px;
  top: -20px;
  z-index: 1;
  rotate: 25deg;
}

.right-bottom-box {
  z-index: 1;
  rotate: -12deg;
  right: -90px;
  bottom: -50px;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.crafting__title {
  position: relative;
  font-size: clamp(6.2rem, 66vw, 6rem);
  font-weight: 400;
  color: var(--color-white);
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: 0.05em;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 0;
}

@media screen and (max-width: 500px) {
  .left-top-box {
    rotate: -30deg;
  }

  .right-top-box {
    right: -30px;
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

  .top {
    left: 2px;
    top: -43px;
  }
}

@media screen and (min-width: 700px) and (max-width: 800px) {
  .crafting__title {
    width: 300px;
  }

  .left-top-box {
    left: -40px;
  }
}

@media screen and (min-width: 800px) and (max-width: 1024px) {
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
