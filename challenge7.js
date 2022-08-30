//#7DaysOfCode - Lógica JS 7/7: Funções em Javascript

function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

let operacao = "";
let num1;
let num2;
let result = "";

do {
    operacao = prompt("Vamos começar? Escolha qual operação deseja fazer: 'somar', 'subtrair', 'multiplicar', 'somar' ou 'sair'.");
    while(operacao != "somar" && operacao != "subtrair" && operacao != "multiplicar" && operacao != "dividir" && operacao != "sair") {
        alert(`Operação não reconhecida!`)
        operacao = prompt("Vamos começar? Escolha qual operação deseja fazer: 'somar', 'subtrair', 'multiplicar', 'somar'.");
    }

    if (operacao === "sair") {
        break;
    }   

    num1 = prompt("Digite um número:");
    num2 = prompt("Digite o segundo número:");

    switch(operacao){
        case "somar":
            alert(`O resultado da operação ${operacao} é ${somar(num1, num2)}.`);
            break;
        case "subtrair":
            alert(`O resultado da operação ${operacao} é ${subtrair(num1, num2)}.`);
            break;   
        case "multiplicar":
            alert(`O resultado da operação ${operacao} é ${multiplicar(num1, num2)}.`);
            break;  
        case "dividir":
            alert(`O resultado da operação ${operacao} é ${dividir(num1, num2)}.`);
            break;   
        }

} while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")
alert(`Até a próxima!`);