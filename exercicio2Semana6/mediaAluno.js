class aluno{
    constructor(nome,nota1,nota2){
    this.nome=nome
    this.nota1=nota1
    this.nota2=nota2
    }
}

let aluno1= new aluno('Maria',8,5)
let aluno2= new aluno("João",7,9)
let aluno3= new aluno('Hernan',10,9)
let aluno4= new aluno("Mauricio",5,8)

const alunos=[aluno1,aluno2,aluno3,aluno4]

const mediaAluno = alunos.map(aluno => {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    return {
      nome: aluno.nome,
      media: media
    };
  });
  //console.log(mediaAluno)
  let mediaOrdenada = mediaAluno.sort((a,b)=> b.media-a.media)
 return console.log(mediaOrdenada)
