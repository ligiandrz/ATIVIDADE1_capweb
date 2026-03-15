//Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em
//ordem decrescente.
//node ativ8.js no terminal pra usar
const readline = require("readline");
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout});
leitor.question("digite o primeiro número: ", function(num1) {
  leitor.question("digite o segundo número: ", function(num2) {
    leitor.question("digite o terceiro número: ", function(num3) {
      num1 = Number(num1);
      num2 = Number(num2);
      num3 = Number(num3);
      let numeros = [num1, num2, num3];
      numeros.sort(function(a, b) {
        return b - a; 
    });
      console.log("ordem decrescente:", numeros)
      leitor.close();
    });
  });
});