//Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais,
//deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer
//um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.
//node ativ3.js no terminal pra usar
const readline = require("readline");
const valor = readline.createInterface({
  input: process.stdin,
  output: process.stdout });
valor.question("digite o valor de A: ", function(valorA) {
  valor.question("digite o valor de B: ", function(valorB) {
    valorA = Number(valorA);
    valorB = Number(valorB);
    let C;
    if (valorA === valorB) {
      C = valorA + valorB;
    } else {
      C = valorA * valorB;
    }
    console.log("o valor de C é:", C);
    leitor.close();
  });
});