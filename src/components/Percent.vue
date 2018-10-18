<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    role="presentation"
    :viewBox=viewBox
  >
    <path class="circle" :style=circleStroke :d=circlePath />
    <path class="completed-arc" :style=arcStroke :stroke-dasharray=dashArray :d=circlePath />
  </svg>
</template>

<script>
export default {
  name: 'CircularPercentage',
  props: {
    width: {
      type: Number,
      default: 71
    },
    height: {
      type: Number,
      default: 72
    },
    size: {
      size: Number,
      default: 100
    },
    percent: {
      type: Number,
      required: true
    },
    arcColor: {
      type: String,
      default: '#0086ff'
    },
    bgCircleColor: {
      type: String,
      default: '#b8c2cc'
    }
  },
  computed: {
    percentage () {
      // return parseFloat(100 / (this.done + this.missing) * this.done).toFixed(1)
      return parseFloat(this.percent).toFixed(1)
    },
    dashArray () {
      const perc = this.size / 100 * this.percentage
      return perc + ', ' + this.size
    },
    radius () {
      return parseFloat(this.size / (2 * 3.14159)).toFixed(2)
    },
    diameter () {
      return this.radius * 2
    },
    box () {
      return 36
    },
    viewBox () {
      return '0 0 ' + this.box + ' ' + this.box
    },
    circlePath () {
      return 'M' + (this.box / 2) + ' 12' +
          ' a ' + this.radius + ' ' + this.radius + ' 0 0 1 0 ' + this.diameter +
          ' a ' + this.radius + ' ' + this.radius + ' 0 0 1 0 -' + this.diameter
    },
    arcStroke () {
      return 'stroke: ' + this.arcColor
    },
    circleStroke () {
      return 'stroke: ' + this.bgCircleColor
    }
  }
}
</script>

<style scoped>

  .circle {
    fill: none;
    stroke-width: 2.0;
  }
  .completed-arc {
    fill: none;
    stroke-width: 1.3;
    stroke-linecap: round;
    animation: progress 2s ease-out forwards;
  }
  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }
</style>
