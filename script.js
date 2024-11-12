const form = document.querySelector("form");

const lastNameSaved = document.querySelector("label"); // lascio fuori la variabile perchè dovendo cambiare la stessa label ha piu senso, se la mettesse dentro la funzione mi crearebbe una label ad ogni click
console.log(lastNameSaved);

const names = []; //array vuoto

//funzione principale per il submit del form

form.onsubmit = function (e) {
  e.preventDefault();
  const name = document.querySelector("input");
  names.push(name.value); // creazione array
  console.log(names);
  localStorage.setItem("nameSaved", JSON.stringify(names)); // salvataggio in locale di ogni nome
  const namesArray = JSON.parse(localStorage.getItem("nameSaved"));
  namesArray.forEach((name) => {
    lastNameSaved.innerText = name; //cambio della label con l'ultimo nome salvato
  });
};

// tasto di reset

const btnReset = document.getElementById("reset");

//funzione di reset

const toReset = function () {
  const resettinArray = JSON.parse(localStorage.getItem("nameSaved"));

  resettinArray.forEach((name) => {
    if (resettinArray.length > 0) {
      resettinArray.pop();
    }
  });
};

btnReset.onclick = toReset;

//creazione timer nel sessionstorage

const timer = document.createElement("p");
let i = 0;

const intervallo = setInterval(() => {
  i++;
  timer.innerText = i;
  form.appendChild(timer);
  sessionStorage.getItem("counter", i);
}, 1000);
