import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/home',
			component: Layout,
			redirect: 'home/index',
			children: [{
				path: 'index',
				component: () =>
					import('@/views/home/index'),
				name: 'home'
			}]
		},
		{
			path: '/userManage',
			component: Layout,
			redirect: 'userManage/index',
			children: [{
				path: 'index',
				component: () =>
					import('@/views/userManage/index'),
				name: 'userManage'
			}]
		},
		{
			path: '/roleManage',
			component: Layout,
			redirect: 'roleManage/index',
			children: [{
				path: 'index',
				component: () =>
					import('@/views/roleManage/index'),
				name: 'roleManage'
			}]
		}
	]
})