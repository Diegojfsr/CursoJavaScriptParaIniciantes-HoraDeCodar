



// Metodos de array -> repeticao

const names = ["Mateus", "Joao", "Pedro", "Maria"]
names.forEach(function(name){
console.log(`O nome e: ${name}`)
})


//modificar algun dado no array
const modifiedNames = names.map(function(name){
if (name == "Mateus"){
return (name = "Sr.mateus")
} else {
return name
}
})
console.log(modifiedNames);


//filtar valores do array
const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function(number){
return number >= 5;
})
console.log(bigNumbers);


//reduzir o arrai a um elemento
const sumAll = [10, 20, 30, 40, 50].reduce(function(total, number){
return total + number;
})
console.log(sumAll);
