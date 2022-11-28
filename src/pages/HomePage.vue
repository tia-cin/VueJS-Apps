<template>
    <div class="flex justify-center items-center">
        <header>
            <h1 class="text-6xl font-semibold ">Explore Vue JS projects</h1>
            <p class="text-2xl mt-5">Witch one would you like to go first?</p>
            <section>
                <button v-for="project in projects" :key="project.name">
                    <img  :src="project.logo" class="w-10 h-10"/>
                    <span>{{project.name}}</span>
                </button>
            </section>
        </header>
        <div >
            <img :src="logo" class="w-80 h-80 "/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data () {
        return {
            logo: require('../assets/vuejs.png'),
            projects: [
                {
                    name: "Music", 
                    logo: require('../assets/music.png'),
                    path: '/music',
                }
            ]
        }
    }
}
</script>