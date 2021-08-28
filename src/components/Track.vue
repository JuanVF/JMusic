<template>
  <div class="track">
    <div >
        <img class="rounded" :src="albumImage" alt="Album Image">
    </div>
    <div>
        <div class="py-4">
            <p><strong>{{ trackName }}</strong></p>
            <p>{{ artistsName }}</p>
        </div>
    </div>
    <div>
        <div>
            <p>Duración: <strong>{{ duration }} </strong></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Track',
    props : {
        track : { type : Object, required : true }
    },
    computed : {
        albumImage(){
            return this.track.album.images[0].url
        },
        trackName(){
            return this.track.name
        },
        artistsName(){
            return this.track.artists[0].name
        },
        duration(){
            let minutes = parseInt( this.track.duration_ms / (1000 * 60) )
            let seconds = parseInt( (this.track.duration_ms - (minutes * 1000 * 60) ) / 1000 )

            return `${this.formatTime(minutes)}:${this.formatTime(seconds)}`
        }
    },
    methods : {
        formatTime(time){
            return time < 10 ? `0${time}` : time 
        }
    }
}
</script>

<style>
    .track {
        @apply bg-gradient-to-t from-gray-800 to-gray-700 h-full p-4 rounded shadow-lg;
    }

    .track:hover{
        opacity: 0.5;
        cursor: pointer;
    }

    .track:active{
        border: 1px solid white;
        box-sizing: border-box;
    }
</style>