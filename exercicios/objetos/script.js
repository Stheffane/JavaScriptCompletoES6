//Exercicio 1 e 2
var pessoa = {
    nome: 'Stheffane',
    sobrenome: 'Nunes',
    idade: 22,
    altura: 1.78,

    nomeCpmpleto() {
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

console.log(pessoa.nomeCpmpleto());

//Exercicio 3
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}
console.log(carro);

carro.preco = 3000

console.log(carro)

//Exercicio 4
var cachorro = {
    raça: 'Labrador',
    pelagem: 'preta',
    anos: 10,

    tarefa(alguem) {
        if (alguem == 'homem') return 'LATIR!!!'
        else return 'Abanar o rabo'
    }
}

console.log(cachorro.tarefa('homem'));
