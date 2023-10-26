//5. Hər hansısa bir obyekt yaradıb onun key və value bir sətrdə console çıxardın. Məsələn: Nəticədə “key: name, value: Cavid”.
const Object1 = { 
    name: "Ilkin" 
};

for (const key in Object1) {
  console.log(`key: ${key}, value: ${Object[key]}`);
}