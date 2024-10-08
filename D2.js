/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* 
const n1 = parseInt(prompt("Inserisci un numero: "));
const n2 = parseInt(prompt("Inserisci un numero: "));
if (n1 > n2) {
  console.log(n1 + " è maggiore di " + n2);
} else {
  console.log(n1 + " è maggiore di " + n2);
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* 
const n1 = parseInt(prompt("Inserisci un numero: "));
if (n1 != 5) {
  console.log("not equal");
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* 
const n1 = parseInt(prompt("Inserisci un numero: "));
const resto = n1 % 5;
if (resto == 0) {
  console.log("divisibile per 5");
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* 
const n1 = parseInt(prompt("Inserisci un numero: "));
const n2 = parseInt(prompt("Inserisci un numero: "));
if (n1 === 8 || n2 === 8 || Math.abs(n1 - n2) === 8 || n1 + n2 === 8) {
  console.log(true);
} else {
  console.log(false);
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* 
let totalShoppingCart = 0;
const nprodotti = parseInt(prompt("Inserisci numero prodotti: "));
for (let i = 0; i < nprodotti; i++) {
  const pprodotto = parseInt(prompt("Inserisci prezzo prodotto: "));
  totalShoppingCart += pprodotto;
}
if (totalShoppingCart > 50) {
  console.log(
    "Hai diritto alla spedizione gratutita! Il totale è: " + totalShoppingCart
  );
} else {
  totalShoppingCart += 10;
  console.log("Il totale è: " + totalShoppingCart);
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
let totalShoppingCart = 0;
const nprodotti = parseInt(prompt("Inserisci numero prodotti: "));
for (let i = 0; i < nprodotti; i++) {
  const pprodotto = parseInt(prompt("Inserisci prezzo prodotto: "));
  totalShoppingCart += pprodotto;
}
let sconto = totalShoppingCart * 0.2;
totalShoppingCart -= sconto;
if (totalShoppingCart > 50) {
  console.log(
    "Hai diritto alla spedizione gratutita! Il totale è: " + totalShoppingCart
  );
} else {
  totalShoppingCart += 10;
  console.log("Il totale è: " + totalShoppingCart);
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* 
const n1 = parseInt(prompt("Inserisci un numero: "));
const n2 = parseInt(prompt("Inserisci un numero: "));
const n3 = parseInt(prompt("Inserisci un numero: "));
if (n1 > n2 && n2 > n3) {
  console.log(n1, n2, n3);
} else if (n1 > n3 && n3 > n2) {
  console.log(n1, n3, n2);
} else if (n3 > n1 && n1 > n2) {
  console.log(n3, n1, n2);
} else if (n2 > n1 && n1 > n3) {
  console.log(n2, n1, n3);
} else {
  console.log(n2, n3, n1);
}
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* 
const input = prompt("Inserisci ciò che vuoi");

if (!isNaN(input)) {
  const numberInput = parseInt(input);
  console.log(typeof numberInput);
} else {
  console.log(typeof input);
}
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
const numero = parseInt(prompt("Inserisci un numero"));
if (numero % 2 === 0) {
  console.log(numero + " è un numero pari");
} else {
  console.log(numero + " è un numero dispari");
}
 */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
  */

/*
 */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
