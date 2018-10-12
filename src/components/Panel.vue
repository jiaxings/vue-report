<template>
  <div class="bg-white rounded py-4 m-4">
    <div class="flex items-center justify-between">
      <div class="pl-4" :class="{'border-blue border-l-4': show}">
        <slot name="head"></slot>
      </div>
      <div class="mr-4">
        <div class="shadow-md w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" @click="toggleContent">
          <transition name="fade">
            <v-icon name="plus" scale="1" class="text-grey" v-if="!show"></v-icon>
            <v-icon name="times" scale="1" class="text-grey" v-else></v-icon>
          </transition>
        </div>
      </div>
    </div>

    <div class="leading-normal px-4 pt-2 text-grey-dark text-sm" v-if="show">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleContent () {
      this.show = !this.show
    }
  }
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-in-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
