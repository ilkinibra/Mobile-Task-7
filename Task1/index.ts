//3. Massivdə yerləşən ən böyük və ən kiçik ədədi tapın.
function findLargestSmallest(arr) {
 
    let largest = arr[0];
    let smallest = arr[0];


    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return {
      largest: largest,
      smallest: smallest
    };
  }
  const numbers = [5, 3, 21, 12, 7, 2];
  const result = findLargestSmallest(numbers);
  
  console.log("Kicik eded:", result.largest);
  console.log("Boyuk eded:", result.smallest);