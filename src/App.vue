<template>
  <div id="app">
    <nav>
      <h1>Player</h1>
    </nav>
    <main>
      <div class="player">
        <div class="controller">
          <button>Back</button>
          <button>Play</button>
          <button>Next</button>
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
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      current: {
        songTitle: 'Song Title',
        artist: 'Artist Name'
      },
      songs: [
        {
          songTitle: 'Boogie Wonderland',
          artist: 'Earth, Wind & Fire',
          src: ''
        }
      ]
    }
  }
}
</script>

<style>
</style>
