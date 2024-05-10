//Para rodar o codigo pode usar o link abaixo e colar o codigo
//https://www.typescriptlang.org/play/

class Atendimento {
  private nome: string;
  private fila: String[] = ["Julia", "Diego"];

  constructor(nome: string) {
    this.nome = nome;

    if (this.fila.length == 0) {
      console.log(`${this.nome}, você já pode ser atendido!`);
    } else {
      this.entrarNaFila();
    }
  }

  entrarNaFila() {
    console.log(`Olá ${this.nome}, você acabou de entrar na fila.`);
    this.fila.unshift(this.nome);
    this.statusFila();
  }

  statusFila() {
    let ultimoNome = this.fila[this.fila.length - 1];
    this.fila.pop();
    let count = 0;

    let interval = setInterval(() => {
      console.clear();
      console.log(
        `[${this.fila.join()}] Ultimo nome chamado: ${ultimoNome} Tempo:${count}/10`
      );

      if (count === 10) {
        clearInterval(interval);
        count = 0;
        if (this.fila[this.fila.length - 1] == this.nome) {
          clearInterval(interval);
          return this.saidaFila(); // Chamada apenas se for o primeiro da fila
        } else {
          this.statusFila();
        }
      }

      count++;
    }, 1000);
  }

  saidaFila() {
    console.clear();
    return console.log(this.nome + ", você já pode ser atendido!");
  }
}

new Atendimento("Jonathan");
