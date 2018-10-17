<template>
  <modal
    name="ancestry-detail"
    classes="flex justify-center items-center bg-grey-transparent"
    transition="pop-out"
    :adaptive="true"
    width="95%"
    height="auto"
    :pivotY="0"
    scrollable
  >
    <div class="bg-white shadow rounded m-4">

    <div class="header-image rounded-t pt-24 pb-2 relative">
      <div class="absolute pin-r pin-t">
        <button class="bg-white shadow-md mt-2 mr-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" @click="$modal.hide('ancestry-detail')">
          <v-icon name="times" scale="1"></v-icon>
        </button>
      </div>

      <h2 class="text-blue pl-4 text-4xl">各色小助手</h2>
    </div>
      <div class="py-4">
        <div class="border-l-8 border-blue flex items-center justify-between">
          <div class="text-blue px-2">
            <h1 style="font-size: 4rem;">50.12<span style="font-size: 3rem;">%</span></h1>
            <p>中国华北地区</p>
          </div>

          <!--地区画像-->
          <div class="w-24 h-24 p-2 mr-2 rounded-full bg-white float-right flex items-center justify-center shadow">
            <img src="../../assets/394.png" alt="" class="w-24 rounded-full">
          </div>
        </div>
        <div class="px-4 pt-4">
          <ul class="list-reset leading-loose text-grey-cb">
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">蒙古人种</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">牛羊肉 青稞酒</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">鼻子窄</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">西藏</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">松赞干布</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">牛羊肉 青稞酒</li>
          </ul>
        </div>
        <div class="leading-normal px-4 pt-2 text-grey-dark">
          4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源
        </div>
        </div>
      </div>

  </modal>
</template>
<script>
export default {

  data () {
    return {
      location: {
        'name': '中国华北地区',
        'percent': 0.3056,
        'color': '#0086ff'
      }
    }
  }
}
</script>
<style>
  .bg-image {
    background: url('../../assets/south.png') no-repeat;
    background-size: cover;
    position: relative;
  }
</style>
