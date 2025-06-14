//Crie uma função que receba dois arrays e os concatene em um único array
function imob(array1, array2) {
  return array1.concat(array2);
}
const array1 = ["apto", "casa", "sitio"];
const array2 = ["venda", "locação"];

const resultado = imob(array1, array2);
console.log(resultado);

//Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, numeros[7]);
console.log(parteNumeros);

//3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
const frutas = ["Maçã", "Banana", "Laranja", "Limão", "Abacaxi"];
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
frutas.splice(2, 2, "Kiwi", "Pêssego");
console.log(frutas);

//Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
const menuPrincipal = ["Bife acebolado", "macarronada", "churrasco"];
const menuDeSobremesas = ["brigadeiro", "sorvete", "bolo"];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);

/*Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

Dicas:

comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
você pode resolver usando um for dentro de outro for.*/

//Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
