<template>
  <div :class="$style.wrapper">
    <div :class="$style.sideBar">
      <col-left />
    </div>
    <div :class="$style.main">
     test - 22
    </div>
  </div>
</template>

<script>
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
