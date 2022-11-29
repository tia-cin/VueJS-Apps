import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './pages/HomePage'
import MusicPlayer from './pages/MusicPlayer'

// const Home = { template : HomePage }
// const Player = { template : MusicPlayer}

const routes = [
    { path: '/', component: HomePage },
    { path: '/music', component: MusicPlayer}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
