// module.exports = {

// }
function doAdd(a,b){
	return a + b;
}

exports.add = function(a,b) {
	// body...
	return a + b;
}
var sum = function(n){
	return n?n+sum(n-1):0
}
exports.doSum = function(n){
	return sum(n);
}
