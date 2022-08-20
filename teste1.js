//Instanciando objetos com Classes
class Carro { 
    constructor (marca, modelo, ano, cor) {
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
        this.cor=cor;
    }
}

const gol = new Carro ("volks", "gol", 2011, "preto");
console.log(gol);

//Instanciando objetos com funções
function outroCarro (marca, modelo, ano, cor) {
    marca = marca,
    modelo = modelo,
    ano = ano,
    cor = cor
    
    return {marca, modelo, ano, cor} 
}

const celta = new outroCarro ("chevrolet", "celta", 2011, "colorido");
console.log(celta);
console.log(celta.cor);
