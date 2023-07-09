
/*Crie um método na classe Veiculo chamado obterDetalhes, que retorna uma string com as 
informações do veículo (marca e ano).

Crie um método na classe Carro chamado obterDetalhes, que sobrescreve o método na classe Veiculo
e retorna uma string com as informações do carro (marca, ano e número de portas).

Crie um objeto da classe Carro e exiba no console as informações detalhadas do carro utilizando o
 método obterDetalhes.*/ 

 class Veiculo{
    constructor(marca,ano){
        this.marca=marca;
        thie.ano=ano;
    }
    obterDetalhes(){
        console.log(`Veiculo marca ${this.marca}, do ano ${this.ano}.`)
    }
 }

 class Carro extends Veiculo{
    constructor(marca,ano,portas){
    super(marca,ano)
    this.portas=portas}
}