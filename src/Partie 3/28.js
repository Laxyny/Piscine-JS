/*
Code à convertir :
function calculerPrixTTC(prixHT, tauxTVA) {
    let montantTVA = prixHT * tauxTVA;
    let prixTTC = prixHT + montantTVA;
    return "Prix HT: " + prixHT + "€, TVA: " + montantTVA + "€, Prix TTC: " + prixTTC + "€";
}

function afficherProduit(nom, prix, stock) {
    if (stock > 0) {
        return "Produit: " + nom + " - Prix: " + prix + "€ - En stock: " + stock;
    } else {
        return "Produit: " + nom + " - Rupture de stock";
    }
}

Objectifs :
✅ Remplacer function par des arrow functions (=>)
✅ Remplacer la concaténation par des template literals
✅ Utiliser const au lieu de let quand approprié
*/

const calculerPrixTTC = (prixHT, tauxTVA) => {
    const montantTVA = prixHT * tauxTVA;
    const prixTTC = prixHT + montantTVA;
    return `Prix HT: ${prixHT}€, TVA: ${montantTVA}€, Prix TTC: ${prixTTC}€`;
}

const afficherProduit = (nom, prix, stock) => {
    if (stock > 0) {
        return `Produit: ${nom} - Prix: ${prix}€ - En stock: ${stock}`;
    } else {
        return `Produit: ${nom} - Rupture de stock`;
    }
}

console.log(calculerPrixTTC(100, 0.20));
console.log(afficherProduit("Laptop", 999, 5));
console.log(afficherProduit("Clavier", 49, 0));