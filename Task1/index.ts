//6. Massivdən false deyimli (undefined, null, false və s.i.) elementləri silib yeni massiv qaytaran funksiya yazın.


function filterElements(arr) {
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  
  const originalArray = [1, null, 2, undefined, 3, false, 4, 5];
  const newArray = filterElements(originalArray);
  
  console.log(newArray); 