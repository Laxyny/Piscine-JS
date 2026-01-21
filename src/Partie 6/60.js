// DELETE - Supprimer une ressource
// Fonction asynchrone pour supprimer une ressource
const supprimerRessource = async (id) => {
    // 1. Demander confirmation à l'utilisateur
    const confirmation = confirm("Voulez-vous vraiment supprimer cet élément ?");
    
    if (!confirmation) return; // On arrête tout si l'utilisateur annule

    try {
        // 2. Envoi de la requête DELETE
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });

        // 3. Vérification de la réussite
        if (response.ok) {
            console.log(`Ressource ${id} supprimée avec succès !`);
            alert("Suppression réussie.");
            // Ici, on ajouterait normalement : document.getElementById(`item-${id}`).remove();
        } else {
            throw new Error("La suppression a échoué sur le serveur.");
        }
    } catch (error) {
        // 4. Gestion des erreurs (réseau ou serveur)
        console.error("Erreur lors de la suppression :", error);
        alert("Impossible de supprimer la ressource.");
    }
};

// Test de la fonction
supprimerRessource(1);