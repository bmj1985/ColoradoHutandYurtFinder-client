import Vue from 'vue';
import Router from 'vue-router';
import HutMap from '@/components/HutMap';
import Dialog from '@/components/Dialog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HutMap',
      component: HutMap
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    }
  ]
});
