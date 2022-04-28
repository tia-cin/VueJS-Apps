<template>
  <div id="app">
    <nav>
      <h1>Player</h1>
    </nav>
    <div class="main-container">
      <div class="player">
        <div class="controller">
          <button @click="back">Back</button>
          <button v-if="!isPlaying" @click="play">Play</button>
          <button v-else @click="pause">Pause</button>
          <button @click="next">Next</button>
        </div>
        <div class="current">
          <h3 class="current-song">
            {{ current.title }}
          </h3>
        </div>
        <div class="music-list">
          <h2>Playlist</h2>
          <button
            v-for="song in songs"
            :key="song.url"
            @click="play(song)"
            :class="(song.url === current.url) ? 'song playing' : 'song'"
          >
            {{ song.title }} - {{ song.subtitle }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [],
      player: new Audio(),
      options: {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
        params: {
          id: '40008598', 
          locale: 'en-US'
        },
        headers: {
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
          'X-RapidAPI-Key': '9bea0be12dmsh81a1a3fbfdeeae0p134df0jsne100c6f30173'
        }
      }
    }
  },
  mounted () {
    this.getTracks()
  },
  methods: {
    getTracks () {
      axios.request(this.options)
        .then(r => {
          console.log(r);
          this.songs = r.data
        })
        .catch(error => console.log('Request Error', error))
    },
    play (song) {
      if(typeof song.url === 'undefined') {
        this.current = song;
        this.player.url = this.current.url;
      }
      this.player.play();
      this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
    back () {
      this.index--;
      if(this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    next () {
      this.index++;
      if(this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index]
      this.play(this.current)
    }
  },
  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.url;
  }
}
</script>

<style>
</style>
