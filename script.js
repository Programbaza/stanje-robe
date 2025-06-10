let loggedIn = false;
let lozinka = "1234";
let korisnik = "admin";

function login() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (u === korisnik && p === lozinka) {
    loggedIn = true;
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
    showSection('artikli');
  } else {
    alert("Pogrešni podaci");
  }
}

function logout() {
  loggedIn = false;
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('main-section').style.display = 'none';
}

function promeniLozinku() {
  const nova = prompt("Unesi novu lozinku:");
  if (nova) {
    lozinka = nova;
    alert("Lozinka uspešno promenjena.");
  }
}

function showSection(id) {
  const sekcije = document.querySelectorAll('.section');
  sekcije.forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// ARTIKLI
function dodajArtikal() {
  const naziv = document.getElementById('novi-artikal').value;
  if (!naziv.trim()) return;
  const li = document.createElement('li');
  li.textContent = naziv;
  document.getElementById('lista-artikala').appendChild(li);
  document.getElementById('novi-artikal').value = "";
}

// UREDJAJI
function dodajUredjaj() {
  const model = document.getElementById('novi-uredjaj').value;
  if (!model.trim()) return;
  const li = document.createElement('li');
  li.textContent = model;
  document.getElementById('lista-uredjaja').appendChild(li);
  document.getElementById('novi-uredjaj').value = "";
}

// KLIJENTI
function dodajKlijenta() {
  const klijent = document.getElementById('novi-klijent').value;
  if (!klijent.trim()) return;
  const li = document.createElement('li');
  li.textContent = klijent;
  document.getElementById('lista-klijenata').appendChild(li);
  document.getElementById('novi-klijent').value = "";
}

// PRETRAGA
function pretraziArtikle() {
  const query = document.getElementById('pretraga-input').value.toLowerCase();
  const lista = document.querySelectorAll('#lista-artikala li');
  const rezultati = document.getElementById('rezultati-pretrage');
  rezultati.innerHTML = '';
  lista.forEach(li => {
    if (li.textContent.toLowerCase().includes(query)) {
      const klon = li.cloneNode(true);
      rezultati.appendChild(klon);
    }
  });
}
