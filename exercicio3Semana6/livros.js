class livro {
    constructor(titulo,autor,anoPublicacao){
    this.titulo=titulo
    this.autor=autor
    this.anoPublicacao=anoPublicacao
    }
    obterInformacoes(){
        console.log(`O livro ${this.titulo} do autor ${this.autor} foi publicado no ano ${this.anoPublicacao}.`)
    }
}
let livro1= new livro("Moby Dyck","Herman Melville",1851)    
let livro2= new livro("O Senhor dos Anéis","J.R.R. Tolkien",1955)
let livro3= new livro("1984","George Orwell",1949)
livro1.obterInformacoes()
livro2.obterInformacoes()
livro3.obterInformacoes()
