<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import * as world from '../assets/world-110m.json'
import { geoOrthographic, geoPath, geoGraticule, geoCircle, transition, interpolate } from 'd3'
import { feature, mesh } from 'topojson'

export default {
  props: ['locations', 'selected'],
  watch: {
    selected: function () {
      // when selected prop changes change the coordinates
      // and rotate the projection
      const oldCoordinates = this.coordinates
      this.coordinates = this.locations[this.selected].coordinates

      // pass old coordinates to rotate to calcuate distance
      this.rotate(this.coordinates, oldCoordinates)
    }
  },

  created: function () {
    const firstloc = this.locations[this.selected]
    this.coordinates = firstloc ? firstloc.coordinates : [0, 0]

    this.land = feature(world, world.objects.land)
    // this.provinces = this.land.features
    this.provinces = feature(world, world.objects.provinces).features
    this.borders = mesh(world, world.objects.provinces, (a, b) => a !== b)

    const locationIndexes = this.locations.map(l => l.topoindex)

    this.colors = this.provinces.map((_, i) => {
      if (locationIndexes.indexOf(i) !== -1) {
        return '#ABB'
      }
      let hex = (i % 4 * 3).toString(16)
      return '#C' + hex + 'D' + hex + 'D' + hex
    })
  },

  mounted () {
    this.init()

    window.addEventListener('resize', this.resizeHandler)

    const getHiddenProp = () => {
      var prefixes = ['webkit', 'moz', 'ms', 'o']
      // if 'hidden' is natively supported just return it
      if ('hidden' in document) return 'hidden'

      // otherwise loop over all the known prefixes until we find one
      for (var i = 0; i < prefixes.length; i++) {
        if ((prefixes[i] + 'Hidden') in document) { return prefixes[i] + 'Hidden' }
      }
      // otherwise it's not supported
      return null
    }

    // redraw canvas when tab gets back into focus
    const visProp = getHiddenProp()
    if (visProp) {
      const evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange'
      window.addEventListener(evtname, this.draw)
    }
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  computed: {
    scale: function () {
      // the scale of the projection
      const scale = this.width / 3
      return scale > 300 ? 300 : scale
    }
  },
  methods: {
    resetCanvas: function () {
      // this.height = window.innerHeight
      // this.width = window.innerWidth
      this.height = this.width = window.innerWidth

      // let boundingClient = this.canvas.getBoundingClientRect()
      // this.width = boundingClient.right - boundingClient.left || boundingClient.width
      // this.height = boundingClient.bottom - boundingClient.top || boundingClient.height

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
    init: function () {
      this.canvas = this.$refs.canvas
      this.context = this.canvas.getContext('2d')
      // set the size of convas
      this.resetCanvas()

      this.projection = geoOrthographic()
        .scale(this.scale)
        .translate([this.width / 2, this.height / 2])
        .precision(0.8)

      this.path = geoPath()
        .projection(this.projection)
        .context(this.context)
      // grids for the projection
      this.backGrid = geoGraticule()
      this.frontGrid = geoGraticule()

      // rotate projection to the inital coordinates
      this.rotate(this.coordinates)
    },
    rotate: function (coordinates, oldCoordinates) {
      this.$emit('started')

      transition()
        .duration(1300)
        .tween('rotate', function () {
          // 对旋转路径进行补间
          const rotation = interpolate(this.projection.rotate(), coordinates.map(coordinate => -coordinate))

          // 计算坐标间距离
          const pythagoras = (x, y) => {
            return Math.sqrt(Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2))
          }

          // 旋转的距离
          let distance = 30
          if (oldCoordinates) {
            distance = pythagoras(coordinates, oldCoordinates)
          }
          const createScaler = (distance, initialscale) => {
            // 补间尺寸
            const range = Math.pow(distance, 1.1)

            return (time) => (initialscale - range) + (Math.abs(time - 0.5) * range * 2)
          }

          const scaler = createScaler(distance, this.scale)

          return function (t) {
            // apply interpolated rotation at time t
            this.projection.rotate(rotation(t))

            // get scale value at time t
            const scale = scaler(t)

            // redraw rotated globe
            this.draw(t, distance, scale)

            // animation has ended
            if (t === 1) {
              this.$emit('finished')
            }
          }.bind(this)
        }.bind(this))
        .transition()
    },

    draw: function (time, distance, scale) {
      const c = this.context
      const projection = this.projection
      const path = this.path

      time = time || 1
      distance = distance || 0
      scale = scale || this.scale
      // clear the canvas
      c.clearRect(0, 0, this.width, this.height)
      this.projection.scale(scale)

      projection.clipAngle(180)
      // landmass path
      c.fillStyle = '#e4eeee'
      c.beginPath()
      path(this.land)
      c.fill()
      // Backside country borders path
      c.strokeStyle = '#fff'
      c.lineWidth = 0.5
      c.beginPath()
      path(this.borders)
      c.stroke()
      // Backside grid path
      c.strokeStyle = 'rgba(0, 0, 0, 0.05)'
      c.lineWidth = 0.5
      c.beginPath()
      path(this.backGrid)
      c.stroke()

      projection.clipAngle(90)

      for (let i in this.provinces) {
        c.fillStyle = this.colors[i]
        c.beginPath()
        path(this.provinces[i])
        c.fill()
      }

      // Front side borders
      c.strokeStyle = '#fff'
      c.lineWidth = 0.5
      c.beginPath()
      path(this.borders)
      c.stroke()

      // Globe border
      c.strokeStyle = 'rgba(0, 0, 0, 0.1)'
      c.lineWidth = 1
      c.beginPath()
      path({type: 'Sphere'})
      c.stroke()

      // Frontside grid
      c.strokeStyle = 'rgba(0, 0, 0, 0.1)'
      c.lineWidth = 0.5
      c.beginPath()
      path(this.frontGrid)
      c.stroke()

      // create a red circle on each location
      const circle = geoCircle()

      let circles = []
      for (let i in this.locations) {
        let angle = 5
        let j = parseInt(i, 10)
        if (j === this.selected) {
          angle = 5 + ((1 - time) * Math.pow(distance / 10, 1.4))
        }

        circles.push(
          circle
            .radius(angle)
            .center(this.locations[i].coordinates)()
        )
      }
      // console.log(circles)

      c.fillStyle = 'rgba(250, 100, 100, 0.8)'
      c.beginPath()
      path({type: 'GeometryCollection', geometries: circles})
      c.fill()
    }
  }
}
</script>
