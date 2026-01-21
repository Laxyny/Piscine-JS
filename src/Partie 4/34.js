// Sélectionner des éléments du DOM
// 1. Sélection par ID
const titrePrincipal = document.getElementById('titre');
console.log("Contenu du titre :", titrePrincipal.textContent);

// 2. Sélection par classe (retourne une NodeList)
const tousLesParagraphes = document.querySelectorAll('.paragraphe');
tousLesParagraphes.forEach((p, index) => {
    console.log(`Paragraphe ${index + 1} :`, p.textContent);
});

// 3. Sélection ciblée des éléments de liste
const listeItems = document.querySelectorAll('#liste li');
console.log(`La liste contient ${listeItems.length} éléments.`);

// Affichage individuel des items pour vérification
listeItems.forEach(item => console.log("-", item.textContent));