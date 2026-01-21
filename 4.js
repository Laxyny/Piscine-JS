/*
Calculateur de TVA
Écrivez un programme qui calcule le prix TTC (Toutes Taxes Comprises) à partir d'un prix HT (Hors Taxes).

Données
TVA : 20%
Prix HT : 100€
Calculs à effectuer
Calculez le montant de la TVA
Calculez le prix TTC
Affichez les trois valeurs : Prix HT, Montant TVA, Prix TTC
Formule : Prix TTC = Prix HT + (Prix HT × Taux TVA)
*/

const tvaRate = 0.20;
const prixHT = 100;

const montantTVA = prixHT * tvaRate;
const prixTTC = prixHT + montantTVA;

console.log(`Prix HT : ${prixHT}€`);
console.log(`Montant TVA : ${montantTVA}€`);
console.log(`Prix TTC : ${prixTTC}€`);