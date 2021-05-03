// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// Chiedere all'utente di inserire una parola
// parola richiesta
var parolaInserita = prompt("inserisci una parola");
console.log("parola inserita: ",parolaInserita);
// controllo parola inserita
controlloPalindroma(parolaInserita);

// Creare una funzione per capire se la parola inserita è palindroma

// funzione controllo parola palindroma
function controlloPalindroma(parolaDaControllare) {

    // parola divisa in lettere in un array restituito come stringa 
    var parolaDivisa = parolaDaControllare.split("").join();
    // controllo parola divisa
    console.log("parola divisa in lettere per confronto: ",parolaDivisa);

    // parola invertita divisa in lettere in un array restituito come stringa
    var parolaInvertita = parolaInserita.split("").reverse().join();
    // controllo parola invertita
    console.log("parola invertita divisa in lettere per confronto: ",parolaInvertita);
    // se la parola inserità è uguale a sè stessa invertita come ordine, è palindroma
    if(parolaDivisa == parolaInvertita) {

        console.log("è palindroma");

    } else {

        console.log("non è palindroma");

    }

}



