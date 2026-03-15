//Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.
//node ativ6.js no terminal pra usar
const readline = require("readline");
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout });
leitor.question("digite um valor: ", function(valor) {
    valor= Number(valor);
    let reajuste = valor * 1.05 ;
    console.log("o valor após o reajuste é:",reajuste)
}); 