// Headers et authentification
// Configuration des headers communs
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123', // Authentification Bearer
    'Accept': 'application/json'
};

// Fonction wrapper réutilisable
async function fetchWithAuth(url, options = {}) {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                ...DEFAULT_HEADERS,
                ...options.headers // Permet d'ajouter/écraser des headers si besoin
            }
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la requête:", error);
    }
}

// Exemple d'utilisation
fetchWithAuth('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log("Données reçues avec auth:", data));