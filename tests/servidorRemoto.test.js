jest.mock('../src/servidorRemoto.js', () => ({
  obterDados: jest.fn(() => ({
    nomeDoProfessor: 'Professor Mock',
    horarioDeAtendimento: '08:00 - 10:00',
    periodo: 'integral',
    sala: 2
  }))
}));
  
  const { obterDados } = require('../src/servidorRemoto');
  const AtendimentoProfessor = require('../src/AtendimentoProfessor');
  
  describe('Teste com mock para dados do servidor remoto', () => {
    test('Deve criar um objeto com dados mockados do servidor remoto', () => {
      const dados = obterDados(); // Simula o retorno do servidor
      const atendimento = new AtendimentoProfessor(dados);
      expect(atendimento.nomeDoProfessor).toBe('Professor Mock');
      expect(atendimento.predio).toBe(1); // Sala 2, predio 1
    });
  });
  