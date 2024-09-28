const AtendimentoProfessor = require('../src/AtendimentoProfessor');

const dados = {
    nomeDoProfessor: 'Professor A',
    horarioDeAtendimento: '10:00 - 12:00',
    periodo: 'integral',
    sala: 3
  };
const atendimento = new AtendimentoProfessor(dados);


console.log('Horario de Atendimento: ',atendimento.horarioDeAtendimentoValido('10:00'))
console.log('Predio: ',atendimento.determinarPredio('5'));