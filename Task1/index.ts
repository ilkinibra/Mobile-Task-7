//6. Obyektin hər hansısa bir sahəsinin olub olmadığını yoxluyan bir funksiya yazın.
const person =
{
    Name: "İlkin",
    Surname: "İbrahimov",
}

function yoxla(obj,key)
{
    return key in obj;
}

console.log(yoxla(person,"Name"));
console.log(yoxla(person,"Age"));