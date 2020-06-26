//Ecercício 1
var brasilGanhouACopaEm = ['1959', '1962', '1970', '1994', '2002'];

//Ecercício 2
brasilGanhouACopaEm.forEach(function(ano){
    console.log(`O Brasil ganhou a copa de ${ano}`);
})

//Ecercício 3
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

frutas.forEach(function(fruta){
    console.log(fruta)
    if (fruta === 'Pera') {
        break
    }
})

//Ecercício 4
var ultimaFruta = frutas[4];//OU var ultimaFruta = frutas[frutas.lenth - 1];

console.log(`A ultima fruta é: ${ultimaFruta}`);
