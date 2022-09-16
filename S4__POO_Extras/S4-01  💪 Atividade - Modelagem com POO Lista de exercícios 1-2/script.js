class Pessoa {
  constructor(nome, dataDenascimento, cidade) {
    this._name = nome;
    this._dataDenascimento = dataDenascimento;
    this._cidade = cidade;
  }

  calcularIdade(AnoAtual) {
    return `${this._name} tem ${
      AnoAtual - this._dataDenascimento
    } anos e nasceu em ${this._cidade}`;
  }
}

let pessoa1 = new Pessoa("Jarlindo Cruz", 1500, "Lisboa");

console.log(pessoa1);
console.log(pessoa1.calcularIdade(2000));

class Elevador {
  constructor(AndarAtual, TotalDeAndares, NumeroDePessoas) {
    this._AndarAtual = AndarAtual;
    this._TotalDeAndares = TotalDeAndares;
    this._NumeroDePessoas = NumeroDePessoas;
    this._CapacidadeMaxima = 10;
  }

  entrar(QuantidadePessoas) {
    let espacos = this._CapacidadeMaxima - QuantidadePessoas;
    if (espacos > 0) `Ainda tem ${espacos} espaços`;

    return `Não há espaços`;
  }

  sair(PessoasSaindo) {
    return `Agora existem ${this._CapacidadeMaxima - PessoasSaindo} espaços`;
  }

  subir(Andar) {
    this._TotalDeAndares = 10;
    if (Andar <= this._TotalDeAndares && Andar >= 0)
      `Estamos no ${Andar}ª andar`;

    return `Tem como suber mais não`;
  }

  descer(Andar) {
    if (Andar < 0) `Tem como descer mais não`;
    return `Estamos no ${Andar}ª andar`;
  }
}

class Televisao {
  constructor(CanalAtual, VolumeAtual, NumeroDoCanal) {
    this._CanalAtual = CanalAtual;
    this._VolumeAtual = VolumeAtual;
    this._NumeroDoCanal = NumeroDoCanal;
  }

  aumentarVolume() {
    return this._VolumeAtual++;
  }

  diminuirVolume() {
    return this._VolumeAtual--;
  }

  aumentarCanal() {
    return this._NumeroDoCanal++;
  }

  diminuirCanal() {
    return this._NumeroDoCanal--;
  }

  trocarCanal(NomeDoCanal, NovoNumeroDoCanal) {
    this._CanalAtual = NomeDoCanal;
    this._NumeroDoCanal = NovoNumeroDoCanal;
    return `Agora está no ${this._CanalAtual},${this._NumeroDoCanal} `;
  }

  consultarCanal() {
    return `O canal Atual é ${this._CanalAtual}`;
  }

  consultarVolume() {
    return `O volume atual é ${this._VolumeAtual}`;
  }
}

let Tvlisao = new Televisao("Caçado DragonBall-Z", 20, 1);
