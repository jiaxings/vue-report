<template>
  <div class="bg-white m-2 mb-0 pt-4 shadow-md card relative rounded">
    <div
      class="absolute pin-t pin-t p-2 "
    >
      <div
        class="w-4 h-4 rounded-full text-white text-center text-xxs bg-blue"
        v-if="explain.rare"
        style="line-height: 1rem;"
      >
        稀
      </div>
      <div
        class="bg-grey-lighter w-4 h-4 rounded-full shadow-inner"
        v-else
      >
      </div>
    </div>
    <div class="absolute pin-t pin-r pr-2" v-if="explain.new">
      <div class="relative bg-orange h-6 w-4">
        <div class="new">
          <div class="text-xxs text-white text-center" style="line-height: 2rem;">
            新
          </div>
        </div>
      </div>


    </div>
    <div class="text-center">
      <div class="result-image">
          <img src="../assets/fire_blue.svg" alt="" v-if="explain.rare">
        <img src="../assets/fire.svg" alt="" v-else>
      </div>
      <div class="py-2 leading-normal">
        <p
          class="text-xs font-bold"
          :class="explain.tag ? (explain.tag === 'new' ? 'text-orange': 'text-blue'): ''"
        >{{ explain.title }}</p>
        <p class="text-xxs text-grey-dark">现状：{{ explain.test }}</p>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  props: {
    explain: Object
  }
}
</script>
<style>
  .card {
    width: 90%;
    min-width: 7rem;
    height: 80%;
    min-height: 7rem;
  }
  .result-image {
    /*background: url('../assets/fire.svg') no-repeat;*/
    /*-webkit-background-size: cover;*/
    /*background-size: cover;*/
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 auto;
  }
  .new::before,
  .new::after {
    content: "";
    position: absolute;
    top: 100%;
    width: 0;
    height: 0;
    border-bottom: 0.5rem solid transparent;
  }

  .new::after {
    left: 0;
    border-left: 0.5rem solid #ff6f09;
  }

  .new::before {
    right: 0;
    border-right: 0.5rem solid #ff6f09;
  }
</style>
