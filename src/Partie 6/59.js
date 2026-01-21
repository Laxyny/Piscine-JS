// PUT/PATCH - Modifier une ressource
// PUT : Remplacement complet
const remplacerUtilisateur = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Jean Dupont',
            email: 'jean.dupont@exemple.com',
            city: 'Marseille'
        })
    });
    const data = await response.json();
    console.log("Résultat PUT (Remplacement complet) :", data);
};

// PATCH : Modification partielle
const modifierEmail = async (id, nouvelEmail) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: nouvelEmail // On n'envoie que le champ à modifier
        })
    });
    const data = await response.json();
    console.log("Résultat PATCH (Modification partielle) :", data);
};

// Tests
remplacerUtilisateur(1);
modifierEmail(1, 'nouveau.contact@exemple.com');