<template>
  <div :class="$style.overlay" v-if="showList" @click="showList = false"></div>
  <div :class="[$style.dropdown, showList && $style.open]">
    <div :class="$style.title">
      <WButton borderGray iconName="arrow" icon @click="toggleShowList">
        {{ dropdownTitle }} - 2
      </WButton>
    </div>
    <Transition
      name="slide-fade"
      @beforeLeave="beforeLeave"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <ul :class="[$style.dropdown__list]" v-if="showList">
        <li
          v-for="item in dropdownList"
          :key="item.value"
          :class="[
            $style.dropdown__item,
            item.value === currentItem && $style.active,
          ]"
        >
          <slot v-bind="{ item }" />
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script src="./setup.js" lang="js"></script>
<style lang="scss" module src="./style-module.scss"></style>
