// sleecionar um item da lista
let list = document.querySelectorAll(".navigation li");


function activeLink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach(item => item.addEventListener("mouseover", activeLink))

/*===============MODAL=======================*/

// Abrir o modal
const modal = document.getElementById("modal");
const btnEditar = document.querySelector(".buttonea button:first-child");
const spanClose = document.querySelector(".close");

btnEditar.onclick = function () {
  modal.style.display = "block";
};

// Fechar o modal ao clicar no X
spanClose.onclick = function () {
  modal.style.display = "none";
};

// Fechar o modal ao clicar fora da área do modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};