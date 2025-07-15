const nomes = ["ana julia", "caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toLocaleUpperCase());
console.log(nomesPadronizados);

const aluno = "alexnaldo";
let nomeMaiusculo = "";
for (let i = 0; i < aluno.length; i++) {
  nomeMaiusculo += aluno[i].toUpperCase();
}

console.log(nomeMaiusculo);

const nome1 = "Alexnaldo";
const sobrenome = "Majdalani";
const nomeCompleto = nome1.concat(sobrenome);
console.log(nomeCompleto);

const listaProdutos = [
  "pôster A4",
  "pôster A5",
  "camiseta lisa",
  "camiseta estampada",
  "pin de metal",
  "cartela de adesivos",
];

const listaAtualizada = listaProdutos.map((produto) => {
  return `${produto} - unidade`;
});

console.log(listaAtualizada);
