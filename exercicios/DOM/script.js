//Retorne o url da página atual utilizando o objeto window
const url = window.location.href; //document.URL

alert(`A URL desta página é: ${url}`);

//Selecione o primeiro elemento da página que possua a classe ativo
const elemento = document.querySelector('.ativo');

console.log(elemento);

// Retorne a linguagem do navegador
const idioma = window.navigator.language;

alert(`O idioma desta página é: ${idioma}`)

//Retorne a largura da janela
const larguraTela = window.innerWidth;

alert(`A largura da deta tela é: ${larguraTela}px`)