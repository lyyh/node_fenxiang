var http = require('http');

//监听服务器的request事件
http.createServer(function(req,res){
	// res.writeHead('Allow0')
	var postData = '';
	req.on('data',function(chunk){
		postData += chunk;
	})
	req.on('end',function(){
		console.log(postData)
		res.write(postData)
	})
}).listen(8001)
console.log('listening port is',8001)