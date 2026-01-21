/* 
Premier fetch
Faites votre premier appel API avec fetch().

Objectifs :
✅ Utiliser fetch() pour récupérer des données
✅ Parser la réponse avec .json()
✅ Vérifier response.ok
✅ Gérer les erreurs avec try/catch
Structure de base :
const recupererDonnees = async () => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
};

API publique pour tester :
const URL = 'https://jsonplaceholder.typicode.com/users';
*/

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