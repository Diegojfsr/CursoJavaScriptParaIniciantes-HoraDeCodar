
// JSON - JavaScript Object Notation

const dog = {
    name: "shark",
    age: 10,
}
    
const json = JSON.stringify(dog);
console.log(json);
const obj = JSON.parse(json);
console.log(obj);
const jsonErrado = '{"name":"Teste", "surname":"Testando"}'

//convertendo o json
const obj2 = JSON.parse(jsonErrado);
console.log(obj2);
