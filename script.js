// Firebase setup i funkcije (v10 kompatibilno za GitHub Pages)
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let korisnickoIme = "admin";
let lozinka = "1234";

window.onload = function () {
  if (localStorage.getItem("ulogovan") === "da") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("main-section").style.display = "block";
    prikaziKlijente();
  }
};

window.login = function () {
  const un = document.getElementById("username").value;
  const pw = document.getElementById("password").value;
  if (un === korisnickoIme && pw === lozinka) {
    localStorage.setItem("ulogovan", "da");
    document.getElementById("login-section").style.display = "none";
    document.getElementById("main-section").style.display = "block";
    prikaziKlijente();
  } else {
    alert("Pogrešno korisničko ime ili lozinka");
  }
};

window.logout = function () {
  localStorage.removeItem("ulogovan");
  location.reload();
};

window.promeniLozinku = function () {
  const novaLozinka = prompt("Unesi novu lozinku:");
  if (novaLozinka) {
    lozinka = novaLozinka;
    alert("Lozinka promenjena.");
  }
};

window.dodajArtikal = function () {
  const artikal = document.getElementById("novi-artikal").value;
  if (artikal) {
    const lista = document.getElementById("lista-artikala");
    const li = document.createElement("li");
    li.innerText = artikal;
    lista.appendChild(li);
    document.getElementById("novi-artikal").value = "";
  }
};

window.dodajUredjaj = function () {
  const uredjaj = document.getElementById("novi-uredjaj").value;
  if (uredjaj) {
    const lista = document.getElementById("lista-uredjaja");
    const li = document.createElement("li");
    li.innerText = uredjaj;
    lista.appendChild(li);
    document.getElementById("novi-uredjaj").value = "";
  }
};

function generisiRevers() {
  return "REV-" + Math.floor(100000 + Math.random() * 900000);
}

window.dodajKlijentaDetaljno = async function () {
  const klijent = {
    ime: document.getElementById("imePrezime").value,
    telefon: document.getElementById("telefon").value,
    model: document.getElementById("model").value,
    opis: document.getElementById("opis").value,
    imei: document.getElementById("imei").value,
    revers: generisiRevers(),
    datum: document.getElementById("datum").value,
    popravka: document.getElementById("popravka").value,
  };

  try {
    await addDoc(collection(window.db, "klijenti"), klijent);
    alert("Klijent sačuvan!");
    obrisiFormu();
  } catch (error) {
    console.error("Greška pri upisu:", error);
  }
};

window.prikaziKlijente = function () {
  const tbody = document.querySelector("#lista-klijenata tbody");
  onSnapshot(collection(window.db, "klijenti"), (snapshot) => {
    tbody.innerHTML = "";
    snapshot.forEach((doc) => {
      const k = doc.data();
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${k.ime}</td>
        <td>${k.telefon}</td>
        <td>${k.model}</td>
        <td>${k.opis}</td>
        <td>${k.imei}</td>
        <td>${k.revers}</td>
        <td>${k.datum}</td>
        <td>${k.popravka}</td>
      `;
      tbody.appendChild(tr);
    });
  });
};

function obrisiFormu() {
  document.getElementById("imePrezime").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("model").value = "";
  document.getElementById("opis").value = "";
  document.getElementById("imei").value = "";
  document.getElementById("datum").value = "";
  document.getElementById("popravka").value = "";
}
