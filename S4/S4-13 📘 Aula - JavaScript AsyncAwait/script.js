async function getCharacter() {
    let response = await fetch(`http://hp-api.herokuapp.com/api/characters`);
    let userData = await response.json();
    return userData; // não é necessário o await no return
}

let character = await getCharacter()
console.log(character) 