<template>
    <div>
        <ProjectTitle title="Weather App"/>
        <form>
            <input type="text" placeholder="Search"/>
            <button>🔍</button>
        </form>
        <div>
            <img/>
            <header>
                <p></p>
                <span></span>
            </header>
            <article>
                <p>°c</p>
                <span></span>
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
}
</script>