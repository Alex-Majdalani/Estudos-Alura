const caminhoBt = document.querySelector("#botao");
contador = 0;

caminhoBt.onclick = function () {
  contador++;
  console.log("Contador: " + contador);
};
