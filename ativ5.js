//Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário,
//calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para
//o Salário mínimo R$ 1.525).
// node ativ5.js no terminal pra usar
const readline = require("readline");
const valor = readline.createInterface({
  input: process.stdin,
  output: process.stdout });
valor.question("digite o valor do salário mínimo: ", function(salariomin) {
    salariomin= Number(salariomin);
valor.question("digite o valor do seu salário:", function(salario) {
    salario= Number(salario);
    let resultado = salario / salariomin;
    console.log("esse salário é equivalente a",resultado,"salários mínimos")
}); 
 });