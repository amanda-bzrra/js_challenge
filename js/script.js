

// Desafios Javascript do Sujeito programador


// 1- Cire uma lista de produtos. A lista deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado. Exiba essa lista no console quando abrir o index.html.

let lista = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(lista)


// 2- Mostre no console quantos produtos tem nessa lista.

let quantidadeProdutos = lista.length;

console.log(`A lista possui: ${quantidadeProdutos} produtos`);


// 3- Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.

lista.splice(lista.indexOf("Mouse"), 1);

console.log(lista);


//4- Remova o segundo item da sua lista.

lista.splice(1, 1)
console.log('Produtos: ' + lista)


// 5- Crie uma lista de apenas numeros 1,3,5,7,0,9​. Ordene essa lista do menor para o maior.

let numeros = [1, 3, 5, 7, 0, 9];
let ordenar = numeros.sort();
console.log(ordenar);

// 6- Retire o primeiro numero desta lista.

let excluirPrimeiroNumero = numeros.shift();
console.log(numeros);
console.log(`O número excluido foi: ${excluirPrimeiroNumero}`);


// 7- Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

let inverterNumeros = numeros.reverse();
console.log(inverterNumeros);


// 8- Crie uma string que contenha o dia de hoje, exemplo: let hoje = '20/07/2019';
//Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

let dsataHoje = '17/07/2019';
const [dataDia, dataMes, dataAno] = dsataHoje.split('/');

console.log('Dia: ' + dataDia);
console.log('Mes: ' + dataMes);
console.log('Ano: ' + dataAno);


// #BONUS ->  Interpretei errado o exercicio númeto 8 e criei outros exemplos de trabalhar com datas.

// Exemplo 1:

let diasSemana = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

let mesesAno = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];


let diaHoje = new Date;
let diaSemanaH = diasSemana[diaHoje.getDay()];
let diaDataH = diaHoje.getDate();
let mesH = mesesAno[diaHoje.getMonth()];
let anoH = diaHoje.getFullYear();


console.log(`Hoje é ${diaSemanaH}, ${diaDataH} ${mesH} de ${anoH}`);


//Exemplo 2:

let hoje = new Date;
let dia = hoje.getDate();
let mes = hoje.getMonth() + 1;
let ano = hoje.getFullYear();

console.log(`${dia}/${mes}/${ano}`);

