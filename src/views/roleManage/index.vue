<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item>系统管理</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/roleManage/index' }">角色管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="searchDiv">
			<el-row>
				<el-col :span="18">
					<el-col :span="6">
						<el-input v-model="search.roleName" placeholder="请输入角色名"></el-input>
					</el-col>
					<el-col :span="6">
						<el-input v-model="search.roleName" placeholder="请输入角色名"></el-input>
					</el-col>
				</el-col>
				<el-col :span="6">
					<el-button type="primary">新增</el-button>
					<el-button type="primary">搜索</el-button>
				</el-col>
			</el-row>
		</div>
		<div class="table_content">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="date" label="日期" width="180">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="address" label="地址">
				</el-table-column>
			</el-table>
		</div>
		<div class="pages">
			<el-pagination background layout="prev, pager, next" :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				search: {
					roleName: ''
				},
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.searchDiv {
		margin: 15px 0;
	}
	
	.el-input {
		width: 95%;
	}
	
	.pages {
		text-align: right;
		margin: 15px 0;
	}
</style>