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
              <div class="w-24 h-24 p-2 rounded-full bg-white float-right flex items-center justify-center shadow">
                <img src="../assets/394.png" alt="" class="w-24 rounded-full">
              </div>
            </div>
          </div>

        </div>
      <div class="bg-white rounded -mt-4 pt-6 shadow mx-4">
        <div class="flex justify-between">
          <div class="border-l-8 border-blue">
            <h2 class="text-blue pl-2 text-3xl">16<span class="text-xs">个稀有标签</span></h2>
          </div>
          <div class="px-3 pointer-cursor" @click="showResultShare">
            <!--<v-icon name="external-link-alt" scale="2" class="text-blue"></v-icon>-->
            <icon-base name="icon-share" view-box="0 0 20 20" :width="24" :height="24" stroke-color="#0086ff" icon-color="none"><icon-share></icon-share></icon-base>
          </div>
        </div>
        <div class="pt-2 leading-tight pl-4">
          <!--TODO 整合class-->
          <span v-for="tag in tags" :key="tag" class="inline-block px-2 py-1 bg-grey-light rounded text-center text-xs text-blue cursor-pointer mr-4 mb-2 whitespace-no-wrap font-bold">
            {{ tag }}
          </span>
        </div>
        <div class="dna-bottom px-4">
          <img src="../assets/dna_bottom.png" alt="" class="w-full -mb-1">
        </div>
      </div>

        <div class="pt-6 mx-4 text-grey-dark">
            <h4 class="mb-2 text-lg">个性特点 <sup class="bg-grey-light py-1 px-2 text-orange text-xxs rounded-full align-middle">更新1项目</sup></h4>
          <div class="-mx-2 flex flex-wrap">
            <div v-for="(explain, index) of explains" :key="index" class="w-1/3 sm:w-1/4">
              <explain :explain="explain"></explain>
            </div>
          </div>
        </div>

      <div class="pt-6 mx-4 text-grey-dark">
        <h4 class="mb-2 text-lg">个性特点</h4>
        <div class="-mx-2 flex flex-wrap">
          <div v-for="(explain, index) of explains" :key="index" class="w-1/3 sm:w-1/4">
            <explain :explain="explain"></explain>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
import axios from 'axios'

import Explain from './Explain'
import TopBar from '@/components/TopBar'
// import dnaBottom from '../assets/dna_bottom.svg'
import dnaBottom from '../assets/dna_bottom.png'
import IconShare from './icons/IconShare'
export default {
  components: {
    Explain,
    TopBar,
    IconShare
  },
  data () {
    return {
      loadingShare: false,
      shareImage: './screenshots/screen-1539683757013.png',
      // shareImage: 'http://localhost:3000/screenshots/screen-1539683757013.png',
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
          test: '宜人性中等',
          rare: true
        },
        {
          title: '宜人性较低',
          test: '宜人性中等',
          new: true,
          rare: true
        },
        {
          title: '宜人性较低',
          test: '宜人性中等'
        },
        {
          title: '宜人性较低',
          test: '宜人性中等',
          rare: true
        }
      ]
    }
  },
  methods: {
    showResultShare () {
      this.$store.commit('setShareImageUrl', this.shareImage)
      this.$modal.show('share-result-image')
      // console.log('show')
    //   this.$modal.show('share-result-image')
    //   this.loadingShare = true
    //   axios.get('http://localhost:3000/export/pdf')
    //     .then(res => {
    //       this.loadingShare = false
    //       if (res.data && res.data.path) {
    //         this.shareImage = res.data.path
    //       }
    //     })
    //     .catch(e => {
    //       this.loadingShare = false
    //       console.error(e)
    //     })
    }
  }
}
</script>
<style>
  .svg {fill:none;stroke:#777;stroke-miterlimit:10;stroke-width:2px;}
  .dna-bottom {
    width: 100%;
  }
  .share-image {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    .dna-bottom {
      display: none;
    }
  }
</style>
