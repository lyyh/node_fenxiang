var http = require('http'),
	url  = require('url');

//创建node服务器
// createServer 。这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
//向createServer 方法传递了一个函数，无论何时收到请求，函数都会被调用，可以理解为一个处理请求的地方
//回调:我们给某个方法传递了一个函数，这个方法在有相应事件发生时调用这个函数来进行。
http.createServer(function(req,res){
	var callbackName = url.parse(req.url,true).query.callback;
	res.write(callbackName + "({\"name\":\"lyh\"})");
	res.end();
}).listen(8888);
