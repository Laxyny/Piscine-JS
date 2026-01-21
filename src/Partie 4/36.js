// Créer et ajouter des éléments au DOM
// 1. Création et ajout simple
const message = document.createElement('p');
message.textContent = "Bienvenue dans notre boutique !";
document.body.appendChild(message);

// 2. Liste avec positionnement spécifique
const liste = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
    const item = document.createElement('li');
    item.textContent = `Item ${i}`;
    liste.appendChild(item);
}
const titre = document.getElementById('titre');
titre.insertAdjacentElement('afterend', liste);

// 3. Carte produit complexe
const carte = document.createElement('div');
carte.classList.add('produit');

const nomProduit = document.createElement('h3');
nomProduit.textContent = "Smartphone";

const prixProduit = document.createElement('p');
prixProduit.classList.add('prix');
prixProduit.textContent = "699€";

carte.appendChild(nomProduit);
carte.appendChild(prixProduit);
document.getElementById('produits').appendChild(carte);

// 4. Suppression d'un élément
const premierItem = liste.querySelector('li');
if (premierItem) {
    premierItem.remove();
}