// Événement click simple
// 1. Sélection des éléments du DOM
const affichage = document.getElementById('compteur');
const btnPlus = document.getElementById('incrementer');
const btnMoins = document.getElementById('decrementer');
const btnReset = document.getElementById('reset');

// 2. Initialisation de la donnée
let compte = 0;

// 3. Fonction pour mettre à jour l'interface
function mettreAJourAffichage() {
    affichage.textContent = compte;
}

// 4. Écouteurs d'événements
btnPlus.addEventListener('click', () => {
    compte++;
    mettreAJourAffichage();
});

btnMoins.addEventListener('click', () => {
    compte--;
    mettreAJourAffichage();
});

btnReset.addEventListener('click', () => {
    compte = 0;
    mettreAJourAffichage();
});