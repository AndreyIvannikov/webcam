import { ref, computed, watch } from 'vue'
export default {
  name: 'Dropdown',
  props: {
    dropdownList: {
      type: Array,
    },
  },
  setup({ dropdownList }) {
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
      currentItem,
      dropdownTitle,
      toggleShowList,
      showList,
    }
  },
}
