
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
