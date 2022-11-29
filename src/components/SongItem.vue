<template>
     <div class="song-container">
              <button 
                  v-for="song in songs"
                  :key="song.src"
                  @click="play(song)"
                  class="song-btn p-1 flex flex-row justify-center"
              >
                  {{ song.title }}
              </button>
        </div>
</template>

<script>
export default {
    name: 'SongItem',
    data () {
        return {
            songs: [
                {
                    title: 'cute doggy & chill lofi beats',
                    img: require('../assets/imgs/cute doggy & chill lofi beats.png'),
                    link: 'https://www.youtube.com/watch?v=eKhjq4zv274&t=763s',
                    src: require('../assets/music/cute doggy & chill lofi beats.mp3')
                },
                {
                    title: 'don’t panic it’s gonna be okay',
                    img: require('../assets/imgs/don’t panic it’s gonna be okay.png'),
                    link: 'https://www.youtube.com/watch?v=Ez4Z9lklo7A',
                    src: require('../assets/music/don’t panic it’s gonna be okay.mp3')
                },
                {
                    title: 'happy songs to help you feel loved',
                    img: require('../assets/imgs/happy songs to help you feel loved.png'),
                    link: 'https://www.youtube.com/watch?v=FRybECHN9qE&t=19s',
                    src: require('../assets/music/happy songs to help you feel loved.mp3')
                }, 
                {
                    title: 'i love you to the moon and back...',
                    img: require('../assets/imgs/i love you to the moon and back.png'),
                    link: 'https://www.youtube.com/watch?v=qusr_UhkfOo&t=122s',
                    src: require('../assets/music/i love you to the moon and back.mp3')
                },
                {
                    title: 'Peach Milk 🍑 cute lofi mix',
                    img: require('../assets/imgs/Peach Milk 🍑 cute lofi mix.png'),
                    link: 'https://www.youtube.com/watch?v=QIRWE8kvPew',
                    src: require('../assets/music/Peach Milk 🍑 cute lofi mix.mp3')
                },
                {
                    title: 'the lofi arcade 🕹 lofi hiphop mix',
                    img: require('../assets/imgs/the lofi arcade 🕹 lofi hiphop mix.png'),
                    link: 'https://www.youtube.com/watch?v=WhimbMhCenk',
                    src: require('../assets/music/the lofi arcade 🕹 lofi hiphop mix.mp3')
                }, 
                {
                    title: 'uncle iroh 🍃 avatar lofi mix',
                    img: require('../assets/imgs/uncle iroh 🍃 avatar lofi mix.png'),
                    link: 'https://www.youtube.com/watch?v=IbkBhV34qqw',
                    src: require('../assets/music/uncle iroh 🍃 avatar lofi mix.mp3')
                }
            ]
            }
        },
}
</script>