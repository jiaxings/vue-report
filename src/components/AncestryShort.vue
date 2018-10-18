<template>
  <div class="container mx-auto">
    <div class="bg-grey header-image">
      <div class="px-4 pt-4 pb-6">
        <top-bar modal="ancestry-share"></top-bar>
        <h1 class="text-white mt-6">各色小助手 <span class="text-sm">的祖源画像</span></h1>
      </div>
    </div>
    <div class="bg-white shadow rounded-lg m-4 py-8 -mt-4">
      <div class="border-l-8 border-orange flex items-center justify-between">
        <div class="text-orange px-2">
          <h1 style="font-size: 4rem;">50.12<span style="font-size: 3rem;">%</span></h1>
          <p class="font-bold">中国华北地区</p>
        </div>
        <div class="w-24 h-24 p-2 mr-2 rounded-full bg-white float-right flex items-center justify-center shadow">
          <img src="../assets/394.png" alt="" class="w-24 rounded-full">
        </div>
      </div>
      <div class="px-2 pt-4">
        <ul class="list-reset leading-loose text-grey-darker">
          <li class="inline bg-grey-lighter font-bold px-2 py-1 rounded whitespace-no-wrap">蒙古人种</li>
          <li class="inline bg-grey-lighter font-bold px-2 py-1 rounded whitespace-no-wrap">牛羊肉 青稞酒</li>
          <li class="inline bg-grey-lighter font-bold px-2 py-1 rounded whitespace-no-wrap">鼻子窄</li>
          <li class="inline bg-grey-lighter font-bold px-2 py-1 rounded whitespace-no-wrap">西藏</li>
          <li class="inline bg-grey-lighter font-bold px-2 py-1 rounded whitespace-no-wrap">松赞干布</li>
          <li class="inline bg-grey-lighter font-bold px-2 py-1 rounded whitespace-no-wrap">牛羊肉 青稞酒</li>
        </ul>
      </div>
      <div class="leading-normal px-2 pt-2 text-grey-dark">
        4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源
      </div>

    </div>

    <div class="shadow">
      <earth :show-nav="true"></earth>
      <div class="px-4 py-2 text-center text-y">
        <!--<h5>上滑查看全部祖源</h5>-->
        <router-link :to="{name: 'ancestry'}" class="no-underline text-grey">
          <h5>上滑查看全部祖源</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Earth from './Earth'
import TopBar from './TopBar'
export default {
  components: {
    Earth,
    TopBar
  },
  mounted () {
    // document.addEventListener('touchStart', this.onTouchStart)
    // document.addEventListener('touchEnd', this.onTouchEnd)
  },
  data () {
    return {
      startX: 0,
      startY: 0
    }
  },
  methods: {
    // onTouchStart (e) {
    //   e.preventDefault()
    //
    //   this.startX = e.touches[0].pageX
    //   this.startY = e.touches[0].pageY
    // },
    // onTouchEnd (e) {
    //   e.preventDefault()
    //
    //   const endX = e.changedTouches[0].pageX
    //   const endY = e.changedTouches[0].pageY
    //
    //   let dx = endX - this.startX
    //   let dy = endY - this.startY
    //
    //   if (Math.abs(dy) > Math.abs(dx) && dy > 0) {
    //     window.location.push('/ancestry')
    //   }
    // }
  }
}
</script>
<style>
  .header-image {
    background-image: url('../assets/south.png');
  }
</style>
