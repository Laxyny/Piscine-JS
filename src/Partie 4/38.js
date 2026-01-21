// Événement input
// 1. Sélection des éléments
const inputField = document.getElementById('monInput');
const displayResult = document.getElementById('resultat');
const displayLength = document.getElementById('longueur');

// 2. Écoute de l'événement de saisie
inputField.addEventListener('input', (event) => {
    // Récupération de la valeur saisie
    const texte = event.target.value;
    
    // 3. Mise à jour du texte affiché
    displayResult.textContent = texte;
    
    // 4. Mise à jour du compteur de caractères
    displayLength.textContent = texte.length;
    
    // Optionnel : Gestion du cas vide (déjà géré par la nature du texte vide)
    if (texte === "") {
        displayResult.textContent = "(vide)";
    }
});