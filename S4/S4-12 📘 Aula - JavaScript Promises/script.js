const meuAmigoAprovouMinhaVaga = true;

let promise = new Promise(function (resolve, reject) {
  if (meuAmigoAprovouMinhaVaga) {
    resolve("Oba! Agora sou um desenvolvedor de verdade");
  } else {
    reject(new Error("Posha! Preciso estudar mais =("));
  }
});

console.log(promise);

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("I have completed"), 5000);
});
console.log(promise1);

setTimeout(() => {
    console.log("setTimeout")
}, 5000);


/* setInterval(() => {
    console.log("setInterval")
}, 3000); */
