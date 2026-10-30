import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './components/LanguageSelector/i18n.js'

createApp(App).use(i18n).use(router).mount('#app')