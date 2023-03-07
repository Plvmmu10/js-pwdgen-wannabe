let nome = prompt ("Inserisci il tuo nome");
let surname = prompt ("Inserisci il tuo cognome");
let color = prompt ("Inserisci il tuo colore preferito");
const pswNumber = 22

console.log(nome, surname, color, pswNumber)

let password = document.getElementById("psw").innerHTML = 
`<h1>${nome}${surname}${color}${pswNumber}</h1>`
;
