let aluno = {
  nome: "Nome Aluno",
  qtdefaltas: 3,
  notas: [7, 7, 7],
  calcularMedia: function() {
    let somaNotas = 0;
    let totalNotas = this.notas.length
    for (let n of this.notas) {
      somaNotas = somaNotas + n
    }
    return somaNotas / totalNotas
  },
  faltas: function() {
    this.qtdefaltas++
  }
}


function NovoAluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;
}

const aluno1 = new NovoAluno("Mateus", 0, [10, 10, 10])
const aluno2 = new NovoAluno("Renato", 0, [10, 10, 10])
const aluno3 = new NovoAluno("Nathany", 0, [10, 10, 10])
const aluno4 = new NovoAluno("Gabrielle", 0, [10, 10, 10])


let curso = {
  nomeCurso: "curso",
  notaAprovacao: 6,
  faltasMaximas: 3,
  listaEstudantes: [],
  novoAluno: function(aluno) {
    this.listaEstudantes.push(aluno)
  },

  mediaAlunos:function(notas){
    let somaNotas = 0;
    let totalNotas = notas.notas.length
    for (let n of notas.notas) {
      somaNotas = somaNotas + n
    }
    return somaNotas / totalNotas

  },
  aprovacao: function(media, faltas) {

    if (this.faltasMaximas > faltas) {
      if (this.notaAprovacao <= media) {
        return true
      }
      else {
        return false
      }

    }
    else if (this.faltasMaximas == faltas) {
      if ((this.notaAprovacao +((this.notaAprovacao / 100) * 10)) <= media) {
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }

  },
  listaAprovados:function(){
    
    let resultadoAlunos = []
    for(let a of this.listaEstudantes){
        resultadoAlunos.push(this.aprovacao(this.mediaAlunos(a), a.faltas))
    }

    return resultadoAlunos


  }

}


curso.novoAluno(aluno1)
curso.novoAluno(aluno2)
curso.novoAluno(aluno3)
curso.novoAluno(aluno4)
console.log(curso.listaAprovados())




