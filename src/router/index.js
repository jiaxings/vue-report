import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Result from '@/components/Result'
import Share from '@/components/Share'
import Ancestry from '@/components/ancestry'
import Earth from '@/components/Earth'
import AncestryShort from '@/components/AncestryShort'
// import Report from '@/components/Report'
// import Sample from '@/components/Sample'
// import NewReport from '@/components/NewReport'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    },
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
    }
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
