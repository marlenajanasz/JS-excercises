(function(){
	let table = document.querySelector('#myTable');
	let ths = table.querySelectorAll('thead th');
	let trs = table.querySelectorAll('tbody tr');

	function makeArray(nodeList){ //ta funkcja ma służyć zamianie ths w thsArr czyli z obiektu tablicopodobnego w tablicę
		let arr = [];
		for (let i = 0; i<nodeList.length; i++){
			arr.push(nodeList[i]); //przekazujemy tu referencję do elementów nodeList, czyli ths (czyli element to th)-NIE KOPIUJEMY
		}
		return arr;
	}

	function sortBy(e){
		let target = e.target; //czyli th
		let thsArr = makeArray(ths); //tutaj przekazujemy ths jako parametr funkcji makeArray, dzięki czemu thsArr staje sie tablicą;
		let trsArr = makeArray(trs); //czyli można więcej parametrów do 1 funkcji przekazać!
		let index = thsArr.indexOf(target); 
	
		trsArr.sort(function(a,b){
			let tdA = a.children[index].textContent;
			let tdB = b.children[index].textContent;
			
			if(tdA>tdB){
				return -1;
			} else if(tdA<tdB){
				return 1;
			} else{
				return 0;
			}
		})


	}

	for(let i =0; i<ths.length; i++){
		ths[i].addEventListener('click', sortBy)
	}

})();

//czemu a.children to Jan i Dariusz, a b.children to Maria i Jan? a nie odwrotnie np, albo nie pojedynczo rzędy