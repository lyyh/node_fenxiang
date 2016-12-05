var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',function(req,res,next){
	console.log(213)
	res.sendFile('index.html');
})
router.get('/getData',function(req,res,next){
	res.send("{\"name\":\"liuyanhao\"}");
})
module.exports = router;
