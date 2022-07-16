import { createApp } from 'vue'
import WDropdown from '@/components/@ui/WDropdown/index.vue'
import WButton from '@/components/@ui/WButton/index.vue'
import WInput from '@/components/@ui/WInput/index.vue'
import WRangeSlider from '@/components/@ui/WRangeSlider/index.vue'
import WIcon from '@/components/@ui/WIcon/index.vue'
import WCheckbox from '@/components/@ui/WCheckbox/index.vue'
import WChips from '@/components/@ui/WChips/index.vue'
import App from '@/App.vue'

const app = createApp(App)

app.component('WDropdown', WDropdown)
app.component('WButton', WButton)
app.component('WInput', WInput)
app.component('WRangeSlider', WRangeSlider)
app.component('WIcon', WIcon)
app.component('WCheckbox', WCheckbox)
app.component('WChips', WChips)

export default app
