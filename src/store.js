import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    appLoaded: false,
    selected: 0,
    preSelected: 0,
    showMenu: false,
    shareImageUrl: '',
    shareModalName: '',
    locations: [
      {
        id: 0,
        name: 'Tokyo',
        slug: 'tokyo',
        coordinates: [139.7328635, 35.6584421],
        topoindex: 82,
        utcOffsetHours: 9
      }, {
        id: 1,
        name: 'Helsinki',
        slug: 'helsinki',
        coordinates: [24.9490830, 60.1697530],
        topoindex: 52,
        utcOffsetHours: 2 // TODO in the summer it's 3!!
      }, {
        id: 2,
        name: 'New York',
        slug: 'newyork',
        coordinates: [-73.9938438, 40.7406905],
        topoindex: 168,
        utcOffsetHours: -5 // -4 in the summer..
      }, {
        id: 3,
        name: 'Amsterdam',
        slug: 'amsterdam',
        coordinates: [4.9040238, 52.3650691],
        topoindex: 117,
        utcOffsetHours: 1 // I guess I need some api for this..
      }, {
        id: 4,
        name: 'Dubai',
        slug: 'dubai',
        coordinates: [55.1562243, 25.092535],
        topoindex: 3,
        utcOffsetHours: 4
      }
    ]
  },
  getters: {
    currentLocation (state) {
      if (state.locations[state.selected] === void 0) {
        return {id: 0, name: 'undefined'}
      }
      return state.locations[state.selected]
    }
  },
  mutations: {
    setPreselected (state, index) {
      state.preSelected = index
    },
    toggleMenu (state) {
      state.showMenu = !state.showMenu
    },
    hideMenu (state) {
      state.showMenu = false
    },
    setShareImageUrl (state, string) {
      state.shareImageUrl = string
    },
    setShareModalName (state, string) {
      state.shareModalName = string
    }
  }
})

export default store
