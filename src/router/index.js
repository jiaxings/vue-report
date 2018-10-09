import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Result from '@/components/Result'
// import Report from '@/components/Report'
// import Sample from '@/components/Sample'
// import NewReport from '@/components/NewReport'

Vue.use(Router)

export default new Router({
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
