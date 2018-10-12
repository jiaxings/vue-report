<template>
  <div class="container mx-auto">
    <div class="bg-grey header-image">
      <div class="px-4 pt-8 pb-6">
        <top-bar modal="ancestry-share"></top-bar>
        <h1 class="text-white">各色小助手</h1>
      </div>
    </div>
    <div class="bg-white shadow rounded m-4 py-8 -mt-4">
      <div class="border-l-8 border-blue flex items-center justify-between">
        <div class="text-blue px-2">
          <h1 style="font-size: 4rem;">50.12<span style="font-size: 3rem;">%</span></h1>
          <p>中国华北地区</p>
        </div>

        <!--地区画像-->
        <div class="bg-grey rounded-full w-24 h-24 mr-2">
        </div>
      </div>
      <div class="px-2 pt-4">
        <ul class="list-reset leading-loose">
          <li class="inline bg-grey-light px-2 py-1 rounded">蒙古人种</li>
          <li class="inline bg-grey-light px-2 py-1 rounded">牛羊肉 青稞酒</li>
          <li class="inline bg-grey-light px-2 py-1 rounded">鼻子窄</li>
          <li class="inline bg-grey-light px-2 py-1 rounded">西藏</li>
          <li class="inline bg-grey-light px-2 py-1 rounded">松赞干布</li>
          <li class="inline bg-grey-light px-2 py-1 rounded">牛羊肉 青稞酒</li>
        </ul>
      </div>
      <div class="leading-normal px-2 pt-2 text-grey-dark">
        4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源
      </div>

    </div>

    <div class="shadow">
      <earth></earth>
      <div class="px-4 py-2 text-center text-y">
        <router-link :to="{name: 'ancestry'}" class="no-underline text-grey">
          <h5>点击查看全部祖源</h5>
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
  }
}
</script>
<style>
  .header-image {
    background-image: url('../assets/south.png');
  }
</style>
