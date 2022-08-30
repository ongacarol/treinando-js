//ATENÇÃO: como eu não especifiquei os números como Number, a soma de 3 e 4 dá 34!!! 
//usando o 'do...while', já que a primeira vez sempre vamos entrar
//se o texto lido for "sair", sair do loop e da calculadora

function somar(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtrair(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiplicar(num1, num2) {
    return Number(num1) * Number(num2);
}

function dividir(num1, num2) {
    return Number(num1) / Number(num2);
}

let operacao = "";
let num1;
let num2;

do {
    operacao = prompt("Vamos começar? Escolha qual operação deseja fazer: 'somar', 'subtrair', 'multiplicar', 'dividir' ou 'sair'.");
    while(operacao != "somar" && operacao != "subtrair" && operacao != "multiplicar" && operacao != "dividir" && operacao != "sair") {
        alert(`Operação não reconhecida!`)
        operacao = prompt("Escolha qual operação deseja fazer: 'somar', 'subtrair', 'multiplicar', 'dividir' ou 'sair'.");
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

} while(operacao === "somar" || operacao === "subtrair" || operacao === "multiplicar" || operacao === "dividir")
alert(`Até a próxima!`);