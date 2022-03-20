<template>
  <component :is="'defaultLayout'">
    <router-view />
  </component>
</template>

<script>
import { computed } from '@vue/runtime-core'
import defaultLayout from '@/components/layout/DefaultLayout/index.vue'
export default {
  components: {
    defaultLayout,
  },
  setup() {
    const layout = computed(() => 'defaultLayout')

    return {
      layout,
    }
  },
}
</script>

<style lang="scss" module>
.title {
  color: $pink;
}
</style>
