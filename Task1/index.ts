//5. Parametrdən daxil olan ədədin faktorialını qaytaran funksiya yaradın.

function faktorial(n) {
    if(n===0){
      return 0;
    }
      if (n === 1) {
        return 1;
      } else {
        return n * faktorial(n - 1);
      }
    }
    
    const number = 0;
    const result = faktorial(number);
    console.log(`Eded ${number} faktorialı==>${result}`);