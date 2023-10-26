//4. person adlı, sahələri name, surname olan obyektdə getFullName adlı bir funskiya yaradıb name + surname qaytarsın.

const person = {
    name : "ILKIN",
    surname : "IBRAHIMOV"
}
 function getFullName(name,surname) {
    return person.name + ' ' + person.surname;
}
  
  console.log(getFullName()); 