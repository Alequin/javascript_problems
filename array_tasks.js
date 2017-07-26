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
				if(result.includes(arr[j])){
					break;
				}else
				if(arr[j] === arr[k]){
					result.push(arr[j]);
				}
			}
		}
		return result;
	},

	removeAndClone: function (arr, valueToRemove) {
		var length = arr.length;
		for(var j=length-1; j>=0; j--){
			if(arr[j] === valueToRemove ){
				arr.splice(j, 1);
			}
		}
		return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var result = [];
		for(var j in arr){
			if(arr[j] == itemToFind){
				result.push(j);
			}
		}
		return result;
	},

	sumOfAllEvenNumbersSquared: function (arr) {

		var result = arr.reduce(function(total, num){
			if(num % 2 == 0){
				return total + (num*num);
			}else{
				return total;
			}
		}, 0);

		return result;
	}

}

module.exports = arrayTasks
