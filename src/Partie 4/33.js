// Spread operator avec objets
// 1. Copier un objet
let personne = { nom: "Dupont", age: 30 };
let personneCopie = { ...personne };
personneCopie.age = 35;

console.log("Original:", personne);      // { nom: "Dupont", age: 30 }
console.log("Copie modifiée:", personneCopie); // { nom: "Dupont", age: 35 }

// 2. Fusionner des objets
let infos = { nom: "Martin", age: 25 };
let contact = { email: "martin@email.com", tel: "0612345678" };
let profilComplet = { ...infos, ...contact };
console.log("Profil complet:", profilComplet);

// 3. Modifier sans mutation
let user = { nom: "Dupont", age: 30, ville: "Paris" };
let userMisAJour = { ...user, age: 31 }; // L'age: 31 écrase l'age: 30
console.log("User original:", user);
console.log("User mis à jour:", userMisAJour);

// 4. Ajouter une propriété
let userFinal = { ...userMisAJour, estConnecte: true };
console.log("User final avec statut:", userFinal);