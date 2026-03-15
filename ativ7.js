//Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são
//VERDADEIRO ou FALSO.
//node ativ7.js no terminal pra usar
const readline = require("readline");
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout});
leitor.question("digite o primeiro valor: ", function(valor1) {
  leitor.question("digite o segundo valor: ", function(valor2) {
    valor1 = valor1 === "true";
    valor2 = valor2 === "true";
    if (valor1 && valor2) {
      console.log("Ambos são verdadeiros");
    } else if (!valor1 && !valor2) {
      console.log("Ambos são falsos");
    } else {
      console.log("um é verdadeiro e o outro é falso");
    }
    leitor.close();
  });
});