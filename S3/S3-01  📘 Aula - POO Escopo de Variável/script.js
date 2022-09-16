let name = 'Vladilena'

function showName() {

    let lastName = 'Milizé'
    let myName = name + ' ' + lastName

    return myName
}

 //'Vladilena Milizé'
console.log(showName(name)) // 'Vladilena'
//console.log(lastName) // Uncaught ReferenceError: lastName is not defined

let nameUm = 'Zoro'
const count = 3

for(let i = 0; i < count; i++){
  // note que estou declarando a variável usando var
  var lastNameUm = 'Roronoa'
  console.log(lastNameUm + ' ' + nameUm) // Roronoa Zoro
} 

console.log(lastNameUm) //Roronoa


let nameDois = 'Ace'
const countDois = 3

for(let i = 0; i < countDois; i++){
  // agora estou declarando a variável usando let
  let lastNameDois = 'Portgas D.'
  console.log(lastNameDois + ' ' + name) // Portgas D. Ace
}

//console.log(lastNameDois) // Uncaught ReferenceError: lastName is not defined
