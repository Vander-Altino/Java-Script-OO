import User from "./User.js";

export default class Admin extends User{

    constructor(nome,email,nascimento,role = 'admin',ativo = true){
         super(nome,email,nascimento,role,ativo)
   } 
    
    criarCurso(nomeDoCurso,vagas){
        return ` Curso de ${nomeDoCurso} criadp com ${vagas} vagas`
    }

    nomeAdmin(){
       return `${this.nome}`;
    }
}



//console.log(novoAdmin);
//console.log(novoAdmin.exibirInfos());