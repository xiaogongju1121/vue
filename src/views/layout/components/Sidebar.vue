<template>
	<div>
		<el-aside width="200px">
			<el-menu :default-openeds="['1', '3']">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>首页</template>
					<el-menu-item-group>
						<el-menu-item index="1" @click='go("/home/index")'>首页</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title"><i class="el-icon-message"></i>系统管理</template>
					<el-menu-item-group>
						<el-menu-item index="2-1" @click='go("/userManage/index")'>用户管理</el-menu-item>
						<el-menu-item index="2-2" @click='go("/roleManage/index")'>角色管理</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-aside>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		},
		methods:{
			go(url){
				!(url == this.$route.path) &&
				this.$router.push({ //核心语句
					path: url, //跳转的路径
				})
			}
		}
	}
</script>

<style>
	.el-aside {
		color: #333;
		background: #303133;
	}
	.sidebar-container{
		height: 100%;
		background: #303133;
	}
	.el-menu {
		background: #606266;
	}
	.el-menu *{
		color: whitesmoke !important;
	}
	.el-submenu__title:hover,.el-submenu__title:hover i{
		color: #606266 !important;
	}
	.el-menu-item:focus, .el-menu-item:hover{
		color: #606266 !important;
	}
</style>