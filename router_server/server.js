//实现代码分离，将主应用与应用程序的各个部分分离成各个文件(模块)
//路由的作用:根据请求的URL、资源路径、请求参数等这些数据来执行相应的\逻辑
var http = require('http'),
	url  = require('url');
