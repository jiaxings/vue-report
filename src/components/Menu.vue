<template>
  <nav class="absolute pin bg-white" v-if="showMenu">
    <div class="relative text-center py-12">
      <div class="absolute pin-r pin-t">
        <button class="bg-white shadow-md mt-2 mr-2 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer" @click="toggleMenu">
          <v-icon name="times" scale="2"></v-icon>
        </button>
      </div>
      <ul class="list-reset">
        <li class="py-6 text-4xl"><router-link :to="{name: 'result'}" class="text-grey hover:text-blue no-underline">结果总览</router-link></li>
        <li class="py-6 text-4xl"><router-link :to="{name: 'ancestry-short'}" class="text-grey hover:text-blue no-underline">祖源总览</router-link></li>
        <li class="py-6 text-4xl"><router-link :to="{name: 'ancestry'}" class="text-grey hover:text-blue no-underline">祖源详情</router-link></li>
      </ul>
    </div>

  </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['showMenu'])
  },
  watch: {
    '$route': function (refreshPage) {
      this.$store.commit('hideMenu')
    }
  },
  methods: {
    toggleMenu () {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>
<style>
</style>
