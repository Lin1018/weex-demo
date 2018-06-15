import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Web from '@/components/web/web.vue'
import Picker from '@/components/picker/picker.vue'
import Refresh from '@/components/refresh/refresh.vue'
import Webview from '@/components/webview/webview.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path: '/home',
    	name: 'Home',
    	component: Home
    },
    {
    	path: '/web',
    	name: 'web',
    	component: Web
    },
    {
    	path: '/picker',
    	name: 'Picker',
    	component: Picker
    },
    {
    	path: '/refresh',
    	name: 'Refresh',
    	component: Refresh
    }
  ]
})
