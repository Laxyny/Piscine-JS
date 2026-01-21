// Écrire une fonction qui calcule la factorielle d'un nombre donné n.
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}


console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));