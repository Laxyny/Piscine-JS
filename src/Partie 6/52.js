/* 
Async/await avec Promise.all()
Combinez async/await avec Promise.all() pour exécuter des requêtes en parallèle.

Objectifs :
✅ Comprendre la différence entre séquence et parallèle
✅ Utiliser Promise.all() avec await
✅ Optimiser les performances
✅ Gérer les erreurs avec Promise.allSettled()
Comparaison :
// ❌ Séquence (lent - 3s)
const user = await chargerUtilisateur();    // 1s
const posts = await chargerPosts();         // 1s  
const comments = await chargerComments();   // 1s
// Total: 3s

// ✅ Parallèle (rapide - 1s)
const [user, posts, comments] = await Promise.all([
    chargerUtilisateur(),
    chargerPosts(),
    chargerComments()
]);
// Total: 1s (le temps de la plus longue)
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