<template>
  <svg :class="$style.icon">
    <use :xlink:href="`#icon-${iconName}`" />
  </svg>
</template>

<script src="./script" lang="js"></script>
<style lang="scss" module>
.icon {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
