
// Objetos

const product = {
    name: "camisa",
    price: 15.99,
    inStock: true,
    sizes: ["P", "M", "G"],
    'Main Color': "Azul",
    }
    
    
    //formas de acessar uma propriedade do objeto
    console.log(product.name);
    console.log(product['name']);
    console.log(product['Main Color']);
    
    
    // destructuring
    //pegar as propriedades price e inStock em product
    const {price, inStock} = product
    console.log(price);
    console.log(inStock);
    
    //esse comando abaixo e o mesmo que o de cima
    //const price = product.price;
    //const inStock = product.instock;
    
    
    //exemplo em array
    //pegando os valores do index n1 e n2 do array list
    const [n1, n2] = list
    console.log(n1);
    console.log(n2);
    
    