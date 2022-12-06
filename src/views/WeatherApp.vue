<template>
    <div>
        <ProjectTitle title="Weather App"/>
        <form @submit.prevent="fetchWeather">
            <input type="text" placeholder="Search" v-model="search"/>
            <button type="submit">🔍</button>
        </form>
        <div v-if="weather.main">
            <img alt="weather-type" :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`"/>
            <header>
                <p>{{ weather.name }}, {{ weather.sys.country }}</p>
                <span>{{ dateBuilder() }}</span>
            </header>
            <article>
                <p>{{ Math.round(weather.main.temp) }}°c</p>
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
            return `${d.getDay()} ${d.getDate()} ${d.getMonth()} ${d.getFullYear()}`;
        }
    },
    beforeMount() {
        this.fetchWeather()
    }
}
</script>