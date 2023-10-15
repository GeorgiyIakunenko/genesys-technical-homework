import 'vue-awesome-paginate/dist/style.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import the package
// @ts-ignore
import VueAwesomePaginate from 'vue-awesome-paginate'

// import the necessary css file

import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)

app.mount('#app')
