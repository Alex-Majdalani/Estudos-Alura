//Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
const arrayEsparso = [];
arrayEsparso[1] = "Elemento 1";
arrayEsparso[3] = "Elemento 3";
arrayEsparso[7] = "Elemento 7";
console.log(arrayEsparso);
console.log(arrayEsparso.length);

//Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
const vida = [
  "trabalho",
  "religião",
  "construção",
  "crescimento",
  "dedicação",
  "felicidade",
];
console.log("Array antes da alteração: ", vida);
// Atribuindo um novo valor para a primeira posição (indice 0):
vida[0] = "Família";
// Exibindo o array depois da alteração:
console.log("Meu array depois da alteração: ", vida);

//Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
const meuArray = [];
meuArray.push(10, 20, 30);
console.log(meuArray);
//Substituindo o 1º elemento (indice 0) pelo dobro do seu valor atual:
meuArray[0] = meuArray[0] * 2;
console.log("Substituindo indice 0 pelo dobro do seu valor:", meuArray);

//Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
const meuPet = [];
meuPet.push("Duke", "Manu", "Jack");
console.log("os animais que deram entrada foram: ", meuPet);
meuPet.pop();
meuPet.pop();
meuPet.pop();
console.log("A lista deve aparecer vazia: ", meuPet);
