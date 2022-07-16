<template>
  <button :class="[$style.btn, borderGray && $style.borderGray]">
    <slot />
    <w-icon :iconName="iconName" :class="$style.arrowRight" />
  </button>
</template>

<script src="./setup.js" lang="js"></script>
<style lang="scss" module src="./style-module.scss"></style>
