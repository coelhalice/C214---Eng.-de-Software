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

  horarioDeAtendimentoValido(){
    if(!this.horarioDeAtendimento  || this.horarioDeAtendimento.lenght < 13) throw new Error('Horário de atendimento não informado');	
    if(parseInt(this.horarioDeAtendimento.slice(0,2)) < 8 || parseInt(this.horarioDeAtendimento.slice(0,2)) > 21) throw new Error('Horário de atendimento inválido');
  }
}

module.exports = AtendimentoProfessor;