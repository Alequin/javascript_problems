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

	// findDuplicates: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
