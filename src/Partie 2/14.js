// Trouver un nombre
// Simulez un jeu où un programme cherche un nombre secret en incrémentant une tentative jusqu'à le trouver.
const nombreSecret = 42;

let essai = 1;
let valeur = 1;

while (valeur !== nombreSecret) {
  console.log(`Essai ${essai} : ${valeur}`);
  valeur++;
  essai++;
}

console.log(`Essai ${essai} : ${valeur}`);
console.log(`Trouvé en ${essai} essais !`);
