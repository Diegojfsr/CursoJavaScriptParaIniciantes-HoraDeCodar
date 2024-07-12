
// Tipo de dados

// string
const nome = "Diego";
console.log(nome);
// typeof - verifica o tipo de dados
console.log(typeof nome);

// number
const shirtsQty = 4;
console.log(shirtsQty);
console.log(typeof shirtsQty);

// number
const decimal= 12.4;
console.log(decimal);
console.log(typeof decimal);

// boleans
const isApproved = false // true ou false
console.log(isApproved);
console.log(typeof isApproved);

// object
let surname = null;
console.log(surname);
console.log(typeof surname);

// muda o tipo surname para string
surname = "Jeff";
console.log(surname);
console.log(typeof surname);


// underfined quando ano indicamos um tipo de dao para uma variavel
let age;
console.log(age);
console.log(typeof age);

// agora temos o ajuste do tipo de dados da variavel para o tipo number
age = 30;
console.log(age);
console.log(typeof age);



// arrays ou listas - geralmente sao do mesmo tipo, ex:strings, numbers...
// arrays tambem sao considerados objetos
const linguagens = ["JavaScript", "PHP", "Python"];
console.log(linguagens);
console.log(typeof linguagens);

// objetos - object literals pois nao sao declarado em classes
// costuman variar o tipo de dados
const user = {
email:"diego@teste.com",
password: "teste",
age:30
}
console.log(user);
console.log(typeof user);
