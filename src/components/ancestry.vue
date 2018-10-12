<template>
  <div class="container mx-auto">
    <div class="bg-grey-lightest">
      <div class="px-4 pt-8 pb-2 bg-grey header-image">

        <top-bar modal="ancestry-share"></top-bar>
        <h1 class="text-white">各色小助手 <span class="text-sm">的祖源画像</span></h1>
      </div>

      <div>
        <earth></earth>
        <div class="text-blue m-4 text-right">切换至世界地图</div>
      </div>

      <div class="bg-white shadow rounded m-4 py-8">
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

      <div class="border-l-8 border-grey pl-4 m-4 text-grey">祖源成分</div>

      <div class="bg-white rounded py-4 px-4 m-4">
        <div class="text-grey-dark" v-for="ancestry in ancestries" :key="ancestry.slug">
          <h3 class="my-4">{{ ancestry.district }}</h3>
          <div class="flex items-center my-1" v-for="(location, index) in ancestry.locations" :key="location.name">
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

        <div class="text-blue cursor-pointer my-4">查看全部祖源信息</div>
        <div class="flex flex-wrap text-grey-dark -mx-2">
          <div class="w-1/2">
            <div class="bg-white shadow flex items-center m-2 p-2">
              <div class="w-10 h-10 rounded-full bg-grey"></div>
              <div class="leading-normal ml-2">
                <h5>亚洲</h5>
                <p class="text-xs">中国华北地区</p>
              </div>
            </div>
          </div>

          <div class="w-1/2">
            <div class="bg-white shadow flex items-center m-2 p-2">
              <div class="w-10 h-10 rounded-full bg-grey"></div>
              <div class="leading-normal ml-2">
                <h5>亚洲</h5>
                <p class="text-xs">中国华北地区</p>
              </div>
            </div>
          </div>

          <div class="w-1/2">
            <div class="bg-white shadow flex items-center m-2 p-2">
              <div class="w-10 h-10 rounded-full bg-grey"></div>
              <div class="leading-normal ml-2">
                <h5>亚洲</h5>
                <p class="text-xs">中国华北地区</p>
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <div class="bg-white shadow flex items-center m-2 p-2">
              <div class="w-10 h-10 rounded-full bg-grey"></div>
              <div class="leading-normal ml-2">
                <h5>亚洲</h5>
                <p class="text-xs">中国华北地区</p>
              </div>
            </div>
          </div>

          <div class="w-1/2">
            <div class="bg-white shadow flex items-center m-2 p-2">
              <div class="w-10 h-10 rounded-full bg-grey"></div>
              <div class="leading-normal ml-2">
                <h5>亚洲</h5>
                <p class="text-xs">中国华北地区</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-grey text-xs my-4">
          <p>*地图上的色块，展示了该地区人口的大致分布区域</p>
          <p>*地图上的色块，展示了该地区人口的大致分布区域</p>
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
    </div>
  </div>
</template>
<script>
import Earth from '@/components/Earth'
import Panel from '@/components/Panel'
import TopBar from '@/components/TopBar'

export default {
  components: {
    Earth,
    Panel,
    TopBar
  },
  data () {
    return {
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
      ]
    }
  }

}
</script>
