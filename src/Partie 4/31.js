// Destructuring d'objets
let personne = {
    nom: "RF",
    prenom: "Ariele",
    age: 28,
    ville: "Montpellier"
};

// La magie de la déstructuration en une seule ligne :
const { nom, prenom, age, ville } = personne;

// Affichage des résultats
console.log(nom);    // "RF"
console.log(prenom); // "Ariele"
console.log(age);    // 28
console.log(ville);  // "Montpellier"