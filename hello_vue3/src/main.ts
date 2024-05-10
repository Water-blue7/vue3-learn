// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'

// 1\引入pinia组件
import { createPinia } from 'pinia'

// 创建一个应用
const app = createApp(App)

// 2、创建pinia（最好在创建app之后）
const pinia = createPinia()
// 3、安装pinia
app.use(pinia)

// 挂载整个应用到app容器中
app.mount('#app')