/*O conceito de encapsulamento, que é a ação (ou ações) de
 “esconder” atributos de uma classe, para evitar acesso
 indevido a atributos importantes ou dados sensíveis, ou que
 métodos sejam utilizados de forma errada;
 Como utilizar a sintaxe de atributos privados do JavaScript,
 através do prefixo #, para que a própria linguagem de
 programação faça a “segurança” da classe, impedindo o
 acesso externo a propriedades e métodos assinalados como
 privados com este prefixo;
 A criar métodos assessors para “expôr” e permitir acesso e
 modificação de propriedades de forma controlada e restrita,
 através do uso das funções get para retornar dados
 specíficos e set para definir dados específicos.

*/

export default class User {
    //sempre declaramos a variavel privada fora do construtor
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome,sobrenome,email,nascimento,role,ativo = true){
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }  
    
    //exibirInfos(){   
        //return `nome: ${nome} , email: ${email} , nascimento: ${nascimento} ,role: ${role} ,ativo: ${ativo}`;
    //}

    /*A questão agora é que nome e sobrenome devem ser 
    unidos no getter (para serem “mandados” para fora 
    da classe como um único dado) e separados no setter,
    pois o método sempre receberá um nome completo e #nome e #sobrenome são propriedades diferentes 
    que estão salvas no banco em campos separados.*/
        set nome(novoNome) {
           if(novoNome === ''){
                throw new Error('formato nao suportado')
           }
           let [nome,...sobrenome] = novoNome.split(' ')//Split - separa   utilizando espaco um elemento string em um novo array
           sobrenome = sobrenome.join(' ')//join combia a string dividida por espaco e uma unica frase
           this.#nome = nome
           this.#sobrenome = sobrenome
      }


    get nome(){
        return this.#nome;
    }
    get sobrenome(){
        return this.#sobrenome
    }
    get email(){
        return this.#email;
    }

    get nascimento(){
        return this.#nascimento;
    }

    get role(){
        return this.#role;
    }

    get ativo(){
        return this.#ativo;
    }

    //atribuntos as propiedades em um Array
    //get infos(){
          //return [this.#nome,this.#email,this.#nascimento,this.#role,this.#ativo];   
    //}

 }

    const novoUser = new User ('Vander','Albuquerque Altino','v@v.com','2021-12-01');
    console.log(novoUser.nome);
   novoUser.nome = 'Vander Albuquerque Altino';
    console.log(novoUser.nome);
    console.log(novoUser.sobrenome);