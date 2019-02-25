/*//print backwards in array using loop

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//isuniform () starts here
function isUniform(arr){
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}
/// sum of all arrys
function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}
//max sum of array
function max (arr){
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > max){
			max = arr[i];
		}
	 }
	 return max;
	}*/
	/*var locksmith = {
		name: "jhon",
		city: "san diego",
		phone: "619-481-2713",
		price: 50
	}
	locksmith.tool = scantool;*/
	var movies = [
	{
		title: "batman",
		rating: 4.5,
		hasSeenit: true
	},
	{
		title: "all dogs go to heaven",
		rating: 4.0,
		hasSeenit: true
	},
	{
		title: "over the bridge",
		rating: 2.0,
		hasSeenit: false
	}
	]
   movies.forEach(function(movie){
   	var result = "you have ";
   	if (movie.hasSeenit){
   		result += "watched ";
   	}else{
   		result += "not seen ";
   	}
   	result += "\"" + movie.title + "\" - ";
   	result += movie.rating + " stars";
   	console.log(result);
   })