
function showName(number){
	if(number[0]==='4' && number.length === 16 || number.length === 13){
	console.log('to visa!');
	} 
	else if(number[0]==='3' && number.length === 15){
	console.log('to amex!')
	}
	else if((number[0]==='5' && number.length === 16) || (number[0]==='2' && number.length === 16)){
	console.log('to master card!')
	}
	else {
	console.log('to żadna z powyższych')
	}
}

//z liczbami nie działa - przy liczbach nie można odwołać się do numeru indeksu?

