// Utilize o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Para isso lembre de usar uma função callback.
const arrayNums = [1, 2, 3, 4];

const arrayAtualizado = arrayNums.map((numeros) => {
  return numeros * 10;
});
console.log(arrayAtualizado);
