// Gestion des erreurs réseau
async function fetchWithRetry(url, retries = 3, timeout = 5000) {
    for (let i = 0; i < retries; i++) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(id);

            // Vérification de l'erreur HTTP (404, 500...)
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            return await response.json();

        } catch (erreur) {
            clearTimeout(id);

            // Identification du type d'erreur
            if (erreur.name === 'AbortError') {
                console.log('Requête trop longue (Timeout)');
            } else if (erreur.name === 'TypeError') {
                console.log('Erreur réseau : pas de connexion internet');
            } else {
                console.log('Message :', erreur.message);
            }

            if (i === retries - 1) throw erreur;
            console.log(`Nouvelle tentative... (${i + 1}/${retries})`);
        }
    }
}

// Test vers une URL fictive
fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1');