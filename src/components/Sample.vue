<template>
  <div class="p-6 bg-grey-light">
    <div class="full-width">
      <div class="container mx-auto">
        <div
          class="bg-purple-dark hover:bg-purple-darker px-3 py-6 rounded-lg relative cursor-pointer"
          @click="toggleChildren"
          :class="aria ? 'rounded-b-none': ''"
        >
          <div class="mr-12 inline-block">
            <img class="w-16" src="https://oss-cn-beijing.aliyuncs.com/gese-static/report-subject/appearance-icon.png">
          </div>
          <div class="text-white leading-loose inline-block">
            <h3>外形特征4项</h3>
            <p>看看其他出场硬件</p>
          </div>

          <div class="mark absolute pin-r text-red w-16 h-5 leading-loose bg-white text-xs" style="top:30px;">
            更新1项
          </div>
        </div>
        <transition name="fade">
          <div class="bg-grey-lightest bg-grey px-12 pb-6 rounded-b-lg children-list" v-show="aria">
          <div class="py-6">
            <h4 class="mb-4">
              最难近视
              <a class="text-green text-sm hover:text-green-darker cursor-pointer float-right">
                测测现状表现
              </a>
            </h4>
            <a href="" class="text-sm mb-4 no-underline text-grey-darker block">
              <p>
                恭喜他，比起一般人，他更难近视。不过仍然要注意用眼卫生、多参加户外活动哦。
                <img src="https://oss-cn-beijing.aliyuncs.com/gese-static/img/arrow@2x.svg" class="float-right"
                     alt="">
              </p>
            </a>

            <div class="text-xs text-grey-dark">
                            <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer -ml-1">
                                <img style="height: 16px;" src="https://oss-cn-beijing.aliyuncs.com/gese-static/img/heritability.png">
                                遗传影响 30% - 50%
                            </span>
              <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer">
                                15篇参考文献
                            </span>
              <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer">
                                13.32%的人跟他一样
                            </span>
              <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer">
                                *低于20%即为稀有基因标签
                            </span>
            </div>

          </div>

          <div class="py-6">
            <h4 class="mb-4">
              最难近视
              <a class="text-green text-sm hover:text-green-darker cursor-pointer float-right">
                测测现状表现
              </a>
            </h4>
            <a href="" class="text-sm mb-4 no-underline text-grey-darker block">
              <p>
                恭喜他，比起一般人，他更难近视。不过仍然要注意用眼卫生、多参加户外活动哦。
                <img src="https://oss-cn-beijing.aliyuncs.com/gese-static/img/arrow@2x.svg" class="float-right"
                     alt="">
              </p>
            </a>

            <div class="text-xs text-grey-dark">
                            <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer -ml-1">
                                <img style="height: 16px;" src="https://oss-cn-beijing.aliyuncs.com/gese-static/img/heritability.png">
                                遗传影响 30% - 50%
                            </span>
              <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer">
                                15篇参考文献
                            </span>
              <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer">
                                13.32%的人跟他一样
                            </span>
              <span class="px-1 py-2 hover:bg-grey-light rounded cursor-pointer">
                                *低于20%即为稀有基因标签
                            </span>
            </div>

          </div>

          <div class="py-12">
            <div class="float-right">
              <button class="px-1 py-2 hover:bg-grey-light rounded text-grey-dark text-sm" @click="hideChildren">收起</button>
            </div>

          </div>

        </div>
        </transition>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      aria: false
    }
  },
  methods: {
    toggleChildren () {
      this.aria = !this.aria
    },
    hideChildren () {
      this.aria = false
    }
  }
}
</script>
<style>
  .mark::before,
  .mark::after {
    content: "";
    position: absolute;
    right: 100%;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
  }

  .mark::after {
    bottom: 0px;
    border-bottom: 13px solid #fff;
  }

  .mark::before {
    top: 0px;
    border-top: 15px solid #fff;
  }

  .children-list div {
    border-bottom: 1px solid #ddd;
  }

  .children-list div:last-child {
    border-bottom: none;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
