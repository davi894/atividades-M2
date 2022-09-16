class Veiculo {
  constructor(proprietario, placa, tipoDeCombustivel, anoDeFabricação) {
    this._proprietario = proprietario;
    this._placa = placa;
    this._tipoDeCombustivel = tipoDeCombustivel;
    this._anoDeFabricação = anoDeFabricação;
  }
}

class Automovel extends Veiculo {
  constructor(
    proprietario,
    placa,
    tipoDeCombustivel,
    anoDeFabricação,
    quantidadeEspacos,
    quantidadePortas
  ) {
    super(proprietario, placa, tipoDeCombustivel, anoDeFabricação);
    this._quantidadeEspacos = quantidadeEspacos;
    this._quantidadePortas = quantidadePortas;
  }

  retornarInformacoes() {
    return `Placa: ${this._placa}; ano: ${this._anoDeFabricação}; tipo de combustível: ${this._tipoDeCombustivel}; quantidade de lugares: ${this._quantidadeEspacos}; quantidade de portas: ${this._quantidadePortas}; proprietário: ${this._proprietario}`;
  }
}

class Caminhao extends Automovel {
  constructor(
    proprietario,
    placa,
    tipoDeCombustivel,
    anoDeFabricação,
    quantidadeEspacos,
    quantidadePortas
  ) {
    super(
      proprietario,
      placa,
      tipoDeCombustivel,
      anoDeFabricação,
      quantidadeEspacos,
      quantidadePortas
    );
    this._cargaMaxima = 100;
  }

  retornarInformacoes() {
    return `Placa: ${this._placa}; ano: ${this._anoDeFabricação}; tipo de combustível: ${this._tipoDeCombustivel}; carga máxima: ${this._cargaMaxima}; proprietário: ${this._proprietario}.`;
  }
}

class Agenda {
  constructor(nome) {
    this._nome = nome;
    this._agendas = [];
  }

  adicionarContato(pessoaAdicionar) {
    if (!this._agendas.includes(pessoaAdicionar)) {
      this._agendas.push(pessoaAdicionar);
    }
    return `Numero de telefone já existente na lista`;
  }

  removerContato(telefoneRemover) {
    this._agendas.forEach((pessoaNumero, i) => {
      if (telefoneRemover == pessoaNumero.telefone) this._agendas.splice(i, 1);
    });

    return `Digite um número para remover um contato.`;
  }

  listarContatos() {
    for (let i = 0; i < this._agendas.length; i++) {
      console.log(
        `${i + 1} - Nome: ${this._agendas[i].nome} Telefone: ${
          this._agendas[i].telefone
        }`
      );
    }
  }

  pesquisarContato(nome) {
    this._agendas.filter(({ name }) => {
      if (name == nome) {
        return name;
      }
    });
    return "Nenhum contato encontrado";
  }

  editarContato(posicao, _name, _telefone) {
    for (let i = 0; i < this._agendas.length; i++) {
      if (this._agendas.indexOf(posicao)) {
        this._agendas[i].nome = _name;
        this._agendas[i].telefone = _telefone;
      }
    }
    return "Nenhum contato encontrado";
  }
}

let agenda = new Agenda("Contatos");

agenda.adicionarContato({
  noem: "Jorge",
  telefone: "99-9918-1723",
});

agenda.adicionarContato({
  nome: "Bebeu",
  telefone: "99-9018-1723",
});

agenda.adicionarContato({
  nome: "Lalau",
  telefone: "99-1918-1723",
});

agenda.removerContato("99-9918-1723");
console.log(agenda._agendas);

console.log(agenda.listarContatos());
