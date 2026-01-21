/*
Moyenne d'un tableau
Créez une fonction calculateAverage qui calcule la moyenne des nombres d'un tableau.

Formule :
Moyenne = Somme des éléments / Nombre d'éléments

Exemples :
calculateAverage([10, 20, 30]) → 20
calculateAverage([12, 15, 18, 14, 16]) → 15
calculateAverage([5, 5, 5, 5]) → 5
*/

function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30]));
console.log(calculateAverage([12, 15, 18, 14, 16]));
console.log(calculateAverage([5, 5, 5, 5]));
console.log(calculateAverage([100]));