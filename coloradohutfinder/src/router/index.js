import Vue from 'vue';
import Router from 'vue-router';
import HutMap from '@/components/HutMap';
import HutForm from '@/components/HutForm';
import Sidebar from '@/components/Sidebar';
import Dialog from '@/components/Dialog';
import Hut from '@/components/Hut';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HutMap',
      component: HutMap
    },
    {
      path: '/edithuts',
      name: 'HutForm',
      component: HutForm
    },
    {
      path: '/hutselector',
      name: 'HutMap',
      component: HutMap,
      Sidebar
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog, HutMap
    },
    {
      path: '/:id',
      component: Hut 
    }
  ]
});
