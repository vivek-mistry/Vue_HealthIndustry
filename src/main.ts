import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import './../public/admin-lte/plugins/fontawesome-free/css/all.min.css'
import './../public/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import './../public/admin-lte/dist/css/adminlte.min.css'


import './../public/admin-lte/plugins/jquery/jquery.min.js'
import './../public/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import './../public/admin-lte/dist/js/adminlte.min.js'



const app = createApp(App)

app.use(router)

app.mount('#app')
