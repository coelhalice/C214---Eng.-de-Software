class AtendimentoProfessor {
    constructor(dados) {
        this.nomeDoProfessor = dados.nomeDoProfessor;
        this.horarioDeAtendimento = dados.horarioDeAtendimento;
        this.periodo = dados.periodo;
        this.sala = dados.sala;
        this.predio = this.determinarPredio(dados.sala);
    }

    // Método para determinar o prédio de acordo com a sala
  determinarPredio(sala) {
    if (sala >= 1 && sala <= 5) {
      return 1;
    } else if (sala >= 6 && sala <= 10) {
      return 2;
    } else {
      throw new Error('Sala inválida');
    }
  }
}