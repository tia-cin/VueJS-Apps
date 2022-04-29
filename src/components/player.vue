<template>
  <div>
      <h2>{{ current.title }}</h2>
      <div>
          <button @click="prevSong">
              Back
          </button>
          <button @click="play">
              Play
          </button>
          <button @click="pause">
              Pause
          </button>
          <button @click="nextSong">
              Next
          </button>
      </div>
      <div>
          <h3>Song List</h3>
          <button 
            v-for="song in songs"
            :key="song.src"
            @click="play(song)"
          >
              {{ song.title }}
          </button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MusicPlayer',
    data () {
        return {
            current: {},
            index: 0,
            isPlaying: false,
            songs: [
                {
                    title: 'cute doggy & chill lofi beats',
                    link: 'https://www.youtube.com/watch?v=eKhjq4zv274&t=763s',
                    src: require('../assets/music/cute doggy & chill lofi beats.mp3')
                },
                {
                    title: 'cute songs to help you cope with negative thoughts',
                    link: 'https://www.youtube.com/watch?v=1JjEXx7B8A0&t=143s',
                    src: require('../assets/music/cute songs to help you cope with negative thoughts.mp3')
                },
                {
                    title: 'don’t panic it’s gonna be okay',
                    link: 'https://www.youtube.com/watch?v=Ez4Z9lklo7A',
                    src: require('../assets/music/don’t panic it’s gonna be okay.mp3')
                },
                {
                    title: 'happy songs to help you feel loved',
                    link: 'https://www.youtube.com/watch?v=FRybECHN9qE&t=19s',
                    src: require('../assets/music/happy songs to help you feel loved.mp3')
                }, 
                {
                    title: 'i love you to the moon and back...',
                    link: 'https://www.youtube.com/watch?v=qusr_UhkfOo&t=122s',
                    src: require('../assets/music/i love you to the moon and back.mp3')
                },
                {
                    title: 'Peach Milk 🍑 cute lofi mix',
                    link: 'https://www.youtube.com/watch?v=QIRWE8kvPew',
                    src: require('../assets/music/Peach Milk 🍑 cute lofi mix.mp3')
                },
                {
                    title: 'the lofi arcade 🕹 lofi hiphop mix',
                    link: 'https://www.youtube.com/watch?v=WhimbMhCenk',
                    src: require('../assets/music/the lofi arcade 🕹 lofi hiphop mix.mp3')
                }, 
                {
                    title: 'uncle iroh 🍃 avatar lofi mix',
                    link: 'https://www.youtube.com/watch?v=IbkBhV34qqw',
                    src: require('../assets/music/uncle iroh 🍃 avatar lofi mix.mp3')
                }
            ],
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
<style>

</style>