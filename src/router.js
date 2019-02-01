import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Info from './components/Info.vue';

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/info', name: 'Info', component: Info}
  ]
})