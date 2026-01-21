/*
Requêtes parallèles avec Promise.all
Exécutez plusieurs opérations en parallèle pour optimiser les performances.

Objectifs :
✅ Comprendre le parallélisme
✅ Utiliser Promise.all() avec await
✅ Comparer avec l'exécution séquentielle
✅ Optimiser les performances
Comparaison :
// Séquentiel (lent)
const a = await op1(); // 1s
const b = await op2(); // 1s
const c = await op3(); // 1s
// Total: 3s

// Parallèle (rapide)
const [a, b, c] = await Promise.all([
    op1(),
    op2(),
    op3()
]);
// Total: 1s (le plus long)
*/

const chargerUtilisateur = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nom: 'Alice' });
        }, 1000);
    });
}

const chargerPosts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, titre: 'Post 1' }, { id: 2, titre: 'Post 2' }]);
        }, 1000);
    });
}

const chargerComments = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, texte: 'Commentaire 1' }, { id: 2, texte: 'Commentaire 2' }]);
        }, 1000);
    });
}

const chargerDonnees = async () => {
    try {
        const [user, posts, comments] = await Promise.all([
            chargerUtilisateur(),
            chargerPosts(),
            chargerComments()
        ]);
        return { user, posts, comments };
    } catch (erreur) {
        console.error('Erreur lors du chargement des données:', erreur.message);
    }
};

chargerDonnees().then(donnees => {
    if (donnees) {
        console.log(donnees);
    }
});