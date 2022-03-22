import WDropdown from '@/components/@ui/WDropdown/index.vue'
import WButton from '@/components/@ui/WButton/index.vue'
import WInput from '@/components/@ui/WInput/index.vue'
import WRangeSlider from '@/components/@ui/WRangeSlider/index.vue'

// https://vuejs.org/guide/reusability/plugins.html
const components = {
  install(app) {
    app.component('WDropdown', WDropdown)
    app.component('WButton', WButton)
    app.component('WInput', WInput)
    app.component('WRangeSlider', WRangeSlider)
  },
}

export default components
