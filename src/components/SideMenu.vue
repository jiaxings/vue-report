<template>
  <div class="sidemenu">
    <div v-for="loc in locations" :key="loc.name">
      <div class="px-4 py-2 cursor-pointer bg-grey" @click="clickLoc(loc.id)">
        {{ loc.name}}
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['locations', 'prenmSelected'])
  },
  methods: {
    clickLoc (id) {
      this.$store.commit('setPreselected', id)
    }
  }
}
</script>
<style>
  .sidemenu {
    position: absolute;
    text-align: center;
    z-index: 2;
    font-size: 15px;
  }
</style>
