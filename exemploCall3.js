/* Temos uma função que monta uma determinada mensagem a partir dos parâmetros 
nome e email. Se quiséssemos vincular os dados da mensagem a um objeto com dados de 
usuários, podemos usar call() passando como primeiro parâmetro o contexto a ser considerado 
como this (no caso, objeto user) e a partir do 
segundo parâmetro definimos quais os argumentos. */


function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`)
}

 const user = {
  nome: 'Mariana',
  email: 'm@m.com',
  executaFuncao: function(fn) {
    fn.call(user, this.nome, this.email)
 }
}

user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

/* Nesse caso, a função que será executada também está sendo
 passada como parâmetro de executaFuncao e 
usamos call() para “chamar” a função com um contexto
 (this) específico e também argumentos específicos. */