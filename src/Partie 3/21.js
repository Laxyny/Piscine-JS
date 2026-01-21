/*
Somme d'un tableau
Calculez la somme de tous les nombres contenus dans un tableau.

Exemple :
let nombres = [5, 10, 15, 20, 25];

Résultat attendu : 75 (5 + 10 + 15 + 20 + 25)
*/

function sommeTableau(arr) {
    let somme = 0;
    for (let i = 0; i < arr.length; i++) {
        somme += arr[i];
    }
    return somme;
}

console.log(sommeTableau([5, 10, 15, 20, 25]));
console.log(sommeTableau([1, 2, 3, 4, 5]));
console.log(sommeTableau([100]));
console.log(sommeTableau([]));