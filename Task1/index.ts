/// 3. Parametrlərdə “Ad” və “Soyad” qəbul edib aralarında boşluğ ilə qaytaran funksiya yazın.

const firstName = 'ILKIN';
const lastName = 'IBRAHIMOV';

function fullName(firstName,lastName){
    return firstName.concat(' ').concat(lastName);
}
console.log(fullName(firstName,lastName));