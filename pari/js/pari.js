// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// utente sceglie pari o dispari
var sceltaUtente;

// chiede almeno una volta
do {
    sceltaUtente = prompt("scegli pari o dispari");
}
// controllo inserimento dati
while(sceltaUtente != "pari" && sceltaUtente !="dispari");

// stampa scelta
console.log("scelta utente: ", sceltaUtente);

// numero utente da 1 a 5
var numeroInseritoUtente; 

// chiede almeno una volta
do {
    numeroInseritoUtente = parseInt(prompt("scegli un numero da 1 a 5"));
}
// controllo inserimento dati
while(numeroInseritoUtente < 1  || numeroInseritoUtente > 5 );

// stampa scelta
console.log("utente: ", numeroInseritoUtente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// funzione per generare numero pc
function numeroPc() {
    // numero casuale da 1 a 5
    var numeroCasualePc = Math.floor(Math.random() * 5) + 1;
    // stampa numero pc
    console.log("pc: ", numeroCasualePc );
    return numeroCasualePc;
}

// Sommiamo i due numeri

// somma numero utente e numero pc
var sommaUtentePc = numeroPc() + numeroInseritoUtente;
// stampa somma numero utente e numero pc
console.log("somma numeri: ", sommaUtentePc);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// funzione per controllare se il numero è pari o dispari
function controlloNumero(numeroDaControllare) {

    if(numeroDaControllare % 2 == 0){
        return "pari";
    } else {
        return "dispari";
    }
}

var controllo = (controlloNumero(sommaUtentePc));

// stampa se è pari o dispari
console.log(controlloNumero(sommaUtentePc));

// Dichiariamo chi ha vinto.

if (sceltaUtente == controllo){
    console.log("Ha vinto l'utente")
} else {
    console.log("Ha vinto il pc");
}