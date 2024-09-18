// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi
  const heroi1 = new Heroi('Gandalf', 300, 'mago');
  const heroi2 = new Heroi('Arthur', 35, 'guerreiro');
  const heroi3 = new Heroi('Bruce', 28, 'monge');
  const heroi4 = new Heroi('Kakashi', 30, 'ninja');
  
  // Chamando o método atacar para cada herói
  heroi1.atacar(); // Saída: O mago atacou usando magia
  heroi2.atacar(); // Saída: O guerreiro atacou usando espada
  heroi3.atacar(); // Saída: O monge atacou usando artes marciais
  heroi4.atacar(); // Saída: O ninja atacou usando shuriken
  