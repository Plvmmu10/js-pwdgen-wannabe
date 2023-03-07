let userName = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let color = prompt("Inserisci il tuo colore preferito");
const pswNumber = 22;

console.log(userName, surname, color, pswNumber);

let password = document.getElementById("psw").innerHTML = 
`<h1>${userName}${surname}${color}${pswNumber}</h1>`;

