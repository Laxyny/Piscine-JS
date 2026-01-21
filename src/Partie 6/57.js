// Loading states
const STATES = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
};

const btn = document.getElementById('monBouton'); // Supposons qu'il existe
const statusMsg = document.getElementById('status');

async function chargerDonnees() {
    // 1. Passage en état de chargement
    updateUI(STATES.LOADING);

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) throw new Error();
        
        const data = await response.json();
        console.log("Données reçues :", data);
        
        // 2. Succès
        updateUI(STATES.SUCCESS);
    } catch (error) {
        // 3. Erreur
        updateUI(STATES.ERROR);
    }
}

function updateUI(state) {
    switch(state) {
        case STATES.LOADING:
            btn.disabled = true;
            statusMsg.textContent = "Chargement en cours...";
            break;
        case STATES.SUCCESS:
            btn.disabled = false;
            statusMsg.textContent = "Données chargées !";
            break;
        case STATES.ERROR:
            btn.disabled = false;
            statusMsg.innerHTML = 'Erreur ! <button onclick="chargerDonnees()">Réessayer</button>';
            break;
    }
}