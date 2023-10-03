/*Quando criamos uma classe, é possível designar que
determinados métodos sejam estáticos. Ou seja, estes métodos
não são inicializados quando criamos uma nova instância de
classe (usando new), mas sim a partir da própria classe.

Por exemplo:
*/ 

/*
class User {
    constructor(nome, email, cpf) {
      this.nome = nome
      this.email = email
      this.cpf = cpf
    }
  
    exibirInfos() {
      return `${this.nome}, ${this.email}, ${this.cpf}`
    }
 */
  

/*No exemplo acima, o método exibirInfos() não é um método
estático, e só é possível executá-lo a partir de uma instância da
classe User:*/


//const novoUser = new User('Carol', 'c@c.com', '12312312312')
//console.log(novoUser.exibirInfos()) //Carol, c@c.com, 12312312312

/* Se tentarmos executar o método sem 
associá-lo a nenhuma instância da classe, recebemos um erro:*/

///console.log(User.exibirInfos())
  //TypeError: User.exibirInfos is not a function


/* Agora vamos refatorar a classe, declarando exibirInfos() 
como sendo um método estático: */

class User {
    constructor(nome, email, cpf){
      this.nome = nome
      this.email = email
      this.cpf = cpf
    }
  
    static exibirInfos() {
      return `${this.nome}, ${this.email}, ${this.cpf}`
    }
  }
  
//Ao executarmos, recebemos o seguinte retorno:

console.log(User.exibirInfos())
  //undefined, undefined, undefined

/*os métodos estáticos em JavaScript servem para fornecer funcionalidades relacionadas a uma classe que não 
dependem do estado de instância e são chamados diretamente na própria classe. 
Eles são úteis para utilitários, operações auxiliares e construtores alternativos

Mantivemos o método exibirInfos() como estava e criamos um novo método, 
estático, chamado exibeNome(). Porém,já vimos que métodos estáticos não 
podem ser executados a partir de uma instância, 
então como isso vai funcionar?*

*/ 

class User {
    constructor() {
      this.nome = 'Camila'
      this.email = 'c@c.com'
      this.cpf = '12312312312' 
    }
  
    exibirInfos() {
      return `${this.nome}, ${this.email}, ${this.cpf}`
    }
  
    static exibeNome(nome) { //metodo statico so e possivel ser utilizado dentro da classe 
      return nome
    }
  }

  const novoUser = new User('van','van@van', '65345345');
  const userNome = novoUser.nome;

  console.log(User.exibeNome(userNome));

  //Na realidade, como exibeNome() é um método estático, 
  //é possível executá-lo 
  //passando qualquer nome como parâmetro:

  console.log(User.exibeNome('Jaqueline')) //Jaqueline
