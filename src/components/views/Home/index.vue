<template>
  <div :class="$style.wrapper">
    <div :class="$style.sideBar">
      <col-left />
    </div>
    <div :class="$style.main">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quam
      rem. Aliquid optio neque quam maiores, ratione enim non sed, libero ipsum
      tempore adipisci nulla amet corrupti minima cupiditate atque.
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import ColLeft from './components/ColLeft/index.vue'

export default {
  components: {
    ColLeft,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" module src="./style.module.scss"></style>
