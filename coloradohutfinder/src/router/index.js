import Vue from 'vue';
import Router from 'vue-router';
import HutMap from '@/components/HutMap';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HutMap',
      component: HutMap
    }
    // {
    //   path: '/infowindow',
    //   name: 'InfoWindow',
    //   component: InfoWindow
    // }
  ]
});
