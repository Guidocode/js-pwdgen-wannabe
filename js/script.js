/*
  Chiedi all’utente il suo nome,
  poi chiedi il suo cognome,
  poi chiedi il suo colore preferito
  Infine scrivi sulla pagina nomecognomecolorepreferito22

  1. dichiarare delle variabili 
  2. l'utente assegna i valori
  3. stampa sulla pagina
*/

const firstName = prompt("Inserise il tuo nome");
const lastName = prompt("Inserise il tuo cognome");
const favoriteColor = prompt("Inserise il tuo colore preferito");

// Prova 1 
console.log("Le info utente sono " + firstName + lastName + favoriteColor);

document.getElementById("info-about-me").innerHTML += ("Mi chiamo " + firstName + " " + lastName + " e il mio colore preferito è " + favoriteColor);


// Prova 2
const infoAboutMe = 
`
Alcune info su di me: 
Il mio nome è ${firstName} ${lastName} e il mio colore preferito è ${favoriteColor}
`;

console.log("Le info utente sono " + infoAboutMe);

document.getElementById("info-about-me2").innerHTML = infoAboutMe;