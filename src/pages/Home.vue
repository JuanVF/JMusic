<template>
    <div>
        <HomeHeader/>
        <HomeTracks/>
    </div>
</template>

<script>
import HomeTracks from '../components/HomeTracks.vue'
import HomeHeader from '../components/HomeHeader.vue'

export default {
  name: 'Home',
  components: {
    HomeTracks, HomeHeader
  }
}
</script>

<style scoped>
</style>