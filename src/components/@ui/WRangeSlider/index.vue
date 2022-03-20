<template>
  <div :class="$style.wrapper">
    <Slider class="slider-blue" v-model="value" :tooltips="false"></Slider>
  </div>
</template>

<script src="./setup.js" lang="js"></script>
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss" module src="./style-module.scss"></style>
