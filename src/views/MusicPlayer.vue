<template>
  <div class="flex bg-slate-300 h-screen items-center">
    <ProjectTitle title="Music Player"/>
    <div class="flex flex-col justify-center">
      <div class="w-300 flex flex-col justify-center items-center">
        <img class="rounded-lg" :src="current.img" alt="song" />
        <div class="p-6">
          <h2
            class="capitalize text-sm text-center font-semibold rounded text-wrap w-30"
          >
            {{ current.title }}
          </h2>
        </div>
      </div>
      <div class="flex flex-row justify-around w-50">
        <button class="mx-2" @click="prevSong">
          <img :src="logos.back" alt="back-button" width="50" />
        </button>
        <button class="mx-2" @click="play">
          <img :src="logos.play" alt="play-button" width="50" />
        </button>
        <button class="mx-2" @click="pause">
          <img :src="logos.pause" alt="pause-button" width="50" />
        </button>
        <button class="mx-2" @click="nextSong">
          <img :src="logos.next" alt="next-button" width="50" />
        </button>
      </div>
    </div>
    <div
      class="absolute right-0 h-screen w-600 border-blue bg-slate-500 p-4 shadow-lg"
    >
      <h3 class="font-semibold text-2xl text-white">Song List</h3>
      <div>
        <button
          v-for="song in songs"
          :key="song.src"
          @click="play(song)"
          class="my-4 capitalize bg-slate-700 min-w-full rounded-xl drop-shadow-md p-3 flex flex-row items-center"
        >
          <img :src="song.img" class="w-50 h-10 mr-2 rounded-full" />
          <span class="text-white">
            {{ song.title }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTitle from '../components/Title.vue';

export default {
  name: "MusicPlayer",
  components: { ProjectTitle },
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      logos: {
        back: require("../assets/imgs/next (1).png"),
        next: require("../assets/imgs/next.png"),
        pause: require("../assets/imgs/pause.png"),
        play: require("../assets/imgs/download.png"),
      },
      player: new Audio(),
      songs: [
        {
          title: "cute doggy & chill lofi beats",
          img: require("../assets/imgs/cute doggy & chill lofi beats.png"),
          link: "https://www.youtube.com/watch?v=eKhjq4zv274&t=763s",
          src: require("../assets/music/cute doggy & chill lofi beats.mp3"),
        },
        {
          title: "don’t panic it’s gonna be okay",
          img: require("../assets/imgs/don’t panic it’s gonna be okay.png"),
          link: "https://www.youtube.com/watch?v=Ez4Z9lklo7A",
          src: require("../assets/music/don’t panic it’s gonna be okay.mp3"),
        },
        {
          title: "happy songs to help you feel loved",
          img: require("../assets/imgs/happy songs to help you feel loved.png"),
          link: "https://www.youtube.com/watch?v=FRybECHN9qE&t=19s",
          src: require("../assets/music/happy songs to help you feel loved.mp3"),
        },
        {
          title: "i love you to the moon and back...",
          img: require("../assets/imgs/i love you to the moon and back.png"),
          link: "https://www.youtube.com/watch?v=qusr_UhkfOo&t=122s",
          src: require("../assets/music/i love you to the moon and back.mp3"),
        },
        {
          title: "Peach Milk 🍑 cute lofi mix",
          img: require("../assets/imgs/Peach Milk 🍑 cute lofi mix.png"),
          link: "https://www.youtube.com/watch?v=QIRWE8kvPew",
          src: require("../assets/music/Peach Milk 🍑 cute lofi mix.mp3"),
        },
        {
          title: "the lofi arcade 🕹 lofi hiphop mix",
          img: require("../assets/imgs/the lofi arcade 🕹 lofi hiphop mix.png"),
          link: "https://www.youtube.com/watch?v=WhimbMhCenk",
          src: require("../assets/music/the lofi arcade 🕹 lofi hiphop mix.mp3"),
        },
        {
          title: "uncle iroh 🍃 avatar lofi mix",
          img: require("../assets/imgs/uncle iroh 🍃 avatar lofi mix.png"),
          link: "https://www.youtube.com/watch?v=IbkBhV34qqw",
          src: require("../assets/music/uncle iroh 🍃 avatar lofi mix.mp3"),
        },
      ],
    };
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
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
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    nextSong() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
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
