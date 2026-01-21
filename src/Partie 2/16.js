// Écris une fonction JavaScript nommée reverseString qui inverse l'ordre des caractères d'une chaîne.
function reverseString(str) {
    // Version moderne et rapide
    return str.split('').reverse().join('');
}

// Tests demandés
console.log(reverseString("hello"));      // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("12345"));      // "54321"