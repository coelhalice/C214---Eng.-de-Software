const AtendimentoProfessor = require('../src/AtendimentoProfessor');

describe('Teste de sucesso para a classe AtendimentoProfessor', () => {
  test('Deve criar um objeto válido com a sala entre 1 e 5', () => {
    const dados = {
      nomeDoProfessor: 'Professor A',
      horarioDeAtendimento: '10:00 - 12:00',
      periodo: 'integral',
      sala: 3
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.predio).toBe(1); // Sala 3, predio 1
  });

  test('Deve criar um objeto válido com a sala entre 6 e 10', () => {
    const dados = {
      nomeDoProfessor: 'Professor B',
      horarioDeAtendimento: '14:00 - 16:00',
      periodo: 'noturno',
      sala: 7
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.predio).toBe(2); // Sala 7, predio 2
  });

  test('Deve criar um objeto válido com sala 1 e predio 1', () => {
    const dados = {
      nomeDoProfessor: 'Professor C',
      horarioDeAtendimento: '09:00 - 11:00',
      periodo: 'integral',
      sala: 1
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.predio).toBe(1); // Sala 1, predio 1
  });

  test('Deve criar um objeto válido com sala 5 e predio 1', () => {
    const dados = {
      nomeDoProfessor: 'Professor D',
      horarioDeAtendimento: '15:00 - 17:00',
      periodo: 'noturno',
      sala: 5
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.predio).toBe(1); // Sala 5, predio 1
  });

  test('Deve criar um objeto válido com sala 6 e predio 2', () => {
    const dados = {
      nomeDoProfessor: 'Professor E',
      horarioDeAtendimento: '08:00 - 10:00',
      periodo: 'integral',
      sala: 6
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.predio).toBe(2); // Sala 6, predio 2
  });

  test('Deve criar um objeto válido com sala 10 e predio 2', () => {
    const dados = {
      nomeDoProfessor: 'Professor F',
      horarioDeAtendimento: '13:00 - 15:00',
      periodo: 'integral',
      sala: 10
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.predio).toBe(2); // Sala 10, predio 2
  });

  test('Deve criar um objeto com nome do professor correto', () => {
    const dados = {
      nomeDoProfessor: 'Professor G',
      horarioDeAtendimento: '12:00 - 14:00',
      periodo: 'noturno',
      sala: 4
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.nomeDoProfessor).toBe('Professor G');
  });

  test('Deve criar um objeto com horário de atendimento correto', () => {
    const dados = {
      nomeDoProfessor: 'Professor H',
      horarioDeAtendimento: '09:00 - 11:00',
      periodo: 'integral',
      sala: 2
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.horarioDeAtendimento).toBe('09:00 - 11:00');
  });

  test('Deve criar um objeto com período correto', () => {
    const dados = {
      nomeDoProfessor: 'Professor I',
      horarioDeAtendimento: '16:00 - 18:00',
      periodo: 'integral',
      sala: 9
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.periodo).toBe('integral');
  });

  test('Deve criar um objeto com sala correta', () => {
    const dados = {
      nomeDoProfessor: 'Professor J',
      horarioDeAtendimento: '08:00 - 10:00',
      periodo: 'noturno',
      sala: 8
    };
    const atendimento = new AtendimentoProfessor(dados);
    expect(atendimento.sala).toBe(8);
  });
});

//--------------------------------------------------------------------------

describe('Teste de falha para a classe AtendimentoProfessor', () => {
    test('Deve lançar erro para sala fora do intervalo esperado (ex: sala 11)', () => {
      const dados = {
        nomeDoProfessor: 'Professor K',
        horarioDeAtendimento: '08:00 - 10:00',
        periodo: 'integral',
        sala: 11
      };
      expect(() => new AtendimentoProfessor(dados)).toThrow("Sala inválida");
    });
  
    test('Deve lançar erro se o JSON estiver incompleto (sem sala)', () => {
      const dados = {
        nomeDoProfessor: 'Professor L',
        horarioDeAtendimento: '09:00 - 11:00',
        periodo: 'noturno'
        // sala está faltando aqui
      };
      expect(() => new AtendimentoProfessor(dados)).toThrow("Sala inválida");
    });
  
    test('Deve lançar erro para sala negativa', () => {
      const dados = {
        nomeDoProfessor: 'Professor M',
        horarioDeAtendimento: '07:00 - 09:00',
        periodo: 'integral',
        sala: -3
      };
      expect(() => new AtendimentoProfessor(dados)).toThrow("Sala inválida");
    });
  
    test('Deve lançar erro para sala zero', () => {
      const dados = {
        nomeDoProfessor: 'Professor N',
        horarioDeAtendimento: '14:00 - 16:00',
        periodo: 'noturno',
        sala: 0
      };
      expect(() => new AtendimentoProfessor(dados)).toThrow("Sala inválida");
    });
  
    test('Deve lançar erro para sala acima de 10', () => {
      const dados = {
        nomeDoProfessor: 'Professor O',
        horarioDeAtendimento: '13:00 - 15:00',
        periodo: 'integral',
        sala: 15
      };
      expect(() => new AtendimentoProfessor(dados)).toThrow("Sala inválida");
    });
  
    test('Deve lançar erro se o horário de atendimento estiver ausente', () => {
      const dados = {
        nomeDoProfessor: 'Professor P',
        periodo: 'integral',
        sala: 4,
        horarioDeAtendimento: '05:00 - 07:00',
      };
      expect(() => new AtendimentoProfessor(dados).horarioDeAtendimentoValido()).toThrow("Horário de atendimento inválido");
    });

    test('Deve lançar erro se o horário de atendimento não for válido', () => {
      const dados = {
        nomeDoProfessor: 'Professor P',
        periodo: 'integral',
        sala: 4
      };
      expect(() => new AtendimentoProfessor(dados).horarioDeAtendimentoValido()).toThrow("Horário de atendimento não informado");
    });
  
    test('Deve lançar erro se o valor da sala for null', () => {
      const dados = {
        nomeDoProfessor: 'Professor R',
        horarioDeAtendimento: '09:00 - 11:00',
        periodo: 'noturno',
        sala: null
      };
      expect(() => new AtendimentoProfessor(dados)).toThrow("Sala inválida");
    });
  
    test('Deve lançar erro se a sala for uma string em vez de número', () => {
      const dados = {
        nomeDoProfessor: 'Professor S',
        horarioDeAtendimento: '10:00 - 12:00',
        periodo: 'integral',
        sala: 'cinco'
      };
      expect(() => new AtendimentoProfessor(dados)).toThrow("Sala inválida");
    });
  });
  