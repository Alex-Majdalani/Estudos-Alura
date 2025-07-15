// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const lista = ["João", "Juliana", "Caio", "Ana"];
function receberLista() {
  for (let i = 0; i < lista.length; i++) {
    console.log(`Indice: ${i} item: ${lista[i]}`);
  }
}
receberLista(lista);

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const listaNumeros = [10, 20, 30, 40, 50];

function somar(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
console.log(somar(listaNumeros));

//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
const valores = [35, 45, 20, 80, 100, 47, -8];
function menorMaiorValor(array) {
  let maior = array[0];
  let menor = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
    if (array[i] < menor) {
      menor = array[i];
    }
  }
  return `O maior número é ${maior} e o menor número é ${menor}`;
}

console.log(menorMaiorValor(valores));

//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
