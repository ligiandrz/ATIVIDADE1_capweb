//2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par
//ou ímpar, positivo ou negativo.
//node ativ2.js no terminal pra usar
const readline = require("readline");
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout });
leitor.question("digite um número: ", function(numero) {
  numero= Number(numero);
  if (numero % 2 === 0) {
    console.log("o número é par");
  } else {
    console.log("o número é ímpar");
  }

  if (numero >= 0) {
    console.log("o número é positivo");
  } else {
    console.log("o número é negativo");
  }
  leitor.close();
});