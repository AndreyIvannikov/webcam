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
    const checked = ref([])

    const dropdownTitle = computed(
      () =>
        dropdownList.find((item) => item?.value === currentItem?.value)?.title
    )

    const toggleShowList = () => {
      showList.value = !showList.value
    }

    const show = (el) => {
      const scrollHeight = el.scrollHeight
      el.style.maxHeight = `${scrollHeight}px`
    }
    const hide = (el) => {
      el.style.maxHeight = 0
    }

    const beforeLeave = (el) => {
      show(el)
    }

    const beforeEnter = (el) => {
      hide(el)
    }

    const enter = (el) => {
      show(el)
    }

    const leave = (el) => {
      hide(el)
    }


    watch(
      () => currentItem.value,
      () => toggleShowList()
    )
    return {
      currentItem,
      dropdownTitle,
      showList,
      checked,

      toggleShowList,
      leave,
      enter,
      beforeEnter,
      beforeLeave
    }
  },
}
