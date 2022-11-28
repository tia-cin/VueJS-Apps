<template>
  <div class="flex justify-center items-center" id="app">
    <HomePage/>
  </div>
</template>

<script>
// import CreditFooter from './components/footer.vue';
// import MusicPlayer from './components/player.vue';
import HomePage from './pages/HomePage.vue';
export default {
  name: 'App',
  components: { HomePage}
}
</script>

<style>
</style>
