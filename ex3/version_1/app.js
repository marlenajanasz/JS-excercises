let array = ["bananab", "ananas", "kajak", "jakaja"];
let array2 = [];
let output_array = [];

function showArray(){

	for (let i = 0; i < array.length; i++){

		array2.push((array[i].split('').reverse().join('')));

			if (array[i] === array2[i]){
				//console.log('true');
				output_array.push('true');
			}
			else if (array[i] !== array2[i]) {
				//console.log('false')
				output_array.push('false');
				
			}
	}
	console.log(output_array);
}

showArray(array);
