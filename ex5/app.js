let bmi = (height, weight) =>  weight/(height*height); //jak jest w nawiasach.toFixed() = > zamiana na string

bmi(1.55, 65)

//poniżej kod nr 1 - znajdź błąd!
	if (bmi <= 18,5) {
		console.log("masz niedowagę")
	}
	else if (bmi <= 28.5){
		console.log("masz wagę w normie")
	}
	else if (bmi <= 38.5){
		console.log("masz nadwagę")
	}
//kod nr 2, poprawiony
if (bmi <= 18.5) {
		console.log("masz niedowagę")
	}
	else if (bmi <= 28.5){
		console.log("masz wagę w normie")
	}
	else if (bmi <= 38.5){
		console.log("masz nadwagę")
	}
//z funkcją
let result = (bmi) =>{
	if (bmi <= 18.5) {
		console.log("masz niedowagę")
	}
	else if (bmi <= 28.5){
		console.log("masz wagę w normie")
	}
	else if (bmi <= 38.5){
		console.log("masz nadwagę")
	}
}