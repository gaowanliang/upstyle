import { createApp } from 'vue'
import { createPinia } from 'pinia' // 新增
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(createPinia()) // 新增
app.use(router)
app.mount('#app')