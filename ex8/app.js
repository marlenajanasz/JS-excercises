      // 1 sprawdzenie czy jest samymi cyframi
      function onlyNumbers(number) {
          return /^\d+$/.test(number);
      };

      // 2 czy jest odpowiedniej długości
      function canBeNumber(number) {
        if (onlyNumbers(number)) {
          return [13, 15, 16].includes(number.length)
        }
        return false
      }

      // 3 czy to visa
      function canBeVisa(number) {
        if(number.length === 15){
          return false;
        } else if (number[0] === '4'){
          return true;
        }
      }
      //4 czy master card
      function canBeMaster(number) {
        if(number.length === 15 || number.length === 13){
          return false;
        }  else if ('51'<=number.substring(0,2)<='55' || '2221'<=number.substring(0,4)<='2720'){
          return true;
        }
      }
      //5 czy  to american
      function canBeAmerican(number) {
        if(number.length === 16 || number.length === 13){
          return false;
        } else if (number.substring(0,2)==='34' || number.substring(0,2)==='37'){
          return true;
        }
      }
      

      // ta wywołuje się na start 
      function checkCardNumber(number) {
        if (canBeNumber(number)) {
          if (canBeVisa(number)) {
            console.log('To karta Visa')
          }
          else if (canBeMaster(number)) {
            console.log('Master card')
          }
          else if (canBeAmerican(number)) {
            console.log('American Express')
          }
          else {
            console.log('Karty nie rozpoznano')
          }
        }
      }

      checkCardNumber();
