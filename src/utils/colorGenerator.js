export function colorGenerator(str) {
    var sum = 0;
	
	for(var i in str){
		sum += str.charCodeAt(i);
	}
	var r = ~~(('0.'+Math.sin(sum+1).toString().substr(6))*256);
	var g = ~~(('0.'+Math.sin(sum+2).toString().substr(6))*256);
	var b = ~~(('0.'+Math.sin(sum+3).toString().substr(6))*256);

	var rgb = "rgb("+r+", "+g+", "+b+")";

	return rgb
	
}