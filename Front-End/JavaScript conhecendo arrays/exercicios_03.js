// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function receberLista() {
  for (let i = 0; i < array.length; i++) {
    console.log(i + " " + array[i]);
  }
}
const array = ["João", "Juliana", "Caio", "Ana"];
receberLista(array);
