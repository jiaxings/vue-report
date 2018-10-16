<template>
  <div class="bg-white m-2 mb-0 pt-4 shadow-md card relative rounded">
    <div
      class="absolute pin-t pin-t p-2 "
    >
      <div
        class="w-4 h-4 rounded-full text-white text-center text-xxs"
        v-if="explain.tag"
        style="line-height: 1rem;"
        :class="explain.tag === 'new' ? 'bg-orange' : 'bg-blue'"
      >
        {{ explain.tag === 'new' ? '新' : '稀' }}
      </div>
      <div
        class="bg-grey-lightest w-4 h-4 rounded-full shadow-inner"
        v-else
      ></div>
    </div>
    <div class="text-center">
      <div class="result-image">
        <template v-if="explain.tag">
          <img src="../assets/fire_blue.svg" alt="" v-if="explain.tag === 'rare'">
          <img src="../assets/fire_orange.svg" alt="" v-else>
        </template>

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
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
  }
</style>
