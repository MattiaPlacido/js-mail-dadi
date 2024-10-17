// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Mi sono permesso di complicare un po' il programma per provare le funzioni e la ricorsione in maniera tale non si possa avere lo stesso risultato

function nFacedDice(n) {
  return Math.floor(Math.random() * n + 1);
}

function main() {
  if (repetitions > 0) {
    console.log("Partita numero", repetitions + 1);
  }
  const userNumber = nFacedDice(6);
  const cpuNumber = nFacedDice(6);

  console.log("Hai fatto : ", userNumber);
  console.log("il computer ha fatto : ", cpuNumber);

  if (userNumber !== cpuNumber) {
    userNumber > cpuNumber
      ? console.log("Hai vinto!")
      : console.log("Ha vinto il computer.");
  } else {
    console.log("Avete lo stesso risultato, ritirate!");
    repetitions++;
    main();
  }
}

let repetitions = 0;

main();
