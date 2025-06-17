//1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
function listaArray(arr1, arr2, arr3) {
  const novoArray = [...arr1, ...arr2, ...arr3];
}

const arr1 = ["alex", "karla", "laura"];
const arr2 = [35, 34, 1];
const arr3 = ["casa", "apto"];

listaArray();
