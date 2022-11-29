<template>
  <div class="mt-20 flex justify-evenly items-center">
    <nav class="bg-slate-300 fixed min-w-full flex items-center p-3">
      <img :src="logo" class="w-6 h-6" />
      <span class="font-semibold">Projects</span>
    </nav>
    <header class="mb-20">
      <h1 class="text-6xl font-semibold">Explore Vue JS projects</h1>
      <p class="text-2xl mt-5">Witch one would you like to go first?</p>
    </header>
    <section class="mt-5">
      <router-link to="/music">
        <button
          class="flex items-center bg-emerald-500 rounded-xl p-2 cursor-pointer"
        >
          <img :src="music" class="mx-2 w-10 h-10" />
          <span class="text-xl text-white font-medium mx-2">
            Music Player
          </span>
        </button>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      logo: require("../assets/vuejs.png"),
      music: require("../assets/music.png"),
    };
  },
};
</script>
