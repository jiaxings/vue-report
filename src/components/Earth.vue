<template>
  <div>
    <div id="container">
      <Map
        id="map"
        :locations="locations"
        :selected="preSelected"
      ></Map>
        <template v-if="showNav">
          <div class="absolute pin-l pl-4 line-center" @click="prevLoc">
            <v-icon name="chevron-left" scale="4" class="text-grey-light"></v-icon>
          </div>
          <div class="absolute pin-r pr-4 line-center" @click="nextLoc">
            <v-icon name="chevron-right" scale="4" class="text-grey-light"></v-icon>
          </div>
        </template>

    </div>

  </div>
</template>
<script>
import { mapState } from 'vuex'
import Map from '@/components/Map.vue'
export default {
  props: {
    showNav: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Map
  },
  computed: {
    ...mapState(['locations', 'preSelected'])
  },
  methods: {
    getEle () {
      return this.locations.findIndex(loc => loc.id === this.preSelected)
    },
    prevLoc () {
      let selected = this.preSelected
      let ele = this.getEle()
      // TODO 状态获取延时问题
      console.log(selected, ele, this.locations.length)
      if (ele !== -1) {
        if (ele === 0) {
          let index = this.locations.length - 1
          selected = this.locations[index].id
        } else {
          selected = this.locations[ele - 1].id
        }
      }
      this.$store.commit('setPreselected', selected)
    },
    nextLoc () {
      let selected = this.preSelected
      let ele = this.getEle()
      console.log(selected, ele, this.locations.length)
      if (ele !== -1) {
        if (ele === this.locations.length - 1) {
          selected = 0
        } else {
          selected = this.locations[ele + 1].id
        }
      }
      this.$store.commit('setPreselected', selected)
    }
  }
}
</script>
<style>
  #container {
    position: relative;
    height: 100vw;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }
  #map {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .line-center {
    top: 50%;
    transform: translateY(-50%);
  }

</style>
