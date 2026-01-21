// POST - Créer une ressource
// Fonction asynchrone pour créer une ressource
const creerUtilisateur = async (donnees) => {
    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST', // On utilise POST pour la création
            headers: {
                'Content-Type': 'application/json' // On précise le format des données
            },
            body: JSON.stringify(donnees) // On transforme l'objet en JSON
        });

        const resultat = await response.json(); // On récupère la réponse du serveur
        console.log("Utilisateur créé avec succès :", resultat);
    } catch (error) {
        console.error("Erreur lors de la création :", error);
    }
};

// Test de la fonction
creerUtilisateur({ nom: 'Alice', metier: 'Développeuse' });