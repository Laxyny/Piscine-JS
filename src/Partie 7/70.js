/*
Fetch API avec async/await
Utilisez async/await avec l'API Fetch pour récupérer des données.

Objectifs :
✅ Utiliser fetch() avec async/await
✅ Parser les réponses JSON
✅ Gérer les erreurs HTTP
✅ Faire des requêtes POST
Exemple :
async function recuperer() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
}
*/

import fetch from 'node-fetch';

const URL = 'https://jsonplaceholder.typicode.com/users';

const recupererDonnees = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
    }
}

recupererDonnees();