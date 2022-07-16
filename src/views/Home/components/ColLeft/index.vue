<template>
  <div :class="$style.wrapper">
    <div :class="$style.row"><WInput placeholder="Поиск по названию" /></div>

    <h3 style="color: red">
      добавить курсоры + добавить состояния на ховер и фокус + добавить анимации выпадающим спискам
    </h3>
    <div :class="[$style.row, $style.dropdownList]">
      <WDropdown :dropdownList="dropdownList1">
        <template #default="{ item }">
          <w-checkbox
            :label="item.title"
            :value="item.value"
            v-model="dropdown"
          />
        </template>
      </WDropdown>
      <WDropdown :dropdownList="dropdownList2">
        <template #default="{ item }">
          <w-checkbox
            :label="item.title"
            :value="item.value"
            v-model="dropdown"
          />
        </template>
      </WDropdown>
    </div>
    <div :class="$style.row">
      <WDropdown :dropdownList="dropdownList" v-model="dropdown">
        <template #default="{ item }">
          <w-checkbox
            :label="item.title"
            :value="item.value"
            v-model="dropdown"
          />
        </template>
      </WDropdown>
      >
    </div>
    <h3 style="color: red">
      стилизовать + добавить значения этих слайдеров по бокам
    </h3>
    <div :class="$style.row">
      <h4>% выплат</h4>
      <WRangeSlider />
    </div>
    <div :class="$style.row">
      <h4>Длина смены</h4>
      <WRangeSlider />
    </div>
    <div :class="$style.row">
      <h4>% выплат</h4>
      <WRangeSlider />
    </div>
    <div>
      <div :class="$style.chips">
        <WChips :title="item" v-for="item in dropdown" :key="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const value = ref([20, 40])
    const checkbox = ref([20, 40])
    const dropdownList = ref([
      { title: 'Только девушки', value: 'woman' },
      { title: 'Только парни', value: 'man' },
      { title: 'Парни и девушки', value: 'womanMan' },
    ])
    const dropdownList1 = ref([
      { title: 'Метро', value: 'woman' },
      { title: 'Метро1', value: 'man' },
      { title: 'Метро2', value: 'womanMan' },
    ])
    const dropdownList2 = ref([
      { title: 'Район', value: 'woman' },
      { title: 'Район1', value: 'man' },
      { title: 'Район2', value: 'womanMan' },
    ])
    const dropdown = ref([])
    return {
      dropdownList,
      dropdownList1,
      dropdownList2,
      value,
      dropdown,
      checkbox,
    }
  },
}
</script>

<style lang="scss" module src="./style.module.scss"></style>
