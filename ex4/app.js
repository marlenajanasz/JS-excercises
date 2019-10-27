for (let i = 0; i<=3; i++){
	function showOpinion(opinion){
		if(opinion >7){
		alert('oceniłeś książkę bardzo dobrze!')
		} 
		else if(opinion>=5){
		alert('oceniłeś książkę średnio')
		}
		else if(opinion<5){
		alert('oceniłeś książkę źle!')
		}	
	}
}

const averageMark = (8+4+6)/3

console.log(`średnia ocena książki to ${averageMark}`);
