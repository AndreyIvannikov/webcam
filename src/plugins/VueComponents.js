import WDropdown from '@/components/@ui/WDropdown/index.vue'
import WButton from '@/components/@ui/WButton/index.vue'
import WInput from '@/components/@ui/WInput/index.vue'
import WRangeSlider from '@/components/@ui/WRangeSlider/index.vue'
<<<<<<< HEAD
import WIcon from '@/components/@ui/WIcon/index.vue'
import WCheckbox from '@/components/@ui/WCheckbox/index.vue'
import WChips from '@/components/@ui/WChips/index.vue'
import App from '@/App.vue'
=======
>>>>>>> f6b1c4ae55742f840e401cde2275a33ab43cdac2

// https://vuejs.org/guide/reusability/plugins.html
const components = {
  install(app) {
    app.component('WDropdown', WDropdown)
    app.component('WButton', WButton)
    app.component('WInput', WInput)
    app.component('WRangeSlider', WRangeSlider)
  },
}

<<<<<<< HEAD
app.component('WDropdown', WDropdown)
app.component('WButton', WButton)
app.component('WInput', WInput)
app.component('WRangeSlider', WRangeSlider)
app.component('WIcon', WIcon)
app.component('WCheckbox', WCheckbox)
app.component('WChips', WChips)

export default app
=======
export default components
>>>>>>> f6b1c4ae55742f840e401cde2275a33ab43cdac2
