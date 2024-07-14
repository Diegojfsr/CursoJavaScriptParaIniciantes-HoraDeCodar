
// Funcoes

function minhaFuncao(){
    console.log("Ola Funcao");
}
minhaFuncao();

//funcoes com argumentos - args
function nomeCompleto(nome, sobrenome){
    console.log(`O nome completo e: ${nome} ${sobrenome}`);
}
nomeCompleto("Diego", "Jeff");


// funcoes com retorno - retun
function nomeCompleto(nome, sobrenome){
    retun `O nome completo e: ${nome} ${sobrenome}`
}

console.log(nomeCompleto("Diego", "Jeff"))
console.log(nomeCompleto("Joao", "Azevedo"))

const primeiroNome = "Maria";
const segundoNome = "Matos";

//const meuNomeCompleto = nomeCompleto("Maria", "Matos")
const meuNomeCompleto = nomeCompleto(primeiroNome, segundoNome)
console.log(meuNomeCompleto)
    


// arrow functions

const myArrowFunction = (a, b) => {
    return a + b;
}
console.log(myArrowFunction(2, 5));

const sumAlll = [10, 20, 30, 40, 50].reduce((total, number) => {
    return total + number
})
console.log(sumAlll);


//simplificando ainda mais a arrow function
const mySimpleArrowFunction = (a, b) => a + b;
console.log(mySimplearrowFunction(5, 5));
