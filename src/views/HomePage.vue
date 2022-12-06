<template>
  <div>
    <nav class="bg-slate-300 top-0 fixed min-w-full flex items-center p-3">
      <img :src="logo" class="w-6 h-6" />
      <span class="font-semibold text-2xl">Projects</span>
    </nav>
    <main class="flex flex-col items-center mt-20">
      <header class="mb-20">
        <h1 class="text-6xl font-semibold">Explore Vue JS projects</h1>
        <p class="text-2xl mt-5">Witch one would you like to go first?</p>
      </header>
      <div class="mt-5 grid grid-cols-2 gap-2">
        <router-link v-for="project in projects" :key="project.name" :to="project.path">
          <button
            :class="project.color"
            class="flex items-center m-2 rounded-xl p-2 cursor-pointer"
          >
            <img :src="project.logo" class="mx-2 w-10 h-10" />
            <span class="text-xl w-200 text-white font-medium mx-2">
              {{ project.name }}
            </span>
          </button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      logo: require("../assets/vuejs.png"),
      music: require("../assets/music.png"),
      projects: [
        {
          logo: require("../assets/music.png"),
          path: "/music",
          name: "Music Player",
          color: "bg-emerald-500",
        },
        {
          path: "/countdown",
          name: "Countdown",
          logo: require("../assets/countdown.png"),
          color: "bg-purple-500",
        },
        {
          path: '/calculator',
          name: 'Calculator',
          logo: require('../assets/calculator.png'),
          color: 'bg-blue-500'
        },
        {
          path: '/todo',
          name: "To Do List",
          logo: require('../assets/todo.png'),
          color: 'bg-yellow-400'
        }
      ],
    };
  },
};
</script>
