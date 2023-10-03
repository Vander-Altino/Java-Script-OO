//Uma factory function (“função fábrica”) é como chamamos, 
//em JavaScript, uma função que retorna um objeto.
function criarUser(nome,email){
  return {
        nome,
        email,
        exibirInfos : function(){
            console.log(`${nome},${email}`);
        }
    };
}

const newUser = criarUser("Vander","vander@altino");
console.log(newUser);
newUser.exibirInfos();//primeira forma de chamar 
console.log(newUser.exibirInfos());//segunda forma de chamar




//No caso da factory function não há perda de contexto na execução dos métodos internos

//____________________________________________________________________________________________

//As factory functions são diferentes das funções construtoras. Veja um exemplo
//de função construtora, como fizemos anteriormente durante a aula:
//As funções construtoras devem ser chamadas com o operador new para 
//criar instâncias do objeto User
function user(nome,email){

    this.nome = nome,
    this.email = email,
    this.exibirInfo = function(){
        console.log(`${nome},${email}`);
    }

}

const NovoUser = new user('Julia','ju@gmail.com');///Operador ****NEW
console.log(NovoUser);
NovoUser.exibirInfo();
console.log(NovoUser.exibirInfo());