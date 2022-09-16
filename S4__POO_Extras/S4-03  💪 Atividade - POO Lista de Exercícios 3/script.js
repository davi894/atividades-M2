class Alunos {
  constructor(nome, curso, turno, mediaCorte) {
    this._nome = nome;
    this._curso = curso;
    this._turno = turno;
    this._mediaCorte = mediaCorte;
    this._materias = [];
  }

  mediaTotalAluno() {
    let arrayMedias = [];

    this._materias.forEach(({ nome, avaliacoes }) => {
      let mediaAtual = avaliacoes.reduce((a, b) => a + b, 0) / 4;
      arrayMedias.push({ materia: nome, media: mediaAtual });
    });

    return arrayMedias;
  }

  status(materias) {
    let arrayAvaliacao = [];

    materias.forEach(({ materia, media }) => {
      if (media >= this._mediaCorte) {
        arrayAvaliacao.push({ Materia: materia, Media: media, status: true });
      } else {
        arrayAvaliacao.push({ Materia: materia, Media: media, status: false });
      }
    });

    return arrayAvaliacao;
  }

  aprovacaoSemestral(quantidadeAprovacoes, status) {
    let arrayAprovacaoSemestral = [];
    quantidadeAprovacoes.forEach((ele) => {
      if (ele.status !== status) {
        arrayAprovacaoSemestral.push(ele);
      }
      return arrayAprovacaoSemestral;
    });
  }
}

let aluno = new Alunos("Arlindo", "TI", "Noturno", 7, {});
aluno._materias = [
  { nome: "Calculo I", avaliacoes: [6, 8, 10, 8] },
  { nome: "Pensamento Computacional", avaliacoes: [6, 8, 6, 8] },
  { nome: "Linguagem Orientada a Objetos", avaliacoes: [7, 8, 9, 10] },
  {
    nome: "Arquitetura de Organização de Computadores",
    avaliacoes: [6, 8, 7, 8],
  },
];
console.log(aluno);
console.log(aluno.mediaTotalAluno());
console.log(aluno.status(aluno.mediaTotalAluno()));

aluno.aprovacaoSemestral(aluno.status(aluno.mediaTotalAluno()), false);

class Onibus {
  constructor(origem, destinoFinal, bilhete, passageiros) {
    this._capacidade = 10;
    this._origem = origem;
    this._destinoFinal = destinoFinal;
    this._paradas = ["Guararapes", "Porto Alegre"];
    this._passageiros = passageiros;
    this._bilhete = bilhete;
  }
  efetuarParada(lugarDestino) {
    this._passageiros.forEach((elem, i) => {
      let chegouAoDstino = elem.bilhete["destino"];

      if (
        lugarDestino == chegouAoDstino &&
        this._paradas.includes(lugarDestino)
      )
        return `passageiro ${elem.nome} chegou ao destino`;
    });
  }

  atualizandoStatusDosPassageiros(viagemConcluida) {
    this._bilhete;
  }
}

let passageiroOnibus = new Onibus(
  "Guararapes",
  "Porto Alegre",
  {
    nome: "Jorge",
    rg: "122.124.898-54",
    bilhete: {
      origem: "Guararapes",
      destino: "Porto Alegre",
      poltrona: "01",
    },
  },
  [
    {
      nome: "Jorge",
      rg: "122.124.898-54",
      bilhete: {
        origem: "Guararapes",
        destino: "Porto Alegre",
        poltrona: "01",
      },
    },
  ]
);
console.log(passageiroOnibus);

console.log(passageiroOnibus.efetuarParada("Guararapes"));
