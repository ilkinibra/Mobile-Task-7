///7. Ədədlərdən ibarət obyekt yaradın və bütün value-ların cəmini console çıxardın.

const obj ={
    a:3,
    b:2,
    c:5,
    d:35
}
let sum=0;
for(key in obj){
    sum += obj[key];
}
console.log(sum);