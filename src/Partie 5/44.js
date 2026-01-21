/*
Quiz interactif
Créez un quiz à choix multiples avec système de score.

Objectifs :
✅ Afficher les questions et leurs options de réponse
✅ Vérifier si la réponse est correcte
✅ Calculer et afficher le score
✅ Naviguer entre les questions
✅ Afficher le résultat final avec possibilité de recommencer
Exemple de structure de données :
const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        reponse: 0  // Index de la bonne réponse
    },
    {
        question: "Combien font 2 + 2 ?",
        options: ["3", "4", "5", "6"],
        reponse: 1
    }
];

Exemple de comportement attendu :
Affichage : "Question 1/3 : Quelle est la capitale de la France ?"
4 boutons : Paris, Londres, Berlin, Madrid
Clic sur "Paris" → Message "Bonne réponse !" + passage à la question suivante
Après la dernière question → "Quiz terminé ! Votre score: 2/3"
*/

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        reponse: 0
    },
    {
        question: "Combien font 2 + 2 ?",
        options: ["3", "4", "5", "6"],
        reponse: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function afficherQuestion() {
    const questionObj = questions[currentQuestionIndex];
    console.log(`Question ${currentQuestionIndex + 1}/${questions.length} : ${questionObj.question}`);
    questionObj.options.forEach((option, index) => {
        console.log(`${index}: ${option}`);
    }
    );
}   

function verifierReponse(reponseIndex) {
    const questionObj = questions[currentQuestionIndex];
    if (reponseIndex === questionObj.reponse) {
        console.log("Bonne réponse !");
        score++;
    } else {
        console.log("Mauvaise réponse.");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        afficherQuestion();
    } else {
        console.log(`Quiz terminé ! Votre score: ${score}/${questions.length}`);
    }
}

afficherQuestion();

verifierReponse(0);
verifierReponse(1);