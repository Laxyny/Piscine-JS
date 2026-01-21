// Event object et preventDefault
// 1. Sélection des éléments
const formulaire = document.getElementById('monFormulaire');
const champNom = document.getElementById('nom');
const champEmail = document.getElementById('email');
const zoneMessage = document.getElementById('message');

// 2. Gestion de la soumission
formulaire.addEventListener('submit', (event) => {
    // 3. EMPÊCHER le rechargement automatique de la page
    event.preventDefault();

    // 4. Récupération des données
    const nom = champNom.value;
    const email = champEmail.value;

    // 5. Affichage du message de confirmation
    zoneMessage.textContent = `Formulaire soumis ! Nom: ${nom}, Email: ${email}`;

    // 6. Nettoyage du formulaire
    formulaire.reset();
});