/* 
Jeu "Devinez le nombre"
Créez un jeu où l'utilisateur doit deviner un nombre entre 1 et 100.

HTML fourni :
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Devinez le Nombre</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
        }
        input {
            padding: 10px;
            font-size: 18px;
            width: 200px;
            margin: 10px;
        }
        button {
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            background: white;
            border: none;
            border-radius: 5px;
        }
        #message {
            font-size: 24px;
            margin: 20px 0;
            min-height: 30px;
        }
        #historique {
            margin-top: 20px;
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>🎲 Devinez le Nombre</h1>
    <p>Je pense à un nombre entre 1 et 100</p>

    <input type="number" id="proposition" min="1" max="100" placeholder="Votre nombre">
    <button id="verifier">Vérifier</button>
    <button id="nouvelle-partie">Nouvelle partie</button>

    <div id="message"></div>
    <div id="stats">
        <p>Tentatives : <span id="tentatives">0</span></p>
        <p>Meilleur score : <span id="record">-</span></p>
    </div>
    <div id="historique"></div>

    <script src="script.js"></script>
</body>
</html>

Objectifs :
✅ Générer un nombre aléatoire entre 1 et 100
✅ Indiquer si la proposition est trop haute ou trop basse
✅ Compter le nombre de tentatives
✅ Afficher un historique des propositions
✅ Sauvegarder le meilleur score dans localStorage
✅ Permettre de recommencer une nouvelle partie
*/

const propositionInput = document.getElementById('proposition');
const verifierBouton = document.getElementById('verifier');
const nouvellePartieBouton = document.getElementById('nouvelle-partie');

const messageDiv = document.getElementById('message');
const tentativesSpan = document.getElementById('tentatives');
const recordSpan = document.getElementById('record');
const historiqueDiv = document.getElementById('historique');

let nombreADeviner;
let tentatives;
let historiquePropositions = [];

function initialiserJeu() {
    nombreADeviner = Math.floor(Math.random() * 100) + 1;
    tentatives = 0;
    historiquePropositions = [];
    tentativesSpan.textContent = tentatives;
    messageDiv.textContent = '';
    historiqueDiv.innerHTML = '';
    propositionInput.value = '';
    const record = localStorage.getItem('meilleurScore');
    recordSpan.textContent = record ? record : '-';
}

verifierBouton.addEventListener('click', () => {
    const proposition = parseInt(propositionInput.value);
    if (isNaN(proposition) || proposition < 1 || proposition > 100) {
        messageDiv.textContent = 'Veuillez entrer un nombre entre 1 et 100.';
        return;
    }
    tentatives++;
    tentativesSpan.textContent = tentatives;
    historiquePropositions.push(proposition);
    historiqueDiv.innerHTML = historiquePropositions.map(p => `<div>${p}</div>`).join('');
    if (proposition < nombreADeviner) {
        messageDiv.textContent = '📈 C\'est plus !';
    } else if (proposition > nombreADeviner) {
        messageDiv.textContent = '📉 C\'est moins !';
    } else {
        messageDiv.textContent = `🎉 Bravo ! C'était bien ${nombreADeviner} ! Gagné en ${tentatives} tentatives.`;
        const record = localStorage.getItem('meilleurScore');
        if (!record || tentatives < record) {
            localStorage.setItem('meilleurScore', tentatives);
            recordSpan.textContent = tentatives;
        }
    }
});

nouvellePartieBouton.addEventListener('click', () => {
    initialiserJeu();
});

initialiserJeu();