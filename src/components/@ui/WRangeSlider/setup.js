import { ref } from 'vue'
import Slider from '@vueform/slider'

export default {
  name: 'RButton',
  components: {
    Slider,
  },
  setup() {
    const value = ref([20, 40])
    return {
      value,
    }
  },
}
