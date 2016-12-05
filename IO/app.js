var fs = require('fs');
fs.readFile('data.json',function(err,ctx){
	console.log(ctx.toString());
	console.log('读取完成！');
})
console.log('complete')