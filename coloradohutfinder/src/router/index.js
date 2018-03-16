import Vue from 'vue'
import Router from 'vue-router'
import HutMap from '@/components/HutMap'
import HutForm from '@/components/HutForm'
import Sidebar from '@/components/Sidebar'
import Dialog from '@/components/Dialog'
import EditHut from '@/components/EditHut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HutMap',
      component: HutMap
    },
    {
      path: '/createhut',
      name: 'HutForm',
      component: HutForm
    },
    {
      path: '/edithuts',
      name: 'EditHut',
      component: EditHut,
      props: true
    },
    {
      path: '/hutselector',
      name: 'SelectHuts',
      component: HutMap,
      Sidebar
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog,
      HutMap
    }
  ]
})
