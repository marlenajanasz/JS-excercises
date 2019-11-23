
function showName(number){
  if(('51'<=number.substring(0,2)<='55' && number.length == 16) || ('2221'<=number.substring(0,4)<='2720' && number.length == 16)){
	console.log('to master card!');
	}
  else if((number.length == 13 || number.length == 16) && number[0] === '4'){
	console.log('to visa!');
	} 
  else if((number.substring(0,2)==='34' || number.substring(0,2)==='37') && number.length == 15){
	console.log('to amex!')
	}
  else {console.log('to inna karta')};
};

//visa z 16 cyframi nie działa

