 //Para fazer a própria máquina escolher sozinha o número a ser adivinhado: Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)   
 
 //Solução (com número fixo)
const numeroAdivinhacao = 7;
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}

//Solução (com número randômico)
const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}

//outra opção que achei interessante
var teste = Math.floor(Math.random() * (10 - 0 + 1)) + 1
var tentativas = 3

while(tentativas > 0){
var num = prompt("digite um numero entre 1 e 10")
if(num == teste){
alert("acertou")
break
}else{
alert("Errou!")
}
tentativas--
alert(Voce tem ${tentativas} tentativas)
}
alert(O numero secreto era: ${teste})