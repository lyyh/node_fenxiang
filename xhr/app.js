var http = require('http'),
	url = require('url'),
	fs = require('fs');

var handlersEvent = {
	indexPageEvent: function(req,res){
		fs.readFile('index.html','utf-8',function(err,ctx){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write(ctx);
			res.end();
		})
	},
	postEvent: function(req,res){
	var postData = '';
	req.on('data',function(chunk){
		postData += chunk;
	})

	req.on('end',function(){
		console.log(postData)
		res.end(postData);
	})
	}
}
var onRequest = function(req,res){
	var pathname = url.parse(req.url).pathname;
		pathname = pathname.replace('/','');

	if(typeof handlersEvent[pathname] == 'function'){

		handlersEvent[pathname](req,res);
	}
}

http.createServer(onRequest).listen(8000);
console.log('服务器启动完成！监听8000端口');