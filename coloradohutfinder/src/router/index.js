import Vue from 'vue'
import Router from 'vue-router'
import HutMap from '@/components/HutMap'
import HutForm from '@/components/HutForm'
import EditHut from '@/components/EditHut'
import Users from '@/components/Users'

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
      path: '/edithuts/:id',
      name: 'EditHut',
      component: EditHut,
      props: true
    },
    {
      path: '/hutselector',
      name: 'SelectHuts',
      component: HutMap
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
