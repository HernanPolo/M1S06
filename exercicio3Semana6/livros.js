class livro {
    constructor(titulo,autor,anoPublicacao){
    this.titulo=titulo
    this.autor=autor
    this.anoPublicacao=anoPublicacao
    }
    obterInformacoes(){
        console.log(`O livro ${this.titulo} do autor${this.autor} foi publicado no ano ${this.anoPublicacao} .`)
         }
}
    