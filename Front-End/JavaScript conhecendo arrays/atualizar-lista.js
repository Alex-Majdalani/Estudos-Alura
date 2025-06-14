const listaEstudantes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

listaEstudantes.splice(1, 2, "Rodrigo"); // 1º parametro = (indice) onde inicia, 2º parametro = (indice) até onde será a exclusão, 3º parametro = qual a substituição
console.log(listaEstudantes);

/* explicação:
array.splice(índice, quantidadeParaRemover, item1, item2, ...)

índice: posição onde começa.
quantidadeParaRemover: quantos itens serão removidos.
item1, item2...: itens que serão inseridos nessa posição*/
