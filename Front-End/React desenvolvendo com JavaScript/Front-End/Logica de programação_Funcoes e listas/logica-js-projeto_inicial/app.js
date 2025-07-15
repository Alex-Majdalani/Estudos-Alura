// Criar uma função que exibe "Olá, mundo!" no console.
function escrevaNoConsole() {
  console.log("Olá mundo!!");
}
escrevaNoConsole();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function nomeNoConsole(nome) {
  console.log(`Olá, ${nome}`);
}

let nome = nomeNoConsole("Alexnaldo");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calculaDobro(numero) {
  return numero * 2;
}

let calculo = calculaDobro(25);
console.log(calculo);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(a, b, c) {
  return (a + b + c) / 3;
}
let calculaMedia = media(10, 20, 30);
console.log(calculaMedia);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
let maiorQue = maiorNumero(10, 30);
console.log(maiorQue);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacao(numero) {
  return numero * numero;
}

let resultadoMult = multiplicacao(20);
console.log(resultadoMult);
