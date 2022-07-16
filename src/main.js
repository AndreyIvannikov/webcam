// import { createApp } from 'vue'
import { createPinia } from 'pinia'
const svgs = import.meta.globEager('./assets/img/*.svg')
// import App from './App.vue'
import router from './router'
import app from './plugins/VueComponents.js'

// const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.component('WDropdown', WDropdown)

app.mount('#app')
