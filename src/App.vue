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
            {{ current.songTitle }}
          </h3>
          <h4 class="current artist">
            {{ current.artist }}
          </h4>
        </div>
        <div class="music-list">
          <h2>Playlist</h2>
          <button
            v-for="song in songs"
            :key="song.src"
            @click="play(song)"
            :class="(song.src == current.src) ? 'song playing' : 'song'"
          >
            {{ song.songTitle }} - {{ song.artist }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          songTitle: 'Boogie Wonderland',
          artist: 'Earth, Wind & Fire',
          src: ''
        }
      ],
      player: new Audio()
    }
  },
  methods: {
    play (song) {
      if(typeof song.src === 'undefined') {
        this.current = song;
        this.player.src = this.current.src;
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
    this.player.src = this.current.src;
  }
}
</script>

<style>
</style>
