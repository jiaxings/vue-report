<template>
  <modal
    name="ancestry-share"
    classes="flex justify-center items-center"
    transition="pop-out"
    :adaptive="true"
    width="95%"
    height="auto"
    :pivotY="0"
    scrollable
  >
      <div class="bg-image pt-12 pb-4">
        <div class="absolute pin-r pin-t">
          <button class="bg-white shadow-md mt-2 mr-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" @click="$modal.hide('ancestry-share')">
            <v-icon name="times" scale="1"></v-icon>
          </button>
        </div>

        <h2 class="text-white px-4">各色小助手</h2>
        <div class="bg-white shadow rounded m-4 py-8">
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
          <div class="px-2 pt-4">
            <ul class="list-reset leading-loose text-grey-cb">
              <li class="inline bg-grey-light font-bold px-2 py-1 rounded">蒙古人种</li>
              <li class="inline bg-grey-light font-bold px-2 py-1 rounded">牛羊肉 青稞酒</li>
              <li class="inline bg-grey-light font-bold px-2 py-1 rounded">鼻子窄</li>
              <li class="inline bg-grey-light font-bold px-2 py-1 rounded">西藏</li>
              <li class="inline bg-grey-light font-bold px-2 py-1 rounded">松赞干布</li>
              <li class="inline bg-grey-light font-bold px-2 py-1 rounded">牛羊肉 青稞酒</li>
            </ul>
          </div>
          <div class="leading-normal px-2 pt-2 text-grey-dark">
            4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源
          </div>

          <div class="text-grey-dark px-2">

            <div class="flex items-center my-1" v-for="(location, index) in locations" :key="location.name">
              <div class="w-2/5">
                <span class="px-1 text-white text-center" :style="{ backgroundColor: location.color }">{{ index + 1 }}</span>
                <h5 class="inline mx-2 whitespace-no-wrap">{{ location.name }}</h5>
              </div>
              <div class="w-2/5">
                <svg width="120" height="20" viewBox="0 0 120 20">
                  <rect x="0" y="5" :width="(location.percent * 200).toFixed(2)" height="12" rx="5" ry="5" :fill="location.color"/>
                </svg>
              </div>
              <div class="w-1/5">
                <div class="text-sm whitespace-no-wrap flex justify-between items-center">
                  {{ `${(location.percent * 100).toFixed(2)}%`}}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="m-4 flex items-center">
          <div class="w-24 h-24 bg-grey"></div>
          <h3 class="text-white ml-2">这里是一句介绍二维码的话</h3>
        </div>
      </div>
  </modal>
</template>
<script>
export default {

  data () {
    return {
      locations: [
        {
          'name': '中国华北地区',
          'percent': 0.3056,
          'color': '#0086ff'
        },
        {
          'name': '中国南方地区',
          'percent': 0.1976,
          'color': '#fd6603'
        },
        {
          'name': '中国东北地区',
          'percent': 0.15,
          'color': '#0086ff'
        },
        {
          'name': '中国西南地区',
          'percent': 0.09,
          'color': '#fd6603'
        },
        {
          'name': '中国西北地区',
          'percent': 0.0703,
          'color': '#0086ff'
        },
        {
          'name': '中国蒙古地区',
          'percent': 0.0528,
          'color': '#fd6603'
        }
      ]
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
