<template>
  <modal
    name="share-result-image"
    classes="relative flex justify-center items-center bg-grey-transparent w-full h-full scrollable"
    transition="pop-out"
    :adaptive="true"
    width="100%"
    height="auto"
    :pivotY="1"
    scrollable
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <img :src="shareImageUrl" v-if="shareImageUrl" alt="" class="w-full">

    <!--<div class="absolute pin-l pin-b" style="bottom: 1rem;">-->
    <!--<button class="bg-white shadow-md mt-2 mr-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" @click="$modal.hide('share-result-image')">-->
    <!--<v-icon name="times" scale="1"></v-icon>-->
    <!--</button>-->
    <!--</div>-->

    <!--<div class="fixed pin-l pin-r pin-b" style="left: 50%;">-->
      <!--<button class="relative bg-white shadow-md mb-2 mr-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" style="transform: translateX(-50%)" @click="$modal.hide('share-result-image')">-->
        <!--<v-icon name="times" scale="1"></v-icon>-->
      <!--</button>-->
    <!--</div>-->
   <div class="fixed pin-x pin-b bg-white text-center py-4 z-10">
     <div class="flex items-center justify-center">
       <span class="mr-3">
         <icon-base name="icon-download" view-box="0 0 20 20" :width="24" :height="24" stroke-color="#0086ff" icon-color="none"><icon-download></icon-download></icon-base>
       </span>
       <p>
         长按图片保存或者发送给朋友
       </p>
       <button class="bg-white shadow-md mb-2 ml-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" @click="closeShareModal">
         <v-icon name="times" scale="1"></v-icon>
       </button>
     </div>

   </div>
  </modal>
</template>
<script>
import IconDownload from '../icons/IconDownload'
import { mapState } from 'vuex'
export default {
  components: {
    IconDownload
  },
  computed: {
    ...mapState(['shareImageUrl'])
  },
  methods: {
    // preventTouch (e) {
    //   e.preventDefault()
    // }
    beforeOpen () {
      document.body.style.position = 'fixed'
    },
    beforeClose () {
      this.$store.commit('setShareImageUrl', '')
      document.body.style.position = ''
    },
    closeShareModal () {
      this.$modal.hide('share-result-image')
    }
  },
  mounted () {
    // document.addEventListener('scroll', this.preventTouch)
    // document.body.style.height = '100%'
    // document.body.style['overflow-y'] = 'hidden'
    document.body.style.position = 'fixed'
  },
  beforeDestroy () {
    document.body.style.position = ''
    // document.body.style.height = '100vh'
    // document.body.style['overflow-y'] = 'scroll'
  }
}
</script>
