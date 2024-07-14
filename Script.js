

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
    
    


// Classes
// Criando metodos e propriedades para objetos atrave das classes

class Product {
    constructor(name, price){
        this,name = name
        this.price = price
    }
}
const socks = new Product("Meia Branca", 10.99);
console.log(socks.name);
console.log(socks.price);

const shirt = new Product("Camisa Preta", 21.99);
console.log(shirt.name);
console.log(shirt.price);

//retornando detalhes do produto
class Product {
    constructor(name, price){
        this,name = name
        this.price = price
    }
    productDetails(){
        return `O nome do produto e ${this.name} e o preco e R$ ${this.price}`
    }   
}
console.log(shirt.productDetails());




// Heranca
// criando a classe superProduct aproveitando tudo da classe product

class SuperProduct extends Product {
    constructor (name, price, size){
        super(name, price);
        this.size = size
    }
}
    
const tenis = new Superproduct("Tenis Vermelho", 59.90, "42");
console.log(tenis.name);
console.log(tenis.size);

    
class SuperProduct extends Product {
    constructor (name, price, size){
        super(name, price);
        this.size = size
    }
    showAdjective(adjective){
        return `O ${this.name} e muito ${adjective}`
    }
}
const teniss = new Superproduct("Tenis Vermelho", 59.90, "42");

//metodo static
class SuperProduct extends Product {
    constructor (name, price, size){
        super(name, price);
        this.size = size
    }
    
    //static
    static sayHello(){
        console.log("Hello");
    }
}
SuperProduct.sayHello();
    


// DOM - Document Object Model

//selecao de elementos
const title = document.getElementById("title") //#title
console.log(title);

//query selector
const sameTitle = document.querySelector("#title");
console.log(sameTitle);

//selecionando varios elementos com a mesma classe
const texts = document.querySelectorAll(".text");
console.log(texts);
console.log(texts[1]);

texts.forEach((text) => {
    console.log(text.textContent)
    //manipulacao basica de text
    console.log(text.textContent.toUpperCase()) //texto em caixa alta
})


// Manipulacao de elementos
//mudar o texto
title.textContent = "Mudei o Texto."
//mudar o conteudo do html-nesse caso tem um texto no html
texts[0].innerHTML = "<span>alteramos o HTML deste elemento</span>"
//mudar o stylo do elemento
texts[1].style.backgroundColor = "red" //background-color: red;
//adicionar uma classe no elemento
texts[2].classList.add("my-class") //adiciona o my-class no elemento
//remover uma classe no elemento
texts[2].classList.remove("text") //remove o text do elemento
//remover um elemento do html
texts[3].remove();


// Eventos
//adicionando eventos a elementos do html
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (){
    console.log("Clicou!")
})

btn.addEventListener("click", function (){
    texts[2].style.color = "blue";
})

