// procurar o botao
document
  .querySelector("#add-time")
  // quando clicar no botao
  .addEventListener("click", cloneField);

// executar acao
function cloneField() {
  // duplicar os campos. que campos?
  // cloneNode(true) -> pega o conteudo dentro do nó
  // const -> variavel constante nao muda nessa função
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);

  // pegar os campos. que campos?
  const fields = newFieldContainer.querySelectorAll("input");
  // fields[0].value = "";
  // fields[1].value = "";

  // para cada vampo, limpar
  fields.forEach(function (field) {
    // pegar o field do momento e limpa ele
    field.value = "";
  });

  // colocar na página. onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
