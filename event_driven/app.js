var http = require('http'),
	url = require('url');

//侦听服务器的request事件
http.createServer(function(req,res){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*"});
	var callbackName = url.parse(req.url,true).query.callback;

	var postData = '';
    req.setEncoding("utf8");

    //侦听请求的data事件
	req.on('data',function(chunk){
		postData += chunk;
	})
	//侦听请求的end事件
	req.on('end',function(){
		console.log(postData);
		res.write(postData);
		res.end();
		// res.end(callbackName+"("+ postData+")");
	})
}).listen(8001)
console.log('listening port is',8001)