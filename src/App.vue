<template>
  <div class="mt-20 flex justify-evenly items-center">
    <div>
      <header class="mb-20">
        <h1 class="text-6xl font-semibold">Explore Vue JS projects</h1>
        <p class="text-2xl mt-5">Witch one would you like to go first?</p>
      </header>
      <section class="mt-5">
        <button
          class="flex items-center bg-emerald-500 rounded-xl p-2 cursor-pointer"
          v-for="project in projects"
          :key="project.name"
        >
          <img :src="project.logo" class="mx-2 w-10 h-10" />
          <span class="text-xl text-white font-medium mx-2">
            {{ project.name }}
          </span>
        </button>
      </section>
    </div>
    <div>
      <img :src="logo" class="w-60 h-60 object-contain" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logo: require("./assets/vuejs.png"),
      projects: [
        {
          name: "Music",
          logo: require("./assets/music.png"),
          path: "/music",
        },
      ],
    };
  },
};
</script>

<style></style>
