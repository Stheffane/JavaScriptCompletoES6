//~Função construtora
function Pessoas(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() { //ao criar dessa forma, todas vez que criar um obj novo essa func será cria novamente
        return 'abraçou'
    }
    this.andar = function() { //primeiro procura o método no objeto, se não existir ele irá procurar no prototype
        return 'andou pelo objeto'
    }
}

Pessoas.prototype.andar = function() {
    return this.nome + ' Pessoa andou';
}

Pessoas.prototype.nadar = function() {
    return this.nome + ' Pessoa nadou';
}

const sthe = new Pessoas('stheffane', '25')

console.log(Pessoa.prototype); //função
console.log(sthe.prototype) // = undefiend pq é objeto

//----------------------------------------------------------------------

const lista = document.querySelectorAll('li');

const listaArray = Array.from(lista) //OU Array.prototype.slice.call(lista);

const Carro = {
    marca: 'ford',
    preco: 2000,
    andar() {
        return true;
    }
}

Carro //objeto
Carro.marca //String
Carro.preco //Number
Carro.andar() //Boolean
Carro.andar //Function

// ---------------------------------------------------------------------

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
// Crie um método no protótipo que retorne o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

const sofia = new Pessoa('Sofia', 'Alvez', 10);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
NodeList.prototype
HTMLCollection.prototype
Document.prototype

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');
li; //-> HTMLElement
li.click; //-> function
li.innerText; //-> string
li.value; //-> number
li.hidden; //-> boolean
li.offsetLeft; //-> number
li.click(); //-> undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name //-> string