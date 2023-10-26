//4. Massivdə yerləşən bütün tək və cüt ədədlərı ayrı massivlərə yazın. Məsələn [1,2,3,4,5] -> [1,3,5] və [2,4].

function oddAndEven(arr) {
    const oddNumbers = [];
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      } 
      else {
        oddNumbers.push(arr[i]);
      }
    }
    return [oddNumbers, evenNumbers];
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const [oddArray, evenArray] = oddAndEven(numbers);
  
  console.log("Tek ededler:", oddArray);
  console.log("Cut ededler:", evenArray);