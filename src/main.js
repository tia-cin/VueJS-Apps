import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './views/HomePage'
import MusicPlayer from './views/MusicPlayer'
import CountDown from './views/CountDown'
import Calculator from './views/Calculator'

const routes = [
    { path: '/', component: HomePage },
    { path: '/music', component: MusicPlayer },
    { path: '/countdown', component: CountDown },
    { path: '/calculator', component: Calculator }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
