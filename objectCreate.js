

//Usando o Object.create(); para criar um novo objeto 

function User(nome, email){

    this.nome = nome;
    this.email = email;   
    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}
function Admin (role){
    User.call(this,'Juliana', 'j@j.com')
    this.role = role || 'estudante'
}

//criando um novo objeto herdando o prototipo de dois construtores
Admin.prototype  = Object.create(User.prototype);
const novoUser =  new Admin('admin')
console.log(novoUser.exibirInfos());
console.log(novoUser.role); 


// criando um novo objeto aparti de um objeto literal
const user = {
  init: function (nome,email){
    this.nome = nome;
    this.email = email;
    },
    
    exibirInfos: function(){
       return this.nome  
    }
}

const novoObjeto = Object.create(user);
novoObjeto.init("VANDER","vander@altino");
console.log(novoObjeto.exibirInfos());

//_______________________________________

const animal ={

    fazerBarulho: function(){
        console.log(this.barulho);
    }
};

const gato = Object.create(animal);
gato.barulho = "miau";

const gatoPersa = Object.create(animal);
gatoPersa.barulho = "miau suave";


gato.fazerBarulho();
gatoPersa.fazerBarulho();


