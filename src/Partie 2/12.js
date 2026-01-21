function fizzBuzz() {
  for (let i = 1; i <= 30; i++) {
    // On teste d'abord la condition double (3 ET 5)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();