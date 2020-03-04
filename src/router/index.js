import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [{
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: '首页', icon: 'el-icon-location' }
      }]
    },

    {
      path: '/example',
      component: Layout,
      redirect: '/example/table',
      name: 'Example',
      meta: { title: '案例', icon: 'el-icon-menu' },
      children: [
        {
          path: 'table',
          name: 'Table',
          meta: { title: '表格', icon: 'el-icon-document' }
        },
        {
          path: 'tree',
          name: 'Tree',
          meta: { title: '树', icon: 'el-icon-setting' }
        }
      ]
    }
  ]
})
