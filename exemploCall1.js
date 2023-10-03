function exibirInfos(){
    console.log(this.nome, this.email);
}

const user = {
    nome: 'Mariana',
    email: 'm@m.com'
 }


 exibirInfos.call(user);//simplesmente uma chamada 
 //para o Objeto user