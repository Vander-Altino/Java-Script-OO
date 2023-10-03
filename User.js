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

    //atribuntos as propiedades em um Array
    //get infos(){
          //return [this.#nome,this.#email,this.#nascimento,this.#role,this.#ativo];   
    //}

    get nome(){
        return this.#nome;
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

    //exibirInfos(){ 
        
        //return `nome: ${nome} , email: ${email} , nascimento: ${nascimento} ,role: ${role} ,ativo: ${ativo}`;
    //}

    //limitando nome em Vander caso a alterao for diferente 
        set nome(novoNome) {
           if(novoNome === ''){
                throw new Error('formato nao suportado')
           }
           let [nome,...sobrenome] = novoNome.split("")
           sobrenome = sobrenome.join('')
           this.#nome = nome
           this.#sobrenome = sobrenome
      }
        
    

      




 
    

    



//const novoUser = new User ('Julia','j@j.com','1990');

//console.log(novoUser);
//console.log(novoUser.exibirInfos());

//Verificando se novoUser esta usando User como prototipo
//console.log(User.prototype.isPrototypeOf(novoUser));