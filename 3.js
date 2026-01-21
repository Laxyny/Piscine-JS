/*
Calculatrice simple
Créez une fonction calculator qui effectue des opérations mathématiques de base.

Paramètres
La fonction doit accepter 3 paramètres :

num1 : premier nombre
operator : opérateur (+, -, *, /)
num2 : deuxième nombre
La fonction doit retourner le résultat du calcul.

Gestion des erreurs
Si l'opérateur est invalide, retournez le message : "Opérateur invalide"
*/

function calculator(num1, operator, num2) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Opérateur invalide";
    }
}

console.log(calculator(10, '+', 5));
console.log(calculator(10, '-', 5));
console.log(calculator(10, '*', 5));
console.log(calculator(10, '/', 5));
console.log(calculator(10, '%', 3));