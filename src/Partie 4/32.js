// Spread operator avec tableaux
// 1. Copier un tableau
let original = [1, 2, 3];
let copie = [...original]; // Création d'une copie indépendante

copie.push(4);
console.log("Original:", original); // [1, 2, 3] (inchangé)
console.log("Copie:", copie);       // [1, 2, 3, 4]

// 2. Fusionner des tableaux
let tableau1 = [1, 2, 3];
let tableau2 = [4, 5, 6];
let fusion = [...tableau1, ...tableau2];
console.log("Fusion:", fusion); // [1, 2, 3, 4, 5, 6]

// 3. Trouver le maximum
let nombres = [5, 10, 15, 3, 8];
let maximum = Math.max(...nombres); // Équivaut à Math.max(5, 10, 15, 3, 8)
console.log("Le nombre maximum est :", maximum); // 15