
/* Que chamamos de polimorfismo a alteração de um método de uma classe para que, 
na subclasse, o método tenha a mesma assinatura porém um comportamento diferente 
do método executado no contexto da superclasse;
Que existe uma série de princípios de design de código pensados para a programação
orientada a objetos, que estão compilados no acrônimo SOLID. */
/* 
class Animal {
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Au,Au");
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log("Miau");
    }
  }
  
  function petMakesSound(pet){ //Quando chamamos a função petMakesSound() com objetos Dog e Cat, 
     pet.makeSound();     // o polimorfismo entra em ação e chama o método makeSound() apropriado para cada objeto
  }
  
  const dog = new Dog();
  const cat = new Cat();

  petMakesSound(dog);
  petMakesSound(cat);

  //____Exemplo2__________________________________________________
  
  class Veiculo {
    acelerar() {
      console.log("O veículo está acelerando.");
    }
  }
  
  class Carro extends Veiculo {
    acelerar() {
      console.log("O carro está acelerando.");
    }
  }
  
  class Moto extends Veiculo {
    acelerar() {
      console.log("A moto está acelerando.");
    }
  }
  
  function testarAceleracao(veiculo) {
    veiculo.acelerar();
  }
  
  const carro = new Carro();
  const moto = new Moto();
  
  testarAceleracao(carro);  // Saída: O carro está acelerando.
  testarAceleracao(moto);   // Saída: A moto está acelerando.

  */
  
  //__Exemplo com Interface_________________________________________________________

  /**
 * 
 */
class SomInterface {
    /**
     * Emite um som.
     */
    emitirSom() {
      throw new Error("Método 'emitirSom' deve ser implementado.");
    }
  }
  
  class Cachorro extends SomInterface {
    emitirSom() {
      console.log("O cachorro está latindo.");
    }
  }
  
  class Gato extends SomInterface {
    emitirSom() {
      console.log("O gato está miando.");
    }
  }

  class Papagaio extends SomInterface {
    exibir(){
        console.log("O papagaio esta falando");
    }  
  }

  
  function fazerBarulho(animal) {
    if (!(animal instanceof SomInterface)) {
      throw new Error("O objeto deve implementar a interface SomInterface.");
    }
    animal.emitirSom();
  }
  
  const cachorro = new Cachorro();
  const gato = new Gato();
  const papagaio = new Papagaio();
  
  fazerBarulho(cachorro);  // Saída: O cachorro está latindo.
  fazerBarulho(gato);      // Saída: O gato está miando.
  