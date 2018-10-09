<template>
  <div class="bg-white m-2 pt-4 shadow card">
    <div class="text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.201 30.707" width="36" height="36">
        <g transform="translate(-219 -503.293)">
          <path class="svg" d="M8.474,0H0L8.474,8.474Z" transform="translate(240.727 504.293)"/>
          <path class="svg" d="M.233,9.223,8.9.56S3.6,3.6,0,0" transform="translate(224.63 524.07)"/>
          <path class="svg" d="M0,0,1.687,1.687" transform="translate(221.097 519.607)"/>
          <path class="svg" d="M0,0H2.386" transform="translate(219 524.669)"/>
          <path class="svg" d="M0,1.687,1.687,0" transform="translate(221.097 528.045)"/>
          <path class="svg" d="M10.17,0H0" transform="translate(232.678 515.307)"/>
          <path class="svg" d="M10.17,0H0" transform="translate(228.44 519.545)"/>
          <path class="svg" d="M5.085,18.646,0,13.561,13.561,0l5.085,5.085Z" transform="translate(228.44 505.984)"/>
          <path class="svg" d="M10.171,0H0" transform="translate(236.915 511.07)"/>
        </g>
      </svg>

      <div class="py-2 leading-normal">
        <p class="text-sm">{{ title }}</p>
        <p class="text-xxs text-grey-dark">现状：{{ test }}</p>
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
    width: 80%;
    min-width: 6rem;
    heigth: 80%;
    min-height: 6rem;
  }
  .text-xxs {
    font-size: .25rem;
  }
</style>
