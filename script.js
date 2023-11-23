function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/logo-rv.png")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/logo-rv.png")
    }
  }

  //Condição do botão

  document.addEventListener("DOMContentLoaded", function() {
    let botaoTrocar = document.getElementById("botaoTrocar")
  
    // Adiciona um ouvinte de evento de clique ao botão
    botaoTrocar.addEventListener("click", function() {
      // Muda o texto do botão para "EM BREVE"
      if (botaoTrocar.textContent === "Nosso Site") {
        botaoTrocar.textContent ="EM BREVE"
      } else {
        botaoTrocar.textContent = "Nosso Site"
      }
    })
  })
  