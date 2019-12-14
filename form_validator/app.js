(function(){
	let form = document.querySelector("#myForm");
	let fields = form.querySelectorAll("[data-error]");

	function isNotEmpty(field){
		return field.value !== "";  
	}

	function isAtLeast(field, min){
		return field.value.length >= min;
	}

	function isEmail(field){
		return field.value.indexOf("@") !== -1;
	}

	form.addEventListener("submit", function(e){   
		e.preventDefault();

		let errors = [];

		for(let i = 0; i<fields.length; i++){
			let field = fields[i];
			let isValid = false;
			
			if(field.type === "text"){
				isValid = isNotEmpty(field); 
			} 
			else if(field.type === "email"){
				isValid = isEmail(field);
			} 
			else if(field.type === "select-one"){ 
				isValid = isNotEmpty(field);
			} 
			else if(field.type === "textarea"){
				isValid = isAtLeast(field, 2);
			}
		}
			if(!isValid){ 
				errors.push(field.dataset.error);
			}
			
			
	})

})()

/* PYTANIA
-czy w tym zadaniu (e) w funkcji anonimowej jest tylko po to aby wykonać preventDefault?
-czy ify z pętli i funkcje isNotEmpty, isAtLeast i isEmail działają w poniższy sposób?
	1. field jest przekazywany do tych trzech funkcji
	2. jeśli (na przykładzie funkcji isNotEmpty) pole formularza jest
	wypełnione (field.value !=="") to funkcja zwraca true
	3. jeśli jest puste to funkcja zwraca false 
	4. w zależności od wyniku isValid jest true/false
	5. pętla sprawdza po kolei każde pole (name, email, select i textarea) i dla każdego po kolei sprawdza czy isValid jest false
	6. jeśli jest false to dodaje to tablicy wartość "data-error"
-!!!coś z czym zawsze mam problem czyli if(!isValid) - zwykle żeby warunek się wykonał musi być if(true), czyli isValid w instrukcjach
warunkowych musiałoby być false aby !isValid było true. a jest false gdy np pole jest puste więc wtedy dodaje do tablicy - am I right?:)
*/ 