const input = document.querySelector("input");
const agregar = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

agregar.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(listado());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function listado() {
  const marcador = document.createElement("button");

  marcador.textContent = "X";
  marcador.className = "marcador";

  marcador.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return marcador;
}