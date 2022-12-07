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
                class="w-100 bg-white rounded-full my-5 drop-shadow-lg"
            />
            <header class="bg-white p-2 px-5 mb-5 rounded-lg text-center flex flex-col items-center">
                <p class="text-2xl font-semibold">{{ weather.name }}, {{ weather.sys.country }}
                    <span class="text-xs mt-1.5 mx-2">{{ dateBuilder() }}</span>
                </p>
                <p class="capitalize">{{ weather.weather[0].main }} - {{ weather.weather[0].description }}</p>
            </header>
            <article class="text-center mb-5">
                <p class="font-semibold text-xl">Temperature</p>
                <p class="grid grid-cols-2 gap-2 mt-2 text-left font-normal text-lg">
                    <span>Current: {{ Math.round(weather.main.temp) }}°C</span>
                    <span>Feels Like: {{ Math.round(weather.main.feels_like) }}°C</span>
                    <span>Min: {{ Math.round(weather.main.temp_min) }}°C</span>
                    <span>Max: {{ Math.round(weather.main.temp_max) }}°C</span>
                </p>
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