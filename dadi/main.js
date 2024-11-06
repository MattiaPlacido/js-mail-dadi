// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch per altre 10 mail (sostituendo le altre)

//HTML ELEMENTS
const userInputEmails = document.getElementById("emails-number");
const generateButton = document.getElementById("generate-emails-button");
const emailListEl = document.getElementById("email-list");

const nOfEmails = 10; //default

for (let i = 0; i < nOfEmails; i++) {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => {
      emailListEl.innerHTML += `<div class="list-group-item">Email ${i + 1} : ${
        data.response
      }</div>`;
    });
}

generateButton.addEventListener("click", () => {
  if (userInputEmails.value > 0 && !isNaN(userInputEmails.value)) {
    //resetto la lista di mail
    emailListEl.innerHTML = "";
    //faccio richieste pari a quanto mi ha detto l'utente
    for (let i = 0; i < userInputEmails.value; i++) {
      fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => response.json())
        .then((data) => {
          //stampo ogni mail come oggetto di lista
          emailListEl.innerHTML += `<div class="list-group-item">Email ${
            i + 1
          } : ${data.response}</div>`;
        });
    }
  } else {
    alert("Inserisci valori validi");
  }
});
