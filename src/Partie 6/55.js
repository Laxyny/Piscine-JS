// Récupérer un seul élément
// 1. Fonction pour un seul élément avec URL dynamique
async function recupererUtilisateur(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    if (!response.ok) {
        throw new Error(`Utilisateur ${id} non trouvé (Statut: ${response.status})`);
    }
    
    return await response.json();
}

// 2. Fonction combinée utilisant Promise.all()
async function getFullData(id) {
    try {
        console.log(`Récupération des données pour l'utilisateur ${id}...`);
        
        // Lance les deux requêtes en parallèle
        const [utilisateur, posts] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json()),
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(res => res.json())
        ]);

        console.log(`Succès ! Utilisateur : ${utilisateur.name}`);
        console.log(`Nombre de publications : ${posts.length}`);
        
        return { utilisateur, posts };
    } catch (error) {
        console.error("Erreur lors de la récupération groupée :", error.message);
    }
}

// Test
getFullData(1);