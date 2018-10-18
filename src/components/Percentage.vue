<template>
  <div class="flex flex-no-wrap">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      :viewBox="viewBox"
      class="circular-chart"
    >
      <path class="circle" :style="circleStroke" :d="circlePath" />
      <path class="completed-arc" :style="arcStroke" :stroke-dasharray="dashArray" :d="circlePath" />
    </svg>

  </div>

</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 100
    },
    percent: {
      type: Number,
      default: 1
    },
    arcColor: {
      type: String,
      default: '#00c71b'
    },
    bgCircleColor: {
      type: String,
      default: '#00cc1b33'
    }
  },
  computed: {
    percentage () {
      return parseFloat(this.percent).toFixed(1)
    },
    dashArray () {
      const perc = this.size / 100 * this.percentage
      return perc + ', ' + this.size
    },
    radius () {
      return parseFloat(this.size / (2 * Math.PI)).toFixed(2)
    },
    diameter () {
      return this.radius * 2
    },
    box () {
      return 36
    },
    viewBox () {
      return `0 0 ${this.box} ${this.box}`
    },
    circlePath () {
      return 'M' + (this.box / 2) + ' 2.08' +
        ' a ' + this.radius + ' ' + this.radius + ' 0 0 1 0 ' + this.diameter +
        ' a ' + this.radius + ' ' + this.radius + ' 0 0 1 0 -' + this.diameter
    },
    arcStroke () {
      return 'stroke:' + this.arcColor
    },
    circleStroke () {
      return 'stroke:' + this.bgCircleColor
    }
  }
}
</script>
<style>
  .circular-chart {
    max-width: 90%;
    max-height: 200px;
    margin: 5px auto;
  }
  .circle {
    fill: none;
    stroke-width: 2.0;
  }
  .completed-arc {
    fill: none;
    stroke-width: 1.3;
    stroke-linecap: round;
  }

</style>
