const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//1ª Expressão: executa apenas uma vez (let indice = 0)
//2ª Expressão: condição de execução (indice < notas.length)
//3ª Expressão: executada sempre ao final do bloco (indice++)

for (let indice = 0; indice < notas.length; indice++) {
  console.log(indice, notas[indice]);
}
