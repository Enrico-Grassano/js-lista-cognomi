//1. chiedi all'utente il cognome.
var cognomeUtente = prompt("Qual'è il tuo cognome?");
console.log(cognomeUtente);
//2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'.
var cognomiLista = ["Bianchi", "Rossi", "Verdi", "Gialli", "Neri"];
cognomiLista.push(cognomeUtente);
console.log(cognomiLista);
//3. stampa la lista ordinata alfabeticamente.
cognomiLista.sort();
console.log(cognomiLista);
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova.