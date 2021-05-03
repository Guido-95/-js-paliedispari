// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// utente sceglie pari o dispari
var pariOdispari;

do {
    pariOdispari = prompt("scegli pari o dispari");
}

while(pariOdispari != "pari" && pariOdispari !="dispari" )

// controllo scelta
console.log("scelta utente: ", pariOdispari);

// utente un numero da 1 a 5
var numeroInseritoUtente; 

do {
    numeroInseritoUtente = parseInt(prompt("scegli un numero da 1 a 5"));
}

while(numeroInseritoUtente < 1  || numeroInseritoUtente > 5 );

// controllo scelta
console.log("utente: ", numeroInseritoUtente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// funzione per generare numero pc
function numeroPc() {

    var numero = Math.floor(Math.random() * 5) + 1;
    console.log("pc: ", numero );
    return numero ;
    
}

// Sommiamo i due numeri

// somma numero utente e numero pc
var sommaUtentePc = numeroPc() + numeroInseritoUtente;
console.log("somma numeri: ", sommaUtentePc);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// funzione per controllare se il numero è pari o dispari
function controlloNumero(numeroDaControllare) {

    if(numeroDaControllare % 2 == 0){
        return "il numero è pari";
    } else {
        return "il numero è dispari";
    }
}

// controllo se il numero è pari o dispari
console.log(controlloNumero(sommaUtentePc));

// Dichiariamo chi ha vinto.

if (pariOdispari == "pari" && sommaUtentePc % 2 == 0) {
    console.log("ha vinto il giocatore col numero pari");
} else if (sommaUtentePc % 2 == 0) {
    console.log("ha vinto il pc col numero pari");
} else if (pariOdispari == "dispari" && sommaUtentePc % 2 == 1) {
    console.log("ha vinto il giocatore col numero dispari");
}  else {
    console.log("ha vinto il pc col numero dispari");
}