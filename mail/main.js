/*
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

//dichiarazione variabili
const allowedEmails = [
  "me@email.it",
  "me@gmail.com",
  "you@email.it",
  "@you@gmail.com",
  "you.me@gmail.com",
];
const userEmail = prompt("Inserisci la tua mail!");
let isEmailValid = false;

//elaborazione dati

for (let i = 0; i < allowedEmails.length; i++) {
  if (userEmail === allowedEmails[i]) isEmailValid = true;
}

isEmailValid
  ? console.log("La tua email può accedere!")
  : console.log("La tua email non può accedere!");

// ALTRIMENTI SENZA IL FOR
// allowedEmails.includes(userEmail)
//   ? console.log("La tua email può accedere!")
//   : console.log("La tua email non può accedere!");
