import { result } from "./databaseteste.js";

localStorage.setItem("mytime", Date.now());

localStorage.getItem("mytime");
console.log(localStorage.getItem("mytime"));

// Criar item:
let myObj = { name: "Gabriel", age: 25 };
localStorage.setItem("novaChave", JSON.stringify(myObj));
console.log(myObj);

// Ler item:
let myItem = JSON.parse(localStorage.getItem("novaChave"));
//console.log(myItem); // {name: 'Gabriel', age: 25}

//localStorage.removeItem('mytime')

///localStorage.clear();
console.log(result[0].value)
