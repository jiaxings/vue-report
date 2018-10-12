<template>
  <div class="bg-white m-2 pt-4 shadow card">
    <div class="text-center">
      <div class="result-image"></div>
      <div class="py-2 leading-normal">
        <p class="text-sm">{{ title }}</p>
        <p class="text-xs text-grey-dark">现状：{{ test }}</p>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  props: {
    title: String,
    test: String
  }
}
</script>
<style>
  .card {
    width: 90%;
    min-width: 6rem;
    heigth: 80%;
    min-height: 6rem;
  }
  .text-xxs {
    font-size: .25rem;
  }
  .result-image {
    background: url('../assets/fire.svg') no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }
</style>
