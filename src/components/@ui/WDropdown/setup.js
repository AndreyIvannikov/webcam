import { ref, computed, watch } from 'vue'
export default {
  name: 'Dropdown',
  props: {
    dropdownList: {
      type: Array,
    },
    modelValue: {
      type: undefined, // объявить какие типы у modelValue
    },
  },
  // todo убрать object destruction отсюда
  setup({ value, dropdownList }, { emit }) {
    // переделать на proxy
    const proxy = computed({
      get: () => value,
      set: val => emit('update:modelValue', val)
    })
    const currentItem = ref(dropdownList[0].value)
    const showList = ref(false)
    const dropdownTitle = computed(
      () =>
        dropdownList.find((item) => item?.value === currentItem?.value)?.title
    )
    const toggleShowList = () => {
      showList.value = !showList.value
    }
    watch(
      () => currentItem.value,
      () => toggleShowList()
    )
    return {
      proxy,
      currentItem,
      dropdownTitle,
      toggleShowList,
      showList,
    }
  },
}
