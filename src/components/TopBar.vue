<template>
  <div class="flex justify-between mb-12">
    <div class="w-12 h-12">
      <img src="../assets/gs_head.svg" alt="" class="z-10">
    </div>
    <div class="flex">
      <div class="px-3 pointer-cursor" @click="showAncestryModal" v-if="showShareIcon">
        <v-icon name="share-square" scale="2" class="text-white"></v-icon>
      </div>
      <div class="px-3 pointer-cursor" @click="toggleMenu">
        <v-icon name="ellipsis-v" scale="2" class="text-white"></v-icon>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modal: String
  },
  computed: {
    showShareIcon () {
      return !!this.modal
    }
  },
  methods: {
    showAncestryModal () {
      this.$modal.show(this.modal)
    },
    toggleMenu () {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>
