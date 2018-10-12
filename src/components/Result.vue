<template>
    <div class="container mx-auto bg-grey-lightest">
        <div class="bg-blue px-4 pt-4">
          <top-bar></top-bar>

          <div class="flex items-center">
            <div class="w-2/3">
              <h2 class="text-white text-3xl">
                DARk Liu
              </h2>
              <p class="text-grey-lighter text-xs">祖源： 蒙古地区人 ></p>
            </div>
            <div class="w-1/3">
              <div class="w-24 h-24 rounded-full bg-grey-light z-1 float-right flex items-center justify-center">
              <!--TODO 补充用户头像-->
              </div>
            </div>
          </div>

        </div>
      <div class="bg-white rounded -mt-4 pt-6 shadow mx-4">
        <div class="flex justify-between">
          <div class="border-l-4 border-blue">
            <h2 class="text-blue pl-4 text-3xl">16<span class="text-xs">个稀有标签</span></h2>
          </div>
          <div class="px-3 pointer-cursor" @click="showResultShare">
            <v-icon name="share-square" scale="2" class="text-blue"></v-icon>
          </div>
        </div>
        <div class="py-3 leading-tight pl-4">
          <a v-for="tag in tags" :key="tag" class="inline-block px-2 py-1 bg-grey-lighter rounded text-center text-xs text-blue-dark cursor-pointer mr-4 mb-2 whitespace-no-wrap">
            {{ tag }}
          </a>
        </div>
        <div class="dna-bottom"></div>
      </div>

        <div class="py-2 mx-4">
          <div class="my-2">
            <h4>个性特点 <span class="bg-grey-light py-1 px-2 text-red-light text-xs rounded">更新1项目</span></h4>
          </div>
          <div class="-mx-2 flex flex-wrap">
            <div v-for="(explain, index) of explains" :key="index" class="w-1/3 sm:w-1/4">
              <explain :title="explain.title" :test="explain.test"></explain>
            </div>
          </div>
        </div>

      <div class="py-2 mx-4">
        <div class="my-2">
          <h4>个性特点 <span class="bg-grey-light py-1 px-2 text-red-light text-xs rounded">更新1项目</span></h4>
        </div>
        <div class="-mx-2 flex flex-wrap">
          <div v-for="(explain, index) of explains" :key="index" class="w-1/3 sm:w-1/4">
            <explain :title="explain.title" :test="explain.test"></explain>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
import Explain from './Explain'
import TopBar from '@/components/TopBar'
// import dnaBottom from '../assets/dna_bottom.svg'
import dnaBottom from '../assets/dna_bottom.png'
export default {
  components: {
    Explain,
    TopBar
  },
  data () {
    return {
      d_b: {
        backgroundImage: dnaBottom,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      },
      tags: [
        '最难留疤',
        '容易焦虑',
        '非常脆弱',
        '喝咖啡较多',
        '比较怕痛',
        '不易长痘',
        '最难失眠',
        '叶酸需求较高'
      ],
      explains: [
        {
          title: '宜人性较低',
          test: '宜人性中等'
        },
        {
          title: '宜人性较低',
          test: '宜人性中等'
        },
        {
          title: '宜人性较低',
          test: '宜人性中等'
        },
        {
          title: '宜人性较低',
          test: '宜人性中等'
        }
      ]
    }
  },
  methods: {
    showResultShare () {
      console.log('show')
      this.$modal.show('result-share')
    }
  }
}
</script>
<style>
  .svg {fill:none;stroke:#777;stroke-miterlimit:10;stroke-width:2px;}
  .dna-bottom {
    min-height: 6rem;
    width: 100%;
    background: url('../assets/dna_bottom.png') no-repeat;
    background-size: cover;
  }
</style>
