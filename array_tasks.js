var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		var front = arr;
		var end = front.splice(index);

		front.push(itemToAdd);
		return front.concat(end);
	},

	square: function (arr) {
		var result = arr.map(function(num){
			return num*num;
		});

		return result;
	},

	sum: function (arr) {
		var result = arr.reduce(function(sum, num){
			return sum + num;
		}, 0);

		return result;
	},

	findDuplicates: function (arr) {
		var result = [];
		arr = arr.sort();

		for(var j=0; j<arr.length; j++){
			for(var k=j+1; k<arr.length; k++){
				if(result.indexOf(arr[j]) == -1 && arr[j] === arr[k]){
					result.push(arr[j]);
				}
			}
		}
		return result;
	},

	// removeAndClone: function (arr, valueToRemove) {
	// 	var length = arr.length;
	// 	for(var j=length-1; j>=0; j--){
	// 		if(arr[j] === valueToRemove ){
	//
	// 		}
	// 	}
	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
