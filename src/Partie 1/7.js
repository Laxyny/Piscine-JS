/*
Notes scolaires
Créez une fonction getGrade qui convertit une note numérique (0-100) en lettre selon le barème américain.

Barème de notation
A : 90-100
B : 80-89
C : 70-79
D : 60-69
F : 0-59 (échec)
*/

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else if (score >= 0 && score < 60) {
        return 'F';
    } else {
        return 'Note invalide';
    }
}

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));
console.log(getGrade(100));