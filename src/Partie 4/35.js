// Modifier le contenu du DOM
// 1. Modifier le texte simple
const titre = document.getElementById('titre');
titre.textContent = "Le DOM a été modifié !";

// 2. Modifier le contenu HTML (permet d'insérer des balises)
const contenu = document.getElementById('contenu');
contenu.innerHTML = "<strong>Nouveau contenu</strong>";

// 3. Gestion des classes CSS
const desc = document.getElementById('description');
desc.classList.add('highlight'); // Ajoute le fond jaune
desc.classList.remove('normal'); // Retire l'ancienne classe

// 4. Modification des styles inline (prioritaire sur le CSS externe)
const bouton = document.getElementById('monBouton');
bouton.style.color = "blue";
bouton.style.margin = "20px";

// 5. Manipulation des attributs HTML
bouton.setAttribute('disabled', 'true'); // Rend le bouton incliquable