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

//Selecionar elementos no DOM
// - retorna como métodos apenas os item e o nome do item
const botao = document.getElementById('btn')
const mesmoBotao = document.getElementsByClassName('ativo')
const tagBotao = document.getElementsByTagName('button')

//Seletor geral único
// - querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
// - retorna mais opções de métodos
const query_botao = document.querySelector('#btn')
const query_mesmoBotao = document.getElementsByClassName('.ativo')
const linkCSS = document.querySelector('[heref^="https://"]')
const primeiroUl = document.querySelector('ul') // não busca dentro do li

//Seletor geral lista
// - querySlectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const queryAll_botao = document.querySelector('button')
const queryAll_mesmoBotao = document.getElementsByClassName('.ativo')
const queryAll_linkCSS = document.querySelector('[heref^="https://"]')
const queryAll_primeiroUl = document.querySelector('ul') // não busca dentro do li