
//Heranca de Prototipos 

const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role:"estudande ",
    ativo: true,
    exibirInfos : function(){
        console.log(this.nome,this.email);
    }
    
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: " admin",
    criarCurso(){
         console.log('curso criado');
    }
}

        //(Primeiro quem ira herdar,  segundo objeto que ele irar pegar o prototipo);
Object.setPrototypeOf(admin,user);

admin.criarCurso();
admin.exibirInfos();
user.exibirInfos();

// nesse caso ele consegue executar o metodo exibirInfos do objeto user

   
//user.exibirInfos();

//const exibir = user.exibirInfos; atribuindo a funcao de um 
//objeto a uma variavel;
    
//const exibir = function(){
    //console.log(this.nome);    
//}

//const exibirNome = exibir.bind(user1);
//exibirNome();
//exibir();

//function exibir(){
   //console.log(this.role); 
//}


//Se você precisar de mais complexidade ou de um comportamento específico de this, 
//pode ser necessário usar uma função tradicional e nao uma arrow function.
const exibir1 = () => { 
    console.log(this.nome) 
};// nesse caso nao ira funcionar 



