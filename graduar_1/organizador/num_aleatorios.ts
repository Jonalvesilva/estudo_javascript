//Para rodar o codigo pode usar o link abaixo e colar o codigo
//https://www.typescriptlang.org/play/

class ChegadaClientes {
  private lambd: number;

  constructor(lambd: number) {
    this.lambd = lambd;
  }

  gerarChegada(tempoSimulacao: number) {
    const temposChegada: number[] = [];
    let t: number = 0;

    while (t < tempoSimulacao) {
      t += this.gerarTempoChegada();
      if (t < tempoSimulacao) {
        temposChegada.push(t);
      }
    }

    return temposChegada;
  }

  gerarTempoChegada() {
    return -Math.log(1 - Math.random()) / this.lambd;
  }
}

// Exemplo de uso
const lambd = 0.1; // Taxa média de chegada de clientes por unidade de tempo
const tempoSimulacao = 100; // Tempo total de simulação
const chegadaClientes = new ChegadaClientes(lambd);
const temposChegada = chegadaClientes.gerarChegada(tempoSimulacao);
console.log("Tempos de chegada dos clientes:", temposChegada);
