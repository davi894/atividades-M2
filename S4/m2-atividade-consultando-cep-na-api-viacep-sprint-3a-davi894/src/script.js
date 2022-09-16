const cepForm = document.getElementById("cep-form");

cepForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const input = cepForm[0];
  const inputValue = input.value;
  //// forma 1
  /* try {
    const response = await fetch(
      `https://viacep.com.br/ws/${inputValue}/json`
    ).then((res) => res.json());
    console.log(response);
    console.log(`logradouro: ${response.logradouro}`);
    console.log(`bairro: ${response.bairro}`);
    console.log(`uf: ${response.uf}`);
  } catch (error) {
    return error;
  } */
  //// forma 2

  /* const response = await fetch(
    `https://viacep.com.br/ws/${inputValue}/json`
  ).then((res) => res.json());
  console.log(`logradouro: ${response}`);
  console.log(`logradouro: ${response.logradouro}`);
  console.log(`logradouro: ${response.bairro}`);
  console.log(`logradouro: ${response.uf}`);
  console.log(await response); */

  ///forma 3
  /*  const response = await fetch(`https://viacep.com.br/ws/${inputValue}/json`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  console.log(response);
  console.log(response.logradouro);
  console.log(response.bairro);
  console.log(response.uf); */

  /// forma 4
  const response = await fetch(`https://viacep.com.br/ws/${inputValue}/json`);

  let teste = await response.json()

  console.log(teste)
  console.log(teste.logradouro)
  console.log(teste.bairro)
  console.log(teste.uf)
});

//logradouro, bairro e uf
//57035-190

/* const handleSubmit = (event) => {

  event.preventDefault();

  const input = cepForm[0];
  const inputValue = input.value;
  console.log(inputValue)

  const response =  fetch(
    `https://viacep.com.br/ws/${inputValue}/json`
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((erro) => console.log(erro));
   
};
handleSubmit(); */
