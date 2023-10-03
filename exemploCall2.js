//usando Parametros

function user(nome, email) {
    this.nome = nome;
    this.email = email;
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email);
    }
   }
   
   const newUser = new user('Vander', 'v@a.com')

// Outro objeto 
   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }


newUser.exibeInfos();//
newUser.exibeInfos.call(outroUser); /*O método call() executa a função passando valores e parâmetros 
para serem usados como contexto do this. 
Ou seja, é possível atribuir um this diferente 
do contexto atual ao executar a função.
usando o metodo de User para exibir 
outro objeto usando a chamada da funcao de newUser */