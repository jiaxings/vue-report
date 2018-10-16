<template>
  <modal
    name="result-share"
    classes="bg-grey-transparent"
    transition="pop-out"
    :adaptive="true"
    width="95%"
    height="auto"
    :pivotY="0"
    scrollable
  >

    <div class="bg-blue py-6 relative">
      <div class="absolute pin-r pin-t">
        <button class="bg-white shadow-md mt-2 mr-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" @click="$modal.hide('result-share')">
          <v-icon name="times" scale="1"></v-icon>
        </button>
      </div>

      <div class="px-4 pt-4">
        <div class="flex items-center">
          <div class="w-2/3">
            <h2 class="text-white text-3xl">
              DARk Liu
            </h2>
            <p class="text-grey-lighter text-xs">第999,99位好奇心用户</p>
          </div>
          <div class="w-1/3">
            <div class="w-24 h-24 p-2 mr-2 rounded-full bg-white float-right flex items-center justify-center shadow">
              <img src="../../assets/394.png" alt="" class="w-24 rounded-full">
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded -mt-4 pt-6 shadow mx-4">
        <div class="flex justify-between">
          <div class="border-l-4 border-blue">
            <h2 class="text-blue pl-4 text-3xl">16<span class="text-xs">个稀有标签</span></h2>
          </div>
        </div>
        <div class="py-3 leading-tight pl-4">
          <span v-for="tag in tags" :key="tag" class="inline-block px-2 py-1 bg-grey-light rounded text-center text-xs text-blue cursor-pointer mr-4 mb-2 whitespace-no-wrap font-bold">
            {{ tag }}
          </span>
        </div>
        <div class="py-4 flex">
          <div class="w-1/2">
            <div class="dna-left"></div>
          </div>
          <div class="flex flex-col text-blue leading-tight w-1/2 pl-2 ">
            <div class="mb-4">
              <h1>2.3% <span class="text-sm">稀有指数</span></h1>
              <h4 class="font-thin">轻微易燃易爆</h4>
              <p class="text-xs">基因DBH rs123124124 位点 T 型</p>
            </div>
            <div class="mb-4">
              <h1>2.3% <span class="text-sm">稀有指数</span></h1>
              <h4 class="font-thin">轻微易燃易爆</h4>
              <p class="text-xs">基因DBH rs123124124 位点 T 型</p>
            </div>

            <div class="">
              <h1>2.3% <span class="text-sm">稀有指数</span></h1>
              <h4 class="font-thin">轻微易燃易爆</h4>
              <p class="text-xs">基因DBH rs123124124 位点 T 型</p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-4 flex items-center justify-around">
        <div>
          <div class="w-24 h-24 bg-grey">
          </div>
        </div>

        <div class="text-white text-center">
          <div class="mb-2">
            <img src="../../assets/gese_logo.svg" alt="">
          </div>
          <p>用科学定义独一无二的你</p>
          <p>gesedna.com</p>
        </div>

      </div>
    </div>

  </modal>
</template>
<script>
export default {
  data () {
    return {
      tags: [
        '最难留疤',
        '容易焦虑',
        '非常脆弱',
        '喝咖啡较多',
        '比较怕痛',
        '不易长痘',
        '最难失眠',
        '叶酸需求较高',
        '最难留疤',
        '容易焦虑',
        '非常脆弱',
        '喝咖啡较多',
        '比较怕痛',
        '不易长痘',
        '最难失眠',
        '叶酸需求较高'
      ]
    }
  }
}
</script>
<style>
  .dna-left {
    background: url("../../assets/dna_left.svg") no-repeat right;
    background-size: cover;
    height: 100%;
    min-width: 100%;
  }
</style>
