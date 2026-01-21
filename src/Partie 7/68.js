/*
Requêtes séquentielles
Exécutez des opérations asynchrones en séquence.

Objectifs :
✅ Comprendre l'exécution séquentielle
✅ Chaîner plusieurs await
✅ Chaque étape attend la précédente
✅ Gérer les erreurs à chaque étape
Exemple :
async function traiterCommande() {
    try {
        const stock = await verifierStock();
        const paiement = await traiterPaiement();
        const envoi = await envoyerColis();
        console.log('Commande terminée');
    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
}
*/

async function traiterCommande() {
    try {
        const stock = await verifierStock();
        const paiement = await traiterPaiement();
        const envoi = await envoyerColis();
        console.log('Commande terminée');
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
    }
}

function verifierStock() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const enStock = true;
            if (enStock) {
                resolve('Stock vérifié');
            } else {
                reject(new Error('Rupture de stock'));
            }
        }, 1000);
    });
}

function traiterPaiement() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paiementReussi = true;
            if (paiementReussi) {
                resolve('Paiement traité');
            } else {
                reject(new Error('Échec du paiement'));
            }
        }, 1000);
    });
}

function envoyerColis() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const envoiReussi = true;
            if (envoiReussi) {
                resolve('Colis envoyé');
            } else {
                reject(new Error('Échec de l\'envoi'));
            }
        }, 1000);
    });
}

traiterCommande();