const area = prompt("Olá! Você quer seguir para 'Front-End' ou 'Back-End'? Digite o nome da área:");
let linguagem = "";
    if (area === "Front-End") {
        linguagem = prompt("Você quer aprender React ou Vue?");
    } else if (area === "Back-End") {
        linguagem = prompt("Você quer aprender C# ou Java?");
    } else {
        alert("Você não inseriu uma área válida!");
    }

const futuro = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
    if (futuro == 1) {
        alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
    } else if (futuro == 2) {
        alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
    } else {
        alert("Você não inseriu um valor válido.");
    }

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
   while (msg === "ok") {
        let novaTecnologia = prompt("Qual?");
        alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
        msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender?")
        const area = prompt("Olá! Você quer seguir para Front-End ou Back-End?");
let linguagem = "";
    if (area === "Front-End") {
        linguagem = prompt("Você quer aprender React ou Vue?");
    } else if (area === "Back-End") {
        linguagem = prompt("Você quer aprender C# ou Java?");
    } else {
        alert("Você não inseriu uma área válida!");
    }

const futuro = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
    if (futuro == 1) {
        alert(`Continue de especializando em ${linguagem} e para dominar a área de ${area}!`);
    } else if (futuro == 2) {
        alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
    } else {
        alert("Você não inseriu um valor válido.");
    }

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
   while (msg == "ok") {
        let novaTecnologia = prompt("Qual?");
        alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
        msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
    };
    }