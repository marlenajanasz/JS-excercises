let number;
for(let i =0; i<3; i++){
  number = prompt("podaj liczbe");
  if(number >7){
		alert('oceniłeś książkę bardzo dobrze!')
		} 
		else if(number>=5){
		alert('oceniłeś książkę średnio')
		}
		else if(number<5){
		alert('oceniłeś książkę źle!')
		}	
    let opinion = number;  //albo let opinion = [number];
    console.log(opinion);
}
