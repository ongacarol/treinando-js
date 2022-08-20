
//o get retorna um valor; em contrapartida, o set define um valor para determinado atributo.

///Getters e Setters nas Classes
class Carro { 
    constructor (marca, modelo, ano, cor) {
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
        this.cor=cor;
    }

    get _marca() {return this.marca;}
    get _modelo() {return this.modelo;}
    get _ano() {return this.ano;}
    get _cor() {return this.cor;}

    set _setModelo(novoModelo) {this.modelo = novoModelo;}
    set _setAno(novoAno) {this.ano = novoAno;}

}

const gol = new Carro ("volks", "gol", 2011, "preto");
gol._setAno = 2022;
console.log(gol._ano);

///Getters e Setters nas Funções

function outroCarro (marca, modelo, ano, cor) {
    marca = marca,
    modelo = modelo,
    ano = ano,
    cor = cor
    
    this.getMarca = function() {
        return marca;
    };

    this.setMarca = function(novaMarca) {
        marca = novaMarca;
    };
}

const celta = new outroCarro ("chevrolet", "celta", 2011, "colorido");
console.log(celta.getMarca());
celta.setMarca("Mitsubishi");
console.log("A marca agora é:");
console.log(celta.getMarca());
