<template>
  <canvas ref="canvas"></canvas>
</template>
<script>
import { geoMercator, geoPath, geoGraticule, transition } from 'd3'
import { feature, mesh } from 'topojson'
import * as china from '../assets/china-topo.json'
export default {
  created () {
    this.land = feature(china, china.objects.collection)
    this.provinces = this.land.features
    this.borders = mesh(china, china.objects.collection, (a, b) => a !== b)

    this.colors = this.provinces.map((_, i) => {
      let hex = (i % 4 * 3).toString(16)
      return `#C${hex}D${hex}D${hex}`
    })
  },
  mounted () {
    this.init()
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  computed: {
    scale () {
      const scale = this.width / 3
      return scale < 300 ? 300 : scale
    }
  },
  methods: {
    resetCanvas () {
      this.height = this.width = window.innerWidth

      this.canvas.setAttribute('height', this.height)
      this.canvas.setAttribute('width', this.width)
    },

    resizeHandler () {
      this.resetCanvas()
      this.projection.translate([
        this.width / 2, this.height / 2
      ])

      this.draw()
    },
    init () {
      this.canvas = this.$refs.canvas
      this.context = this.canvas.getContext('2d')

      this.resetCanvas()

      // 定义一个地图映射
      // TODO 地图显示的时候边界发虚
      this.projection = geoMercator()
        .center([104, 37])
        .scale(this.scale)
        .translate([this.width / 2, this.height / 2])
        .precision(0.5)

      // 定义一个路径生成器
      this.path = geoPath()
        .projection(this.projection)
        .context(this.context)

      this.frontGrid = geoGraticule()
      this.backGrid = geoGraticule()

      this.draw()
      // path(this.land)
      // this.context.stroke()
      // this.draw()
    },
    // move() {
    //   transition()
    //     .duration(1300)
    //     .attrTween('')
    //     .transition()
    // },
    draw () {
      const c = this.context
      // const projection = this.projection
      const path = this.path

      // 清空当前canvas内部内容
      c.clearRect(0, 0, this.width, this.height)

      c.fillStyle = '#e4eeee'
      c.beginPath()
      path(this.land)
      c.stroke()

      let selected = []
      for (let i in this.provinces) {
        if (i < 3) {
          selected.push(this.provinces[i])
        }

        c.fillStyle = this.colors[i]
        c.beginPath()
        path(this.provinces[i])
        c.fill()
      }

      c.strokeStyle = '#fff'
      c.lineWidth = 0.5
      c.beginPath()
      path(this.borders)
      c.stroke()

      for (let i in selected) {
        c.fillStyle = 'rgba(250, 100, 100, 0.8)'
        c.beginPath()
        path(selected[i])
        c.fill()
      }
    }
  }
}
</script>
