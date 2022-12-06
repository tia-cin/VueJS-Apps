<template>
    <div class="flex flex-col items-center">
        <ProjectTitle title="Weather App"/>
        <form @submit.prevent="fetchWeather">
            <input type="text" placeholder="Search" v-model="search" class="bg-slate-200 rounded-lg p-2 mx-2"/>
            <button type="submit" class="bg-orange-400 p-2 texl-xl rounded-xl">🔍</button>
        </form>
        <div v-if="weather.main" class="drop-shadow-xl bg-slate-200 rounded-xl w-300 mt-10 flex flex-col items-center">
            <img 
                alt="weather-type" 
                :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`"
                class="w-100"
            />
            <header class="text-center flex items-center">
                <p class="text-2xl font-semibold">{{ weather.name }}, {{ weather.sys.country }}</p>
                <span class="text-sm mt-1.5 mx-2">{{ dateBuilder() }}</span>
            </header>
            <article>
                <p>{{ Math.round(weather.main.temp) }}°C</p>
                <span>{{ weather.weather[0].main }}</span>
            </article>
        </div>
    </div>
</template>

<script>
import ProjectTitle from '../components/Title.vue';
import axios from 'axios'

export default {
    name: "WeatherApp",
    components: { ProjectTitle },
    data: () => ({
      api_key: 'a556eeecda488258da261ae4771dc4c4',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      search: 'london',
      weather: {}
    }),
    methods: {
        fetchWeather () {
                axios.get(`${this.url_base}weather?q=${this.search}&units=metric&APPID=${this.api_key}`)
                    .then(r => r.data)
                    .then(this.setResults);
                this.search = ''
            
        },
        setResults (results) {
            this.weather = results;
        },
        dateBuilder () {
            const d = new Date();
            return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
        }
    },
    beforeMount() {
        this.fetchWeather()
    }
}
</script>