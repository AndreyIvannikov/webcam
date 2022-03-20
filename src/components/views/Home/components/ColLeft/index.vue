<template>
  <div :class="$style.wrapper">
    <div :class="$style.row"><WInput placeholder="Поиск по названию" /></div>
    <div :class="[$style.row, $style.dropdownList]">
      <WDropdown :dropdownList="dropdownList1" />
      <WDropdown :dropdownList="dropdownList2" />
    </div>
    <div :class="$style.row">
      <WDropdown :dropdownList="dropdownList" />
    </div>
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
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  components: {},
  setup() {
    const value = ref([20, 40])
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
    return {
      dropdownList,
      dropdownList1,
      dropdownList2,
      value,
    }
  },
}
</script>

<style lang="scss" module src="./style.module.scss"></style>
