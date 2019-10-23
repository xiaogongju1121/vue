<template>
	<div class="app-wrapper">
		<el-container>
			<el-header class="header">
				<navbar/>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<sidebar class="sidebar-container" />
				</el-aside>
				<el-container>
					<el-main>
						<app-main/>
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import { Navbar, Sidebar, AppMain } from './components'

	export default {
		name: 'Layout',
		components: {
			Navbar,
			Sidebar,
			AppMain
		},
		methods: {

		}
	}
</script>

<style>
	body,html{
		margin: 0;
		padding: 0;
		background: #FFFFFF;
	}
	.header{
		background: #303133;
		width: 100%;
	}
</style>