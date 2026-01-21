/*
Compter les voyelles
Implémentez une fonction qui compte le nombre de voyelles (a, e, i, o, u) dans une chaîne, en gérant les majuscules et minuscules.

Objectifs :
✅ Utiliser la méthode includes() pour vérifier la présence
✅ Parcourir une chaîne avec for...of
✅ Découvrir les approches alternatives (filter, regex, reduce)
✅ Gérer la casse (majuscules/minuscules)
Exemples :
countVowels("hello")      // 2 (e, o)
countVowels("JavaScript") // 3 (a, a, i)
countVowels("xyz")        // 0
countVowels("AEIOU")      // 5
*/

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));
console.log(countVowels("xyz"));
console.log(countVowels("AEIOU"));