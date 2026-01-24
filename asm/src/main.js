import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Import cấu hình Router
import 'bootstrap/dist/css/bootstrap.min.css' // Import CSS Bootstrap [cite: 35]
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import JS Bootstrap

const app = createApp(App)

app.use(router) // Kích hoạt Vue Router để quản lý các trang 

app.mount('#app') // Chỉ mount một lần duy nhất ở cuối cùng