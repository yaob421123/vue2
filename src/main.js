import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import store from './stroe/'


import App from './App'

import NotFound from './components/404/NotFound'
import Index from './components/index/Index'


Vue.use(VueRouter);
Vue.use(VueResource);



const router = new VueRouter({
	routes: [{
		path: '/',
		component: Index
	},{
		path:'*',
		component:NotFound
	}]
})



const app = new Vue({
  	router,
  	store,
  	render: h => h(App)
}).$mount('#app')

