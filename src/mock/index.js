import Mock from 'mockjs'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
	if(this.custom.xhr) {
		this.custom.xhr.withCredentials = this.withCredentials || false
	}
	this.proxy_send(...arguments)
}



const userMap = [{
	userName: 'admin',
	pwd: '123'
}, {
	userName: 'zxl',
	pwd: '123'
}]

let loginByUsername = function(req) {
	let obj = {};
	var body = JSON.parse(req.body);
	var userName = body.userName;
	var pwd = body.pwd;
	if(!userName || !pwd) {
		obj.msg = '请输入用户名或密码';
		obj.code = 400;
	} else {
		for(let i in userMap) {
			if(userName === userMap[i].userName) {
				if(pwd === userMap[i].pwd) {
					obj.msg = 'success';
					obj.code = 200;
					break;
				} else {
					obj.msg = '密码错误';
					obj.code = 400;
					break;
				}
			}
		}
		if(!obj.msg) {
			obj.msg = '用户不存在';
			obj.code = 400;
		}
	}

	return obj;
}

// 登录相关
Mock.mock('/login/login', 'post', loginByUsername)

export default Mock