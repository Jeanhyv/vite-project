import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Esto busca automáticamente el index.js de la carpeta router
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.mount('#app')