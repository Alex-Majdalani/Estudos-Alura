const ListaDebotoes = document.querySelectorAll("input[type=button]");

const localTel = document.querySelector("input[type=tel]");

for (let indice = 0; indice < ListaDebotoes.length; indice++) {
  const botao = ListaDebotoes[indice];

  botao.onclick = function () {
    localTel.value = localTel.value + botao.value;
  };
}
