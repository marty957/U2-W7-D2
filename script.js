const form = document.querySelector("form");

const lastNameSaved = document.querySelector("label"); // lascio fuori la variabile perchè dovendo cambiare la stessa label ha piu senso, se la mettesse dentro la funzione mi crearebbe una label ad ogni click
console.log(lastNameSaved);
const ul = document.getElementById("nameList");
const names = localStorage.getItem("nameSaved") ? JSON.parse(localStorage.getItem("nameSaved")) : []; //array vuoto

//funzione principale per il submit del form
const createListItems = function () {
  ul.innerHTML = "";
  names.forEach((name) => {
    const li = document.createElement("li");
    li.innerText = name;
    li.className = "list-group-item";
    ul.appendChild(li);
  });
};
form.onsubmit = function (e) {
  e.preventDefault();
  const name = document.querySelector("input");
  names.push(name.value); // creazione array
  console.log(names);
  localStorage.setItem("nameSaved", JSON.stringify(names)); // salvataggio in locale di ogni nome
  createListItems();
};

// tasto di reset

const btnReset = document.getElementById("reset");

//funzione di reset

const toReset = function () {
  let resettinArray = JSON.parse(localStorage.getItem("nameSaved"));

  resettinArray.pop();
  localStorage.setItem("nameSaved", JSON.stringify(resettinArray));
  ul.lastElementChild.remove();
};
btnReset.onclick = toReset;
//creazione timer nel sessionstorage

const timer = document.createElement("p");
form.appendChild(timer);
let i = sessionStorage.getItem("counter") ? parseInt(sessionStorage.getItem("counter")) : 0;

const intervallo = setInterval(() => {
  i++;
  timer.innerText = i;

  sessionStorage.setItem("counter", JSON.stringify(i));
}, 1000);
window.addEventListener("DOMContentLoaded", function () {
  createListItems();
  timer.innerText = i;
});
