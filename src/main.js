import { createApp } from 'vue'
import { createPinia } from 'pinia'
<<<<<<< HEAD
const svgs = import.meta.globEager('./assets/img/*.svg')
// import App from './App.vue'
=======

import App from './App.vue'
>>>>>>> f6b1c4ae55742f840e401cde2275a33ab43cdac2
import router from './router'
import components from './plugins/VueComponents'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(components)

app.mount('#app')
