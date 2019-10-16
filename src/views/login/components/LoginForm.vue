<template>
	<el-form ref="form" :model="user" label-width="80px">
		<div class="form_line">
			<span class="icon_span">
				<i class="my_icon fa-user"></i>
			</span>
			<el-input class="login_input" v-model="user.userName" placeholder="请输入内容" type='text'></el-input>
		</div>
		<div class="form_line">
			<span class="icon_span">
				<i class="my_icon fa-lock"></i>
			</span>
			<el-input class="login_input" v-model="user.pwd" placeholder="请输入内容" type='password'></el-input>
		</div>
		<div class="mt_25">
			<el-button type="primary" @click="login">登录</el-button>
		</div>
	</el-form>
</template>

<script>
	export default {
		name: 'LoginForm',
		data() {
			return {
				user: {
					userName: '',
					pwd: ''
				}
			}
		},
		methods: {
			login() {
				this.$router.push({ //核心语句
					path: '/home', //跳转的路径
				})
			}
		},
		mounted() {}
	}
</script>

<style>
	@import url("../../../fonts/font/font.css");
	@import url("../../../style/loginForm.css");
</style>