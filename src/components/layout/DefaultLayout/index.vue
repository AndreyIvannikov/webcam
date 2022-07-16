<template>
  <div>
    <WHeader />
    <slot />
  </div>
</template>

<script>
import WHeader from '@/components/@ui/WHeader/index.vue'
export default {
  components: {
    WHeader,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
