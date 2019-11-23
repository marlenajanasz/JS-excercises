
let doSearch = function(array, targetValue){
	let min = 0;
	let max = array.length-1;
	let guess;
		while(array.length){
			guess = (min+max)/2;
			if(array[guess] === targetValue){
				return guess
			}
			else if(array[guess]<tagretValue){
				return min = guess +1
			}
			else if(array[guess]<tagretValue){
				return max = guess-1
			}
			//czy tu to powinno być? wg mnie wewnątrz pętli while:
			else if (max < min){
				return -1
			}
		
}


const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let result = doSearch(primes, 73);