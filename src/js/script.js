let personagem = document.querySelector("#personagem");
let obstaculo = document.querySelector("#obstaculo");

const pular = () => {
  if ((personagem.classList = !"animar")) {
    personagem.classList.add("animar");
  }

  setTimeout(() => {
    personagem.classList.remove("animar");
  }, 500);
};

let testarColisao = setInterval(() => {
  let topoPersonagem = parseInt(
    window.getComputedStyle(personagem)
  );
});
