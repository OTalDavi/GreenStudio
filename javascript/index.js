const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Carregar tema salvo no localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // Salvar preferência no localStorage
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  function trocarImagem() {
  // Seleciona o elemento da imagem pelo seu ID
  var imagem = document.getElementById("claro");
  // Altera o atributo src para o caminho da nova imagem
  imagem.src = "nova_imagem.png";
}
