<template>
  <div id="app">
    <nav class="bg-slate-300">
      <header class="flex items-center p-3">
        <img :src="logo" class="w-6 h-6" />
        <span class="font-semibold">Projects</span>
      </header>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logo: require("./assets/vuejs.png"),
    };
  },
};
</script>
