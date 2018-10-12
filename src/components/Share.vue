<template>
  <div class="container mx-auto bg-grey-lightest">
    <div class="bg-blue px-6 py-4">
      <div class="flex items-end">
        <div class="w-1/2 text-white">
          <h2>DARK Liu</h2>
          <p>第999,99位好奇心用户</p>
        </div>
        <div class="w-1/2">
          <icon name="head" :scale="200"></icon>
        </div>
      </div>

      <div class="py-4 flex">
        <div class="-pl-6 w-1/2">
          <img src="../assets/dna_left.svg" alt="" class="-ml-6" style="height: 100%;">
        </div>
        <div class="flex flex-col text-white leading-tight w-1/2">
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
    <div class="bg-white rounded -mt-4 pt-6 shadow mx-4">
      <div class="flex justify-between">
        <div class="border-l-4 border-blue">
          <h2 class="text-blue-light pl-4">16<span class="text-xs">个稀有标签</span></h2>
        </div>
      </div>
      <div class="py-3 leading-tight pl-4">
        <a v-for="tag in tags" :key="tag" class="inline-block px-2 py-1 bg-grey-lighter rounded text-center text-xs text-blue-dark cursor-pointer mr-4 mb-2 whitespace-no-wrap">
          {{ tag }}
        </a>
      </div>
    </div>

    <div class="py-4 flex items-center justify-around">
      <div>
        <div class="w-24 h-24 bg-blue">
        </div>
      </div>

      <div class="text-blue text-center">
        <div>
          <icon name="gese_logo" :scale="200"></icon>
        </div>
        <p>用科学定义独一无二的你</p>
        <p>gesedna.com</p>
      </div>

    </div>

  </div>
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
