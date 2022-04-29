<template>
  <div id="app">
    <NavBar/>
    <MusicPlayer/>
    <CreditFooter/>
  </div>
</template>

<script>
import NavBar from './components/header.vue';
import CreditFooter from './components/footer.vue';
import MusicPlayer from './components/player.vue';

export default {
  name: 'App',
  components: {NavBar, CreditFooter, MusicPlayer}
}
</script>

<style>
</style>
