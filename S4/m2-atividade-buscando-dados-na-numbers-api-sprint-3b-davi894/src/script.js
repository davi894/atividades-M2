const inputDataDia = document.getElementById("dataDia");
const inpurDataMes = document.getElementById("dataMes");
const inputQualquerNumero = document.getElementById("numeroQualquer");
const bntnovoEndepint = document.getElementById("novoEndepint");

bntnovoEndepint.addEventListener("click", async function (e) {
  let valorDataDia = inputDataDia.value;

  let valorDataMes = inpurDataMes.value;

  let valorQualquerValor = inputQualquerNumero.value;

  const qualqueNumero = await fetch(
    `http://numbersapi.com/${valorQualquerValor}/math?json`
  );

  let numero = await qualqueNumero.json();

  console.log(numero);

  const dataMesDia = await fetch(
    `http://numbersapi.com/${valorDataMes}/${valorDataDia}/math`
  );
  let data = await dataMesDia.json();
  console.log(data);
});

///n/math: Sendo n é um número qualquer.
//Exemplo: http://numbersapi.com/5/math
///m/d/date Sendo m um mês qualquer e d um
//dia válido do mês escolhido. Ex: http:
//numbersapi.com/8/13/date
