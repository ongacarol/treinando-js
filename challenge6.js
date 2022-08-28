// #7DaysOfCode - Lógica JS 6/7: 👩🏽‍💻 Remoção de Arrays


let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let listaDeCompras = ['frutas', 'laticinios', 'doces', 'congelados'];

let adicionarMais = "sim";
while(adicionarMais != "não") {
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while(adicionarMais != "sim" && adicionarMais != "não") {
        alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar ou remover uma comida na lista de compras? Responda 'adicionar' ou 'remover'.")
    }

    if (adicionarMais === "remover") {
        if (!listaDeCompras.includes(comida)) {
            alert(`Não foi possível encontrar o item dentro da lista!`)
        }           

    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticínios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert(`"Essa categoria não foi pré-definida."`)
    }
}

alert(`Lista de compras: \n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);