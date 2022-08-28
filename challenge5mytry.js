// #7DaysOfCode - Lógica JS 5/7: Arrays e coleções

const categorias = [ 
    "Hortifruti",
    "Congelados",
    "Padaria",
    "Doces"
];
let novoItem = "";

let addItem = prompt("Vamos começar nossa lista! Deseja adicionar uma comida na sua lista de compras? Responda 'sim' ou 'não'.");
    if (addItem = 'sim') {
        novoItem = prompt("Qual comida você deseja inserir?");
    } else {
        alert(`Ok, não teremos lanche hoje...`)
    }

switch (prompt("Em qual categoria essa comida se encaixa? Digite 1 - 'Hortifruti', 2 - 'Congelados', 3 - 'Padaria', 4 - 'Doces'")) {
    case 1: categorias[1].push(novoItem);
    break;
    case 2: categorias[2].push(novoItem);
    break;
    case 3: categorias[3].push(novoItem);
    break;
    case 4: categorias[4].push(novoItem);
    break;
}   

let addMais = prompt("Tem mais alguma coisa para adicionar? Digite 'ok' em caso positivo.");
   while (msg == "ok") {
    let addItem = prompt("Qual?");
}

alert(`Lista de compras: \n  Hortifruti: ${Hortifruti}\n  Congelados: ${Congelados}\n  Doces: ${doces}\n  Padaria: ${Padaria}`);