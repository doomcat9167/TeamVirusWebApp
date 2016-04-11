//random.js

function randomInt(low, high){
	var rand, range, result;
	rand = Math.random();
	range = high - low + 1
	result = Math.floor(rand * range) + low;
	return result;
}
