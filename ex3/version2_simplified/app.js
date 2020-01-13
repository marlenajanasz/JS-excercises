let array = ["bananab", "ananas", "kajak", "jakaja"];
let array2 = [];
let output_array = [];

function showArray(){

	for (let i = 0; i < array.length; i++){

		array2.push((array[i].split('').reverse().join('')));

				output_array.push(array[i] === array2[i]);		
				
	}
	console.log(output_array);
}

showArray(array);
