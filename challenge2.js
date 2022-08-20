//#7DaysOfCode - Lógica JS 2/7: VARIÁVEIS

let name = prompt("Qual seu nome?");
let age = prompt("Quantos anos tem?");
let language = prompt("Qual linguagem está aprendendo?")
// const msg = ("Olá " + name + ", sua idade é " + age + " e já está aprendendo " + language + "!");
const msg = `"Olá ${name}, sua idade é ${age} e já está aprendendo ${language}!"`; //ATENCAO, USAR CRASE
alert(msg);

const gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)
    if (gosta == 1) {
        alert ("Muito bom! Continue estudando e você terá muito sucesso.")
    } else {
        alert ("Ahh que pena... Já tentou aprender outras linguagens?")  
    }