<template>
	<div class="navbar">
		<el-row class="block-col-2">
			<el-col :span="20">
				XXX后台管理系统
			</el-col>
			<el-col :span="4">
				<el-dropdown trigger="click" @command="handleCommand">
					<span class="el-dropdown-link">
        用户名<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>更换密码</el-dropdown-item>
						<el-dropdown-item command="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		components: {},
		methods: {
			handleCommand(command) {
				this[command]();
			},
			logout() {
				this.$router.push({
					path: '/'
				})
			}
		},
		mounted() {}
	}
</script>

<style rel="stylesheet/scss">
	.navbar {
		height: 60px;
		line-height: 60px;
		color: white;
	}
	
	.el-dropdown {
		color: white;
		width: 100%;
		cursor: pointer;
		text-align: right;
	}
</style>