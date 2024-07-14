
// Metodos de manipulacao de String

const fullName = "Diego Jeff";
//conta o numero de caracteres
console.log(fullName.length);

//separa a string em arra/lista
const stringToArray = fullName.split(' ');

//mudar a case do texto.
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

//encontrar uma palavra em uma string
console.log(fullName.indexOf('jeff'));

//pesquisando por uma string em uma palavra diferente
console.log("adsiahsid" .indexOf("Batisti"));


//estrair parte de uma string, escolho de onde comeca ate onde termina
console.log(fullName.slice(0, 7));
