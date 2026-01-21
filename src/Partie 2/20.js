// Parcourir un tableau
// Affichez chaque langage du tableau avec sa position (numérotée à partir de 1).
let langages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

for (let i = 0; i < langages.length; i++) {
    // On ajoute 1 à l'index i pour l'affichage uniquement
    console.log(`${i + 1}. ${langages[i]}`);
}