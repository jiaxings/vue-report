import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Result from '@/components/Result'
// import Share from '@/components/Share'
import Ancestry from '@/components/ancestry'
import Earth from './earth'
import AncestryShort from '@/components/AncestryShort'
import FlatMap from '@/components/FlatMap'
import Details from '@/components/Details'
import Icons from './Icons'
// import Report from '@/components/Report'
// import Sample from '@/components/Sample'
// import NewReport from '@/components/NewReport'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'result',
      component: Result
    },
    {
      path: '/icons',
      name: 'icons',
      component: Icons
    },
    {
      path: '/flat-map',
      name: 'flat-map',
      component: FlatMap
    },
    // {
    //   path: '/share',
    //   name: 'share',
    //   component: Share
    // },
    {
      path: '/earth',
      name: 'earth',
      component: Earth
    },
    {
      path: '/ancestry',
      name: 'ancestry',
      component: Ancestry
    },
    {
      path: '/ancestry-short',
      name: 'ancestry-short',
      component: AncestryShort
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },

    // {
    //   path: '/report',
    //   name: 'Report',
    //   component: Report
    // },
    // {
    //   path: '/sample',
    //   name: 'Sample',
    //   component: Sample
    // },
    // {
    //   path: '/new',
    //   name: 'NewReport',
    //   component: NewReport
    // }
  ]
})

export default router
