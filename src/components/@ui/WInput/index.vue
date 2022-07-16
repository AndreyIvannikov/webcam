<template>
  <div :class="$style.input">
    <w-icon iconName="search" />
    <input type="text" :placeholder="placeholder" v-model="input" />
    <w-icon
      iconName="close"
      v-if="input"
      size="big"
      @click="clearInput"
      :class="$style.iconClose"
    />
  </div>
</template>

<script src="./setup.js" lang="js"></script>
<style lang="scss" module src="./style.module.scss"></style>
