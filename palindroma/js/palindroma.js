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

function controlloPalindroma(parolaDaControllare) {

    // parola divisa in lettere in un array invertito restituito come stringa
    var parolaInvertita = parolaDaControllare.split("").reverse().join("");

    // controllo parola invertita
    console.log("parola invertita",parolaInvertita);

    // se la parola inserità è uguale a sè stessa al contrario, è palindroma altrimento no
    if(parolaDaControllare == parolaInvertita) {

        console.log("La parola è palindroma");

    } else {

        console.log("La parola non è palindroma");

    }

}



