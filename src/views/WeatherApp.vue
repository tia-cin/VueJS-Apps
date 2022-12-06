<template>
    <div>
        <ProjectTitle title="Weather App"/>
        <form @submit.prevent="fetchWeather">
            <input type="text" placeholder="Search" v-model="search"/>
            <button type="submit">🔍</button>
        </form>
        <div v-if="weather.main">
            <img/>
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

export default {
    name: "WeatherApp",
    components: { ProjectTitle },
    data: () => ({
      api_key: process.env.API_KEY,
      url_base: 'https://api.openweathermap.org/data/2.5/',
      search: '',
      weather: {}
    }),
    methods: {
        fetchWeather (e) {
            if (e.key == "Enter") {
            fetch(`${this.url_base}weather?q=${this.search}&units=metric&APPID=${this.api_key}`)
                .then(res => res.json())
                .then(this.setResults);
            }
        },
        setResults (results) {
            this.weather = results;
        },
        dateBuilder () {
            const d = new Date();
            const day = d.getDay();
            const date = d.getDate();
            const month = d.getMonth();
            const year = d.getFullYear();
            return `${day} ${date} ${month} ${year}`;
        }
    }
}
</script>