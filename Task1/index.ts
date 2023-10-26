//2. Massivdə yerləşən bütün ədədlərin cəmini tapın.


let numbers = [1, 2, 3];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
//console.log(numbers[0]);
console.log("Butun ededler cemi: " + sum);