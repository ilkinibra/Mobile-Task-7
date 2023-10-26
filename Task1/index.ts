//#hometask #js
//1. Ədədlərdən ibarət olan bir massiv yaradın və onun uzunluğun iki dəfə azaldın.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const halvedArray = numbers.slice(0, Math.ceil(numbers.length / 2));
console.log(halvedArray);