/*
Pair ou impair
Créez une fonction evenOrOdd qui détermine si un nombre est pair ou impair.

Retour attendu
La fonction doit retourner :

La chaîne "pair" si le nombre est pair
La chaîne "impair" si le nombre est impair
Rappel : Un nombre est pair si le reste de sa division par 2 est égal à 0.
*/

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "pair";
    } else {
        return "impair";
    }
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(7));
console.log(evenOrOdd(0));
console.log(evenOrOdd(-2));