//5. Massivdə yerləşən ədələri böyükdən kiçiyə və kiçikdən böyüyə çeşidliyin.

function boyukdenKiciye(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  function kicikdenBoyuye(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  }   
  const numbers = [52, 2, 9, 1, 5, 6];

  kicikdenBoyuye(numbers);
  console.log("Kicikden Boyuye", numbers)
  
  boyukdenKiciye(numbers);
  console.log("BOYUKDEN KICIYE:", numbers);