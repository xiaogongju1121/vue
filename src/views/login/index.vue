<template>
	<div>
		<el-form ref="form" :model="user" label-width="80px">
			<el-form-item label="用户名">
				<el-input v-model="user.userName" clearable type="text">
				</el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="user.pwd" clearable type="password">
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'Login',
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
		}
	}
</script>

<style>

</style>