//Crie uma função para verificar se um valor é verdadeiro
console.log('Exercício 1: ' + valida('oi'));

function valida(valor) {
    return !!valor
}

//Crie uma função matématica que retorne o perímetro de um quadrado
console.log('Exercício 2: ' + pmtQuadrado(10));

function pmtQuadrado(lados) {
    return lados * 4
}

//Crie uma função que retorna seu nome completo
console.log('Exercício 3: ' + nomeCompleto('Parcy', 'Jackson'));

function nomeCompleto(nome, sobrenome) {
    var _nomeCompleto = `${nome} ${sobrenome}`;

    return _nomeCompleto;
}

//Crie uma função que verifique se um numero é par
console.log('Exercício 4: ' + imparOuPar(3));

function imparOuPar(n) {
    if ( n % 2 != 0) {
        return 'Ímpar'
    }
    else return 'Par'
}

//Crie um função que retorna o tipo de dado do arqumento passado nela typeof
console.log('Exercício 5: ' + tipoDeDado(true));

function tipoDeDado (n) {
    return typeof n;
}

//Utilizando o addEventListener exiba seu nome quando o evento 'scroll' ocorrer
addEventListener('scroll ', function(){
    console.log('Sthéffane Nunes')
})