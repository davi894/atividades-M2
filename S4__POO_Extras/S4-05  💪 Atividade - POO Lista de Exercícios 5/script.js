let historico = [];
class Calculadora {
  /*  constructor() {
    this._historico = [];
  } */

  static soma(a, b) {
    let somar = a + b;
    return somar;
  }

  static subtracao(a, b) {
    let subtrair = a - b;
    return subtrair;
  }

  static divisao(a, b) {
    let dividir = a / b;
    return dividir;
  }

  static multiplicacao(a, b) {
    let multiplicar = a * b;
    return multiplicar;
  }

  static salvarHistorico(a, b, sinal, resultado) {
    //this._historico.push(`${a} ${sinal} ${b} = ${resultado}`);
    historico.push(`${a} ${sinal} ${b} = ${resultado}`);
  }
}

let calculador = new Calculadora();

Calculadora.soma(12, 12);
Calculadora.salvarHistorico(12, 12, "+", Calculadora.soma(12, 12));

Calculadora.salvarHistorico(12, 12, "-", Calculadora.subtracao(12, 12));

Calculadora.salvarHistorico(12, 12, "X", Calculadora.multiplicacao(12, 12));

Calculadora.salvarHistorico(12, 12, "/", Calculadora.divisao(12, 12));

//console.log(calculador._historico);

console.log(historico);

class ContaBancaria {
  constructor(numero, titular, saldo, limite) {
    this._numero = numero;
    this._titular = titular;
    this._saldo = saldo;
    this._limite = limite;
  }

  set depositar(deposito) {
    this._saldo += deposito;
  }

  set sacar(retirar) {
    this._saldo -= retirar;
  }

  get imprimirDados() {
    return ` A conta de número ${this._numero} de ${this._titular} possui um saldo de R$${this._saldo} e um limite de R$${this._limite}`;
  }
}

let pessoaUm = new ContaBancaria("09-121-331", "Alejandro", 1000, 500);

pessoaUm.depositar = 200;
pessoaUm.sacar = 300;
console.log(pessoaUm.imprimirDados);
console.log(pessoaUm);

class Slenzie {
  constructor(nomeEvento) {
    this._nomeEvento = nomeEvento;
    this._perguntas = [];
    this._perguntasArquivadas = [];
  }

  adicionarPergunta(pergunta) {
    this._perguntas.push(pergunta);
  }

  arquivarPergunta() {
    this._perguntasArquivadas.push(this._perguntas);
  }

  votarPergunta() {
    this._perguntas.forEach((element, i, array) => {});
  }

  reativarPergunta() {}
}

let slinzie = new Slenzie("Mundo da programação");
slinzie.adicionarPergunta({
  nome: "Jucelino",
  pergunta: "O que é importante para ser um bom programador?",
  votos: 0,
});
console.log(slinzie);
console.log(slinzie._perguntas);
