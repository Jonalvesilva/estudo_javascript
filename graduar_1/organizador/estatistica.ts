//Para rodar o codigo pode usar o link abaixo e colar o codigo
//https://www.typescriptlang.org/play/

// Nome, tempo de espera na fila e tempo de atendimento
//Tempo de observação: 60 minutos;

const fila: [string, number, number][] = [
  ["José", 5, 20],
  ["Angélica", 3, 14],
  ["Ricardo", 7, 19],
  ["Elias", 12, 23],
];

class Simulador {
  private fila: [string, number, number][];

  constructor(fila: [string, number, number][]) {
    this.fila = fila;
  }

  tempoMedioEspera() {
    let media: number = 0;
    for (let cliente of this.fila) {
      media += cliente[1];
    }
    return media / this.fila.length;
  }

  tempoMedioNoSistema() {
    let tempo = 0;
    for (let cliente of this.fila) {
      tempo += cliente[1] + cliente[2];
    }
    return tempo / this.fila.length;
  }

  taxaOcupacao() {
    let tempoAtendimento = 0;
    let tempoObservacao = 60;

    for (let cliente of this.fila) {
      tempoAtendimento += cliente[2];
    }
    return tempoAtendimento / tempoObservacao;
  }
}

const simulacao = new Simulador(fila);
console.log(
  "Tempo médio de espera na fila: ",
  simulacao.tempoMedioEspera(),
  " minutos"
);
console.log(
  "Tempo médio de espera no sistema: ",
  simulacao.tempoMedioNoSistema(),
  " minutos"
);
console.log(
  "Taxa de ocupação do servidor: ",
  (simulacao.taxaOcupacao() * 100).toFixed(2) + "%"
);
