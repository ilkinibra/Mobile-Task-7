//7. Massivdə yerləşən elementləri reverse edən funksiya yazın.

function reverse(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverse(originalArray);
  
  console.log(reversedArray);
  