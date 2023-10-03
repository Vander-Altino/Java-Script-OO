
//Usando o new como construtor para criar um novo
//objeto com prototipo em User 

//As funções construtoras devem ser chamadas com o operador 
//new para criar instâncias do objeto User:


//funcao construtora
function User(nome, email){

    this.nome = nome;
    this.email = email;   

    this.exibirInfos = function(){

        return `${this.nome}, ${this.email}`
    }
}
const novoUser = new User ('Vander' , 'v@v.com');
console.log(novoUser.exibirInfos());


