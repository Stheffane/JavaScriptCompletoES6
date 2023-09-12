// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 49',
    },
];

let valorTaxaTotal = 0; 
let valorRecebimentoTotal = 0;
transacoes.forEach(({descricao, valor}) => {
    const valorLimpo = Number(valor.slice(3)); // OU add + antes de uma string que contenha apenas numeros para converter para number

    if (descricao.toLocaleLowerCase().includes('taxa')) {
        valorTaxaTotal += valorLimpo;
    }
    else {
        valorRecebimentoTotal += valorLimpo
    }
})

console.log('total de taxa é: ', valorTaxaTotal);
console.log('total de recebimento é: ', valorRecebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log('Array de string: ', transportes.split(';'));

// Substitua todos os span's por a's
const html = `<ul>
 <li><span>Sobre</span></li>
 <li><span>Produtos</span></li>
 <li><span>Contato</span></li>
 </ul>`;

const novohtml = html.split('li').join('a');
console.log('Altera tag: ', novohtml);

 // Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log('ultimo caracter (forma1): ', frase[frase.length - 1])
console.log('ultimo caracter (forma2): ', frase.charAt(frase.length - 1))
console.log('ultimo caracter (forma3): ', frase.slice(-1))

// Retorne o total de taxas
const transacao = ['Taxa do Banco', ' TAXA DO PÃO', ' taxado mercado', 'depósito Bancário', 'TARIFA especial']
let qtdTaxas = 0;
transacao.forEach((item) => {
  if (item.toLocaleLowerCase().includes('taxa')) {
    qtdTaxas ++;
  }
})
console.log('Quantas taxas há: ', qtdTaxas);