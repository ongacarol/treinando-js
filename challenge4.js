// #7DaysOfCode - Lógica JS 4/7: 👩🏽‍💻 Mais loops e randomização

let number = Math.floor(Math.random()*11); //multipliquei por 11 para dar um valor entre 0 e 10

let chute = prompt("Escolha um número de 0 a 10")
if (chute === number) {
    alert(`Parabéns! Você acertou!`)
} else if (chute !== number) {
    alert(`IEita, você errou... Tem mais 2 chances!`)
}

let segundaChance = prompt("Escolha outro número!")
if (segundaChance == number) {
    alert(`Parabéns! Você acertou!`)
} else {
    alert(`Ixi, você errou... Tem mais 1 chance!`)
}

let terceiraChance = prompt("Escolha outro número!")
if (terceiraChance == number) {
    alert(`Parabéns! Você acertou!`)
} else {
    alert(`Você perdeu! O número correto é ${number}`)
}
