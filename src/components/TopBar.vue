<template>
  <div class="flex justify-between">
    <div class="w-12 h-12">
      <img src="../assets/gs_head.svg" alt="" class="z-10">
    </div>
    <div class="flex">
      <div class="px-2 pointer-cursor" @click="showAncestryModal" v-if="showShareIcon">
        <!--<v-icon name="external-link-alt" scale="2" class="text-white"></v-icon>-->
        <icon-base name="icon-share" view-box="0 0 20 20" :width="24" :height="24" stroke-color="#ffffff" icon-color="none"><icon-share></icon-share></icon-base>
      </div>
      <div class="px-2 pointer-cursor" @click="toggleMenu">
        <!--<v-icon name="bars" scale="2" class="text-white"></v-icon>-->
        <icon-base name="icon-menu" view-box="0 0 21 21" :width="24" :height="24" icon-color="#ffffff"><icon-menu></icon-menu></icon-base>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import IconMenu from './icons/IconMenu'
import IconShare from './icons/IconShare'
export default {
  components: {
    IconMenu,
    IconShare
  },
  data () {
    return {
      shareImage: '/screenshots/ancestry.png'
    }
  },
  props: {
    modal: String
  },
  computed: {
    ...mapState(['serverPath']),
    showShareIcon () {
      return !!this.modal
    }
  },
  methods: {
    showAncestryModal () {
      this.$store.commit('setShareImageUrl', `http://${this.serverPath}:3000${this.shareImage}`)
      this.$modal.show('share-result-image')
    },
    toggleMenu () {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>
