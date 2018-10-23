<template>
  <div class="container mx-auto">
    <div class="bg-blue">
      <div class="px-4 pt-8 pb-12 clearfix">
        <top-bar modal="ancestry-share"></top-bar>
          <div class="w-10 h-10 p-2 mr-2 rounded-full bg-white float-left flex items-center justify-center shadow">
            <img src="../assets/394.png" alt="" class="w-24 rounded-full">
          </div>
          <h1 class="text-white inline-block">DARK Liu</h1>
          <div class="text-white float-right p-3 text-sm">公开</div>
      </div>
    </div>
    <div class="bg-white shadow rounded m-4 -mt-4 relative">
      <div class="relative">
        <div class="flex">
          <div class="w-1/2">
            <div class=" pt-2 pl-4 leading-tight">
              <div class="clearfix">
                <span class="text-blue font-bold text-sm">基因</span>
                <span class="w-4 h-4 rounded-full text-white text-center text-xxs bg-blue inline-block float-right mr-2" style="line-height: 1rem;">
                稀
              </span>
              </div>

              <div class="text-blue font-bold text-xl">热爱刺激</div>
              <div class="text-grey-dark text-sm">5.08%同类客户</div>
              <div class="test-image"></div>
            </div>
          </div>


          <div class="w-1/2 pt-2 px-4 leading-tight">
            <div class="text-orange font-bold text-sm">现状</div>
            <div class="text-orange font-bold text-xl">不爱刺激</div>
            <div class="text-grey-dark text-sm">5.08%同类客户</div>
            <div class="">
              <img src="../assets/negative_bottom.svg"/>
            </div>
          </div>

          <div class="absolute pin-y border-grey-light middle"></div>

        </div>
      </div>


      <!--<div class="border-l-8 border-blue flex items-center justify-between">
        <div class="text-orange px-2">
          <h1 style="font-size: 4rem;">50.12<span style="font-size: 3rem;">%</span></h1>
          <p class="font-bold">中国华北地区</p>
        </div>

        地区画像
        <div class="bg-grey rounded-full w-24 h-24 mr-2">
        <img src="../assets/394.png" alt="" class="w-24 rounded-full">
        </div>
        <div class="w-24 h-24 p-2 mr-2 rounded-full bg-white float-right flex items-center justify-center shadow">
          <img src="../assets/394.png" alt="" class="w-24 rounded-full">
        </div>
      </div>-->
      <!--<div class="px-2 pt-4">
        <ul class="list-reset leading-loose text-grey-cb">
          <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">蒙古人种</li>
          <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">牛羊肉 青稞酒</li>
          <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">鼻子窄</li>
          <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">西藏</li>
          <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">松赞干布</li>
          <li class="inline bg-grey-light font-bold px-2 py-1 rounded whitespace-no-wrap">牛羊肉 青稞酒</li>
        </ul>
      </div>-->
      <div class="leading-normal px-4 pt-2">
        <p class="text-xl font-bold text-grey-darker mt-4">
          爱刺激程度
        </p>
        <p class="text-grey-dark mt-6 leading-loose text-sm">
          你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则：调用用户祖源祖源。百分比数据调用规则：调用用户祖源祖源。
        </p>
        <p class="text-grey-dark mt-6 leading-loose text-sm">
          你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则：调用用户祖源祖源。
        </p>
      </div>
      <div class="px-4 py-12 clearfix">
        <div class="w-full">
          <div class="result-image inline-block"></div>
          <div class="inline-block align-bottom text-blue text-xs font-bold -ml-2">爱刺激</div>
          <div class="inline-block align-bottom text-blue">
            <span class="text-3xl font-bold">=</span>
            <span class="text-3xl">40</span>
            <span class="-ml-1">%</span>
            <span class="text-xs font-bold -ml-1">基因</span>
            <span class="text-3xl font-bold">+</span>
          </div>
          <div class="inline-block align-bottom text-blue">
            <span class="text-3xl">60</span>
            <span class="-ml-1">%</span>
            <span class="text-xs font-bold -ml-1">生活经历</span>
          </div>
        </div>
      </div>

    </div>

    <div class="container mx-auto bg-white">
      <div class="flex ">
        <p class="w-1/4 text-center">
          <a href="#" class="no-underline text-grey-dark font-bold">基因解读</a>
        </p>
        <p class="w-1/4 text-center">
          <a href="#" class="no-underline text-blue-dark font-bold">生活经历</a>
        </p>
        <p class="w-1/4 text-center">
          <a href="#" class="no-underline text-grey-dark font-bold">现状</a>
        </p>
        <p class="w-1/4 text-center">
          <a href="#" class="no-underline text-grey-dark font-bold">更好的你</a>
        </p>
      </div>
      <!--<div class="">
        <div class="font-bold px-2">以下生活经历可能会影响你的爱刺激程度</div>
      </div>-->
      <div class="mt-2 relative">
        <div class="flex border-t">
          <div class="absolute pin-y border-grey-light middle "></div>
          <div class="absolute w-2 h-2 border rounded-full circle z-20 bg-white"></div>

          <div class="absolute cb z-10 leading-tight">
            <div class="text-grey-darker text-center rounded-lg shadow bg-white text-sm inline-block w-8 h-5">-1岁</div>
            <span class="text-grey font-bold text-sm">母亲子宫中</span>
          </div>

          <div class="w-1/2 text-blue">
            <div class="text-right font-bold pr-4 pt-4"><i class="iconfont icon-arrow-left text-2xl w-8 h-8 inline-block align-middle -mr-4"></i><span class="w-3/5 h-1 bg-blue inline-block align-middle -mt-1"> </span> &nbsp;减弱</div>
            <div class="p-1 m-3 shadow-md rounded-lg mt-16">
              <p class="font-bold m-1 leading-normal">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey leading-normal"> 4000多年前，你的祖先在西藏雅鲁藏。</P>
              <p class="text-blue mt-4 inline-block font-bold text-sm">极大减弱</p>
              <p class="w-6 h-7 bg-blue float-right mt-6 mr-3"></p>
              <p class="w-8 h-1 bg-blue my-2"></p>
            </div>
          </div>


          <div class="w-1/2 text-orange">
            <div class="text-left font-bold pl-4 pt-4">增强 &nbsp;<span class="w-3/5 h-1 bg-orange inline-block align-middle -mt-1"></span><i class="iconfont icon-youjiantou text-2xl w-8 h-8 inline-block align-middle -ml-4"></i></div>
            <div class="p-1 m-3 shadow-md rounded-lg mt-16">
              <p class="text-left font-bold m-1 leading-normal">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey leading-normal"> 4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则。</P>
              <p class="text-orange mt-4 inline-block font-bold text-sm">略微增强</p>
              <p class="w-8 h-8 float-right mt-4"><i class="iconfont icon-jiahaocu font-black text-2xl"></i></p>
              <p class="w-8 h-1 bg-orange my-2"></p>
            </div>
          </div>
        </div>


        <div class="flex mt-4">
          <div class="absolute pin-y border-grey-light middle "></div>

          <div class="absolute z-10 ca leading-tight">
            <div class="text-grey-darker text-center rounded-lg shadow bg-white text-sm inline-block w-8 h-5">0岁</div>
            <span class="text-grey font-bold text-sm">出生</span>
          </div>

          <div class="w-1/2 text-blue">

            <div class="p-1 m-3 shadow-md rounded-lg mt-12">
              <p class="font-bold m-1 leading-normal">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey leading-normal"> 4000多年前，你的祖先在西藏雅鲁藏。</P>
              <p class="text-blue mt-4 inline-block font-bold text-sm">极大减弱</p>
              <p class="w-6 h-7 bg-blue float-right mt-6 mr-3"></p>
              <p class="w-8 h-1 bg-blue my-2"></p>
            </div>
          </div>


          <div class="w-1/2 text-orange hidden">

            <div class="p-1 m-3 shadow-md rounded-lg mt-12">
              <p class="text-left font-bold m-1 leading-normal">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey leading-normal"> 4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则。</P>
              <p class="text-orange mt-4 inline-block font-bold text-sm">略微增强</p>
              <p class="w-8 h-8 float-right mt-4"><i class="iconfont icon-jiahaocu font-black text-2xl"></i></p>
              <p class="w-8 h-1 bg-orange my-2"></p>
            </div>
          </div>
        </div>

        <div class="flex mt-4">
          <div class="absolute pin-y border-grey-light middle "></div>

          <div class="absolute z-10 ca leading-tight">
            <div class="text-grey-darker text-center rounded-lg shadow bg-white text-sm inline-block w-8 h-5">10岁</div>
            <span class="text-grey font-bold text-sm">青少年</span>
          </div>

          <div class="w-1/2 text-blue invisible">

            <div class="p-1 m-3 shadow-md rounded-lg mt-12">
              <p class="font-bold m-1 leading-normal">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey leading-normal"> 4000多年前，你的祖先在西藏雅鲁藏。</P>
              <p class="text-blue mt-4 inline-block font-bold text-sm">极大减弱</p>
              <p class="w-6 h-7 bg-blue float-right mt-6 mr-3"></p>
              <p class="w-8 h-1 bg-blue my-2"></p>
            </div>
          </div>


          <div class="w-1/2 text-orange">

            <div class="p-1 m-3 shadow-md rounded-lg mt-12">
              <p class="text-left font-bold m-1 leading-normal">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey leading-normal"> 4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则。</P>
              <p class="text-orange mt-4 inline-block font-bold text-sm">略微增强</p>
              <p class="w-8 h-8 float-right mt-4"><i class="iconfont icon-jiahaocu font-black text-2xl"></i></p>
              <p class="w-8 h-1 bg-orange my-2"></p>
            </div>
          </div>
        </div>

        <div class="flex mt-4">
          <div class="absolute pin-y border-grey-light middle "></div>

          <div class="absolute z-10 ca leading-tight">
            <div class="text-grey-darker text-center rounded-lg shadow bg-white text-sm inline-block w-8 h-5">15岁</div>
            <span class="text-grey font-bold text-sm">成年</span>
          </div>

          <div class="w-1/2 text-blue">

            <div class="p-1 m-3 shadow-md rounded-lg mt-12">
              <p class="font-bold m-1 leading-normal">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey leading-normal"> 4000多年前，你的祖先在西藏雅鲁藏。</P>
              <p class="text-blue mt-4 inline-block font-bold text-sm">极大减弱</p>
              <p class="w-6 h-7 bg-blue float-right mt-6 mr-3"></p>
              <p class="w-8 h-1 bg-blue my-2"></p>
            </div>
          </div>


          <div class="w-1/2 text-orange">

            <div class="p-1 m-3 shadow-md rounded-lg mt-12">
              <p class="text-left font-bold m-1 leading-normal">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey leading-normal"> 4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则。</P>
              <p class="text-orange mt-4 inline-block font-bold text-sm">略微增强</p>
              <p class="w-8 h-8 float-right mt-4"><i class="iconfont icon-jiahaocu font-black text-2xl"></i></p>
              <p class="w-8 h-1 bg-orange my-2"></p>
            </div>
          </div>
        </div>

      </div>

          <!--<div class="w-auto absolute ca">
            <div class="text-grey-darker text-center rounded-lg shadow bg-white text-sm inline-block w-8 h-5">0岁</div>
            <span class="text-grey font-bold text-sm">母亲子</span>
          </div>
          <div class="w-auto absolute cc">
            <div class="text-grey-darker text-center rounded-lg shadow bg-white text-sm inline-block w-8 h-5">5岁</div>
            <span class="text-grey font-bold text-sm">母亲子</span>
          </div>
          <div class="w-auto absolute cd">
            <div class="text-grey-darker text-center rounded-lg shadow bg-white text-sm inline-block w-8 h-5">10岁</div>
            <span class="text-grey font-bold text-sm">母亲子</span>
          </div>
          <div class="w-auto absolute ce">
            <div class="text-grey-darker text-center rounded-lg shadow bg-white text-sm inline-block w-8 h-5">20岁</div>
            <span class="text-grey font-bold text-sm">母亲</span>
          </div>-->




           <!-- <div class="p-1 invisible">
              <p class="text-right font-bold m-1 mt-4">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey"> 4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则</P>
              <p class="text-blue text-right pr-2">极大减弱</p>
            </div>-->
            <!--<div class="p-1 m-3 shadow-md rounded-lg ">
              <p class="font-bold m-1 mt-4 leading-normal">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey leading-normal"> 4000多年前，你的祖先在西藏雅鲁藏。</P>
              <p class="text-blue mt-4 inline-block font-bold text-sm">极大减弱</p>
              <p class="w-8 h-2 bg-blue float-right mt-6"></p>
              <p class="w-8 h-1 bg-blue my-2"></p>
            </div>-->
            <!--<div class="p-1 invisible">
              <p class="text-right font-bold m-1 mt-4">生理性别女</p>
              <P class="text-left text-sm m-1 text-grey"> 4000多年前，你的祖先在西藏雅鲁藏布江，祖源百分比数据调用规则</P>
              <p class="text-blue text-right pr-2">极大减弱</p>
            </div>-->

    </div>
  </div>
</template>

<script>
  import TopBar from './TopBar.vue'
  export default {
    components:{
      TopBar,
    }
  }
</script>
<style>
  .test-image {
    height: 18px;
    width: 150px;
    background: url('../assets/positive_bottom.svg') no-repeat bottom;
    background-size: cover;
  }
  .middle {
    width: 0;
    height: 100%;
    left: 50%;
    border-right-width: 1px;
  }
  .cb {
    top:60px;
    left: 46%;
  }
  .ca{
    left: 46%;
  }
  .circle{
    top: -3px;
    left: 49.3%;
  }
  .result-image {
    /*background: url('../assets/fire.svg') no-repeat;*/
    /*-webkit-background-size: cover;*/
    /*background-size: cover;*/
    width: 2rem;
    height: 2rem;
    background: url("../assets/fire_blue.svg") no-repeat bottom;
    background-size: cover;
  }

</style>

