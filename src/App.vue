<template>
  <div id="app">
    <nav>
      <header> <img :src="logo" class="w-8 h-8"/></header>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      logo: require('./assets/vuejs.png')
    }
  }
}
</script>

