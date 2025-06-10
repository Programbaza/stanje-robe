// Provera da li je korisnik već ulogovan
window.onload = function () {
  if (localStorage.getItem("ulogovan") === "da") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("main-section").style.display = "block";
    prikaziKlijente();
  }
};

function login() {
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
}

function logout() {
  localStorage.removeItem("ulogovan");
  location.reload();
}
let korisnickoIme = "admin";
let lozinka = "1234";

function login() {
  const un = document.getElementById("username").value;
  const pw = document.getElementById("password").value;
  if (un === korisnickoIme && pw === lozinka) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("main-section").style.display = "block";
    prikaziKlijente();
  } else {
    alert("Pogrešno korisničko ime ili lozinka");
  }
}

function logout() {
  location.reload();
}

function promeniLozinku() {
  const novaLozinka = prompt("Unesi novu lozinku:");
  if (novaLozinka) {
    lozinka = novaLozinka;
    alert("Lozinka promenjena.");
  }
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function dodajArtikal() {
  const artikal = document.getElementById("novi-artikal").value;
  if (artikal) {
    const lista = document.getElementById("lista-artikala");
    const li = document.createElement("li");
    li.innerText = artikal;
    lista.appendChild(li);
    document.getElementById("novi-artikal").value = "";
  }
}

function dodajUredjaj() {
  const uredjaj = document.getElementById("novi-uredjaj").value;
  if (uredjaj) {
    const lista = document.getElementById("lista-uredjaja");
    const li = document.createElement("li");
    li.innerText = uredjaj;
    lista.appendChild(li);
    document.getElementById("novi-uredjaj").value = "";
  }
}

function generisiRevers() {
  return "REV-" + Math.floor(100000 + Math.random() * 900000);
}

function dodajKlijentaDetaljno() {
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

  let klijenti = JSON.parse(localStorage.getItem("klijenti")) || [];
  klijenti.push(klijent);
  localStorage.setItem("klijenti", JSON.stringify(klijenti));

  prikaziKlijente();
  obrisiFormu();
}

function prikaziKlijente() {
  const tbody = document.querySelector("#lista-klijenata tbody");
  tbody.innerHTML = "";

  const klijenti = JSON.parse(localStorage.getItem("klijenti")) || [];
  klijenti.forEach(k => {
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
}

function obrisiFormu() {
  document.getElementById("imePrezime").value = "";
  document.getElementById("telefon").value = "";
  document.getElementById("model").value = "";
  document.getElementById("opis").value = "";
  document.getElementById("imei").value = "";
  document.getElementById("datum").value = "";
}
