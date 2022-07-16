import { ref } from 'vue'
export default {
  name: 'WInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup() {
    // todo тут тоже на computed переделываем
    const input = ref('')
    const clearInput = () => {
      input.value = ''
    }
    return {
      clearInput,
      input,
    }
  },
}
