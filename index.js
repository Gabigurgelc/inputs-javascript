// Nesse arquivo usei o plugin readline-sync para entrada de dados, já que utilizização de inputs não é nativa do javascript.

//a linha 04 importa o plugin
import entradaDados from 'readline-sync';

//Utilizando o plugin para entrada de dados
let nome = entradaDados.question("Digite seu nome: ");

//saída de dados:
console.log("Olá", nome);