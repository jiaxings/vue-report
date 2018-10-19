<template>
  <div class="container mx-auto">
    <div class="bg-grey-lightest">
      <div class="px-4 pt-8 pb-2 bg-grey header-image">

        <top-bar modal="ancestry-share"></top-bar>
        <h1 class="text-white mt-6">各色小助手 <span class="text-sm">的祖源画像</span></h1>
      </div>

      <div>
        <transition name="fade">
          <div v-if="world">
            <earth :show-nav="false"></earth>
          </div>
          <div v-else>
            <flat-map></flat-map>
          </div>
        </transition>

        <div class="inline-block text-grey-dark m-4 text-right" @click="toggleMap"><h5>切换至{{ world ? '中国': '世界' }}地图</h5></div>
      </div>

      <div class="bg-white shadow rounded m-4 py-8">
        <div class="border-l-8 border-blue flex items-center justify-between">
          <div class="text-blue px-2">
            <h1 style="font-size: 4rem;">50.12<span style="font-size: 3rem;">%</span></h1>
            <p>中国华北地区</p>
          </div>

          <!--地区画像-->
          <div class="w-24 h-24 p-2 mr-2 rounded-full bg-white float-right flex items-center justify-center shadow">
            <img src="../assets/394.png" alt="" class="w-24 rounded-full">
          </div>
        </div>
        <div class="px-2 pt-4">
          <ul class="list-reset leading-loose text-grey-cb">
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">蒙古人种</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">青稞酒</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">鼻子窄</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">西藏</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">松赞干布</li>
            <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">牛羊肉</li>
          </ul>
        </div>
        <div class="leading-normal px-2 pt-2 text-grey-dark">
          4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源
        </div>

      </div>

      <div class="border-l-8 border-grey pl-4 m-4 text-grey">祖源成分</div>

      <div class="bg-white rounded py-4 px-4 m-4">
        <div class="text-grey-dark" v-for="ancestry in ancestries" :key="ancestry.slug">
          <h3 class="my-4">{{ ancestry.district }}</h3>
          <div class="flex items-center my-2" v-for="(location, index) in ancestry.locations" :key="location.name" @click="$modal.show('ancestry-detail')">
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
                <v-icon name="angle-right" scale="1" class="text-right"></v-icon>
              </div>
            </div>
          </div>
        </div>

        <div class="inline-block text-blue cursor-pointer my-4" @click="toggleAllAncestry">
          <h5>{{ showAll ? '隐藏': '查看'}}全部祖源信息</h5>
        </div>
        <div class="flex flex-wrap text-grey-dark -mx-2" v-show="showAll">
          <div class="w-1/2" v-for="location in allLocations" :key="location.id">
            <div class="bg-white shadow flex items-center m-2 p-2">
              <div class="w-10 h-10 rounded-full bg-grey"></div>
              <div class="leading-normal ml-2">
                <h5>{{ location.title }}</h5>
                <p class="text-xs">{{ location.area }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-grey text-xs my-4">
          <p>*地图上的色块，展示了该地区人口的大致分布区域</p>
          <p>*你的祖源成分百分比，展示了你与该地区人口的DNA相似性，并不代表你一定来自这个地区</p>
        </div>

      </div>

      <panel>
        <h3 slot="head">我的祖源成分是怎么得出来的？</h3>
        <p slot="content">
          4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源
        </p>
      </panel>
      <panel>
        <h3 slot="head">我的祖源成分是怎么得出来的？</h3>
        <p slot="content">
          4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源祖源百分比数据调用规则：调用用户祖源
        </p>
      </panel>

      <Bar/>
    </div>
  </div>
</template>
<script>
import Earth from '@/components/Earth'
import Panel from '@/components/Panel'
import TopBar from '@/components/TopBar'
import FlatMap from '@/components/FlatMap'
import Bar from '@/components/Bar'

export default {
  components: {
    Earth,
    Panel,
    TopBar,
    FlatMap,
    Bar,
  },
  data () {
    return {
      showAll: false,
      world: true,
      ancestries: [
        {
          district: '亚洲',
          slug: 'asia',
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
        },
        {
          district: '欧洲',
          slug: 'europe',
          locations: [
            {
              'name': '意大利',
              'percent': 0.0123,
              'color': '#0086ff'
            },
            {
              'name': '高加索',
              'percent': 0.0102,
              'color': '#fd6603'
            }
          ]
        }
      ],
      allLocations: [
        {
          id: 1,
          title: '亚洲',
          area: '中国华北地区'
        },
        {
          id: 2,
          title: '亚洲',
          area: '中国东北地区'
        },
        {
          id: 3,
          title: '亚洲',
          area: '中国华南地区'
        },
        {
          id: 4,
          title: '亚洲',
          area: '中国华北地区'
        }, {
          id: 5,
          title: '欧洲',
          area: '西班牙'
        }, {
          id: 6,
          title: '欧洲',
          area: '俄罗斯'
        }
      ]
    }
  },
  methods: {
    toggleAllAncestry () {
      this.showAll = !this.showAll
    },
    toggleMap () {
      this.world = !this.world
    }
  }

}
</script>
