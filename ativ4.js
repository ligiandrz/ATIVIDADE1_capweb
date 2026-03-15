//Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.
//node ativ4.js no terminal pra usar
const readline = require("readline");
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout });
leitor.question("digite um número: ", function(numero) {
  numero= Number(numero);
  if (numero % 1 === 0) {
    let antecessor= numero - 1;
    let sucessor= numero + 1;
    console.log("o seu antecessor é:", antecessor);
    console.log("o seu sucessor é:", sucessor);
  } else {
        console.log("o numero não é um valor inteiro");
      }
 });