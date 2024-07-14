
// Metodos de manipulacao de arrays

const list = ["a", "b", "c", "d", "e"];

//pegar a quantidade de elementos em uma lista
console.log(list.length);

//pegar um elemento expecifico pelo indice da lista
//indice 2 pega a letra c, pois os indices comecam em 0
console.log(list[2]);  


//adicionar elemento a lista
//adiciona o elemento f no indice 5 da lista
list[5] = "f";
console.log(list);


//pegar o utimo elemento da lista
console.log(list[list.length -1]);


//adicionar um elemento no fim da lista
list.push("g");
console.log(list);

//remover um elemento no final da lista
list.pop();
console.log(list);

//remover um elemento no inicio da lista
list.shift();
console.log(list);


//adicionar um elemento no inicio da lista

list.unshift("a");
console.log(list);
