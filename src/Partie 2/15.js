// Compter les voyelles
function countVowels(str) {
  let count = 0;
  const voyelles = "aeiou";
  const texte = str.toLowerCase();

  for (let i = 0; i < texte.length; i++) {
    if (voyelles.includes(texte[i])) {
      count++;
    }
  }

  return count;
}

// Tests demandés
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript"));  // 3
console.log(countVowels("Piscine"));     // 4
console.log(countVowels("bcdfg"));       // 0
