/* 
Gestion d'erreurs avec try/catch
Gérez correctement les erreurs dans du code asynchrone.

Objectifs :
✅ Utiliser try/catch pour gérer les erreurs
✅ Utiliser finally pour le nettoyage
✅ Lancer des erreurs avec throw
✅ Distinguer différents types d'erreurs
Structure de base :
const maFonction = async () => {
    try {
        // Code qui peut échouer
        const resultat = await operationAsynchrone();
        return resultat;
    } catch (erreur) {
        // Gérer l'erreur
        console.error('Erreur:', erreur);
    } finally {
        // Toujours exécuté (nettoyage)
        console.log('Terminé');
    }
};
*/

const maFonction = async () => {
    try {
        const resultat = await operationAsynchrone();
        return resultat;
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
    } finally {
        console.log('Terminé');
    }
};

const operationAsynchrone = () => {
    return new Promise((resolve, reject) => {
        const succes = Math.random() > 0.5;
        setTimeout(() => {
            if (succes) {
                resolve('Opération réussie');
            } else {
                reject(new Error('Échec de l\'opération'));
            }
        }, 1000);
    });
}

maFonction().then(resultat => {
    if (resultat) {
        console.log(resultat);
    }
});