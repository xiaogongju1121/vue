import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {}
	},
	mutations: {
		setUserInfo: function(state, userInfo) {
			state.userInfo = userInfo
		}
	},
	getters: {}
})

export default store