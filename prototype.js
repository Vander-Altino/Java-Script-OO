/* O prototype é uma propriedade especial que existe em todas as funções em JavaScript. Ela é usada para a
dicionar propriedades e métodos que serão compartilhados por todas as instâncias criadas 
a partir dessa função construtora. Isso permite a implementação de herança e 
compartilhamento de comportamentos entre objetos. */

//Definindo uma funcao construtora 

// Classe original  funcao construtora
function Veiculo(marca,ano) {
    this.marca = marca,
    this.ano = ano
}

// Adicionando um método ao protótipo da classe Veiculo
Veiculo.prototype.informacoes = function() {
    console.log(`Este veículo é da marca ${this.marca} e do ano : ${this.ano}`);
};

//Adicionando um novo atributo ao prototipo veiculo 
Veiculo.prototype.ano = '1997';

// Criando uma instância da classe Veiculo
const carro = new Veiculo("Toyota");

// Chamando o novo método
//console.log(carro.informacoes()); // Saída: "Este veículo é da marca Toyota." ou 
carro.informacoes();
