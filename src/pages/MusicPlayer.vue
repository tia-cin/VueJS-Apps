<template>
  <main class="relative w-full flex flex-wrap items-center justify-center my-5 md:flex md:items-center md:justify-evenly flex-grow md:p-6">
      <div class="flex flex-col justify-center">
        <div class="current-container w-50 flex flex-col justify-center items-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <img class="rounded-t-lg" :src="current.img" alt="song">
            </div>
            <div class="p-6 ">
                <h2 class="text-sm text-center font-semibold rounded text-wrap w-30">{{ current.title }}</h2>
            </div>
        </div>
        <div class="flex flex-row justify-around w-50">
            <button class="mx-2" @click="prevSong">
                <img :src="logos.back" alt="back-button" width="50"/>
            </button>
            <button class="mx-2" @click="play">
                <img :src="logos.play" alt="play-button" width="50">
            </button>
            <button class="mx-2" @click="pause">
                <img :src="logos.pause" alt="pause-button" width="50">
            </button>
            <button class="mx-2" @click="nextSong">
                <img :src="logos.next" alt="next-button" width="50">
            </button>
        </div>
      </div>
      <div class="songs-container w-100 border-blue m-6 bg-red-200 p-4 rounded-xl shadow-lg">
        <div class="title-container">
              <h3 class="title font-semibold text-lg">Song List</h3>
        </div>
        <SongItem/>
      </div>
  </main>
</template>

<script>
import SongItem from '../components/SongItem.vue';

export default {
    name: 'MusicPlayer',
    data () {
        return {
          components: SongItem,
            current: {},
            index: 0,
            isPlaying: false,
            logos: {
              back: require('../assets/imgs/next (1).png'),
              next: require('../assets/imgs/next.png'),
              pause: require('../assets/imgs/pause.png'),
              play: require('../assets/imgs/download.png')
            },
            player: new Audio(),
        }
    },
    methods: {
    // Play the song
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      // If the song gets completed play next
      this.player.addEventListener(
        "ended",
        function () {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    // Pause the song
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    // Play the next song
    nextSong() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    // Play the prev song
    prevSong() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
};
</script>