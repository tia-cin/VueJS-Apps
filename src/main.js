import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './views/HomePage'
import MusicPlayer from './views/MusicPlayer'
import CountDown from './views/CountDown'
import CalculatorApp from './views/Calculator'
import ToDo from './views/ToDo'
import WeatherApp from './views/WeatherApp'

const routes = [
    { path: '/', component: HomePage },
    { path: '/music', component: MusicPlayer },
    { path: '/countdown', component: CountDown },
    { path: '/calculator', component: CalculatorApp },
    { path: '/todo', component: ToDo },
    { path: '/weather', component: WeatherApp }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
