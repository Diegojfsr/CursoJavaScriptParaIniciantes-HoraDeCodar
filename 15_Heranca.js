
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
    