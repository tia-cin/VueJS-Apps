<template>
  <div id="app">
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
