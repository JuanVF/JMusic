<template>
    <section class="bg-gray-900 p-3">
        <div class="flex flex-col gap-3">
            <div class="flex justify-items-start gap-3">
                <input class="input" v-model="searchQuery" placeholder="Buscar canciones">
                <button class="btn btn-green" @click="search" >
                    Buscar
                </button>
                <button class="btn btn-danger">
                    &times;
                </button>
            </div>
            <p>
                <strong class="bg-transparent">Resultados encontrados: </strong>{{ searchMessage }}
            </p>
        </div>
        <div class="tracks-container">
            <div :key={index} v-for="(t, index) in tracks">
                <Track :track="t" />
            </div>
        </div>
    </section>
</template>

<script>
import trackService from '../services/track'

import Track from '../components/Track.vue'

export default {
    name : 'HomeTracks',
    components : {
        Track
    },
    data(){
        return {
            searchQuery : '',
            tracks : []
        }
    },
    methods : {
        search(){
            if (this.searchQuery === '') return

            let context = this

            trackService.search(this.searchQuery)
            .then(res => context.tracks = res.tracks.items)
        }
    },
    computed : {
        searchMessage(){
            return `${this.tracks.length}`
        }
    }
}
</script>

<style scoped>
    .tracks-container {
        @apply grid grid-cols-5 gap-5 bg-gradient-to-b from-gray-900 to-gray-800 rounded mt-3
    }
</style>