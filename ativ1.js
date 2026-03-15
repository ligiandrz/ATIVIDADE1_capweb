//1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma
//entre A e B é mostre se a soma é menor que C.
//node ativ1.js no terminal pra usar
const readline = require("readline");
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout });
leitor.question("digite o valor de A: ", function(A) {
  leitor.question("digite o valor de B: ", function(B) {
    leitor.question("digite o valor de C: ", function(C) {
      A = Number(A);
      B = Number(B);
      C = Number(C);

      let soma = A + B;
      console.log("A soma entre A e B é:", soma);

      if (soma < C) {
        console.log("a soma é menor que C");
      } else {
        console.log("a soma não é menor que C");
      }
      leitor.close();
    });
  });
});