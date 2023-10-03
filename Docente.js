// todas as classes seguem o explicitamente as 
//regras do ***Strict Mode ****


//1-Criando uma novo objeto importando User como super classe 
import User from "./User.js";

export default class Docente extends User{
    constructor(nome,email,nascimento,role = 'docente',ativo = true ){
        super(nome,email,nascimento,role) 
    }
 
    aprovarEstudante(estudante, curso){
        return `O Aluno ${estudante} passou no curso ${curso}`;
    }
}

//2 - criando o objeto professor da classe docente 
const professor = new Docente('Mariana', 'm@m.com', '2021-02-01');

//console.log(professor);
//console.log(professor.aprovarEstudante('juliana' , 'JS'))

//3 - exibir Informacoes da classe User
//console.log(professor.exibirInfos());

//4 -adicionando um novo atributo a classe Docente utilizando Prototype
Docente.prototype.nomeEscola = 'Alura' ;

//5 - adicionando um novo metodo
Docente.prototype.exibirNomeEscola = function(){
    return `Escola : ${this.nomeEscola}`
}

//6 - chamando o novo metodo, os metodos e classes
//nao sao ****hoisting **** elas devem ser declaradas 
//primeiro para poderem ser chamadas.
//console.log(professor.exibirNomeEscola());