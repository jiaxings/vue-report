<template>
  <modal
    name="share-result-image"
    classes="relative flex justify-center items-center bg-grey-transparent w-full h-full"
    transition="pop-out"
    :adaptive="true"
    width="80%"
    height="80%"
    scrollable
  >
    <img :src="shareImageUrl" v-if="shareImageUrl.length" alt="" class="h-full">

    <!--<div class="absolute pin-l pin-b" style="bottom: 1rem;">-->
    <!--<button class="bg-white shadow-md mt-2 mr-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" @click="$modal.hide('share-result-image')">-->
    <!--<v-icon name="times" scale="1"></v-icon>-->
    <!--</button>-->
    <!--</div>-->

    <div class="absolute pin-l pin-r pin-b" style="left: 50%;">
      <button class="relative bg-white shadow-md mb-2 mr-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" style="transform: translateX(-50%)" @click="$modal.hide('share-result-image')">
        <v-icon name="times" scale="1"></v-icon>
      </button>
    </div>
  </modal>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['shareImageUrl'])
  }
}
</script>
