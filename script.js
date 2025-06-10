
let loggedIn = false;

function login() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (u === 'admin' && p === '1234') {
    loggedIn = true;
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
  } else {
    alert('Pogrešno korisničko ime ili lozinka.');
  }
}

function dodajArtikal() {
  const div = document.createElement('div');
  div.innerText = '🆕 Novi artikal';
  document.getElementById('artikli').appendChild(div);
}

function generisiPDF() {
  alert("PDF funkcija uskoro.");
}

function promeniLozinku() {
  const nova = prompt("Unesi novu lozinku:");
  if (nova) alert("Lozinka promenjena (samo vizuelno).");
}
