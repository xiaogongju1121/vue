<template>
	<div class="app-wrapper">
		<el-container>
			<el-header>
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
					<el-footer>Footer</el-footer>
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