// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro. imc = peso/altura2
function calcImc(peso, altura) {
  let imc = peso / (altura * altura);
  console.log(`Seu índice IMC é ${imc}`);
}
calcImc(80, 1.7);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
/*function calcFatorial (fatorial){
  let fatorial = if ()
}*/

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function cotacaoDolar(valorPossuido) {
  let valorDolarAtual = 4.8;
  let cotacao = valorPossuido * valorDolarAtual;
  console.log(cotacao);
}
cotacaoDolar(100);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetro(altura, largura) {
  let calcArea = altura * largura;
  let calcPerimetro = 2 * altura + 2 * largura;
  console.log(`A área é de ${calcArea} e o perímetro é de ${calcPerimetro}`);
}
areaPerimetro(20, 30);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14. (areaCirc = Pi.r2) (perimetroCir = 2.Pi.r)
function calcCirc(raio) {
  let pi = 3.14;
  let areaCirc = pi * (raio * raio);
  let perimetroCirc = 2 * pi * raio;
  console.log(`A área é ${areaCirc} e o perímetro é ${perimetroCirc}`);
}
calcCirc(10);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuadaDo(numero) {
  let n = numero;
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} X ${n} = ${i * n}`);
  }
}
tabuadaDo(20);
