/*
Gestion d'erreurs avec try/catch
Gérez les erreurs dans du code asynchrone avec try/catch.

Objectifs :
✅ Utiliser try/catch avec async/await
✅ Créer des erreurs personnalisées
✅ Utiliser le bloc finally
✅ Gérer les échecs proprement
Structure :
async function maFonction() {
    try {
        const resultat = await operationAsynchrone();
        console.log(resultat);
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
    } finally {
        console.log('Terminé');
    }
}
*/

async function maFonction() {
    try {
        const resultat = await operationAsynchrone();
        console.log(resultat);
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
    } finally {
        console.log('Terminé');
    }
}

function operationAsynchrone() {
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

maFonction();