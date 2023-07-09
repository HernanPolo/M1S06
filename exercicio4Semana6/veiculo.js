class Veiculo{
    constructor(marca,ano){
        this.marca=marca;
        this.ano=ano;
    }
    obterDetalhes(){
        console.log(`Veiculo marca ${this.marca}, do ano ${this.ano}.`)
    }
 }

 class Carro extends Veiculo{
    constructor(marca,ano,portas){
    super(marca,ano)
    this.portas=portas}
    obterDetalhes(){
        console.log(`Veiculo marca ${this.marca}, do ano ${this.ano}, tem ${this.portas} portas.`)
    }
}
let novoCarro = new Carro("ford",2015,5)
novoCarro.obterDetalhes()