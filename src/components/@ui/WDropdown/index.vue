<template>
  <div :class="$style.dropdown">
    <div :class="$style.title">
      <WButton borderGray icon @click="toggleShowList">
        {{ dropdownTitle }}
      </WButton>
    </div>
    <ul :class="$style.dropdown__list" v-if="showList">
      <li
        v-for="item in dropdownList"
        :class="[
          $style.dropdown__item,
          item.value === currentItem && $style.active,
        ]"
        :key="item.value"
      >
        <label>
          {{ item.title }}
          <input
            type="radio"
            hidden
            v-model="currentItem"
            :value="item.value"
          />
        </label>
      </li>
    </ul>
  </div>
</template>

<script src="./setup.js" lang="js"></script>
<style lang="scss" module src="./style-module.scss"></style>
