//1- Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const frutas = ["laranja", "maçã", "uva", "abacaxi"];
frutas.forEach((elemento, indice) =>
  console.log(`Indice: ${indice} e valor: ${elemento}`)
);

/*EXPLICAÇÃO 
array.forEach(function(elemento, indice, arrayOriginal) {
   // código a ser executado
});
*/

//2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcaoCallback) {
  return array.map(funcaoCallback);
}

//3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
const valoresNumericos = [1, 7, 10, 20, 50];
const numeroProcurado = 30;
let posicao = -1;

for (let i = 0; i < valoresNumericos.length; i++) {
  if (valoresNumericos[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}

console.log(`Posição do número ${numeroProcurado}: ${posicao}`);
