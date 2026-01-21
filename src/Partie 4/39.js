// Mini TODO List
const input = document.getElementById('nouveauTodo');
const btnAjouter = document.getElementById('ajouter');
const liste = document.getElementById('listeTodos');

function ajouterTache() {
    const texte = input.value.trim();

    if (texte !== "") {
        // 1. Création de l'élément de liste
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${texte}</span>
            <button class="delete-btn">Supprimer</button>
        `;

        // 2. Gestion de la suppression pour CETTE tâche
        const btnSupprimer = li.querySelector('.delete-btn');
        btnSupprimer.addEventListener('click', () => {
            li.remove();
        });

        // 3. Ajout au DOM et nettoyage
        liste.appendChild(li);
        input.value = "";
    }
}

// Écouteur sur le bouton
btnAjouter.addEventListener('click', ajouterTache);

// Écouteur sur la touche Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        ajouterTache();
    }
});