
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
