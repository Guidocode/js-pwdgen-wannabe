/*
  Chiedi all’utente il suo nome,
  poi chiedi il suo cognome,
  poi chiedi il suo colore preferito
  Infine scrivi sulla pagina nomecognomecolorepreferito22

  1. dichiarare delle variabili 
  2. l'utente assegna i valori
  3. stampa sulla pagina
*/

const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const favoriteColor = prompt("Inserisci il tuo colore preferito");
const yearsOld = 22;

// Prova 1 
console.log("Le info utente sono " + firstName + lastName + favoriteColor);

document.getElementById("info-about-me").innerHTML += ("Mi chiamo " + firstName + " " + lastName + ", il mio colore preferito è " + favoriteColor + " e ho " + yearsOld) + " anni.";

// pw 
document.getElementById("pw").innerHTML += (firstName + lastName + favoriteColor + yearsOld);



// Prova 2
const infoAboutMe = 
`
Alcune info su di me: 
Il mio nome è ${firstName} ${lastName}, il mio colore preferito è ${favoriteColor} e ho ${yearsOld} anni.
`;

console.log("Le info utente sono " + infoAboutMe);

document.getElementById("info-about-me2").innerHTML = infoAboutMe;

// pw2 
const pW2 = 
`
Password: 
${firstName}${lastName}${favoriteColor}${yearsOld}
`;

document.getElementById("info-about-me2").innerHTML = pW2;