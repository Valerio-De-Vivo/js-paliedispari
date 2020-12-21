
// RICHIESTA PARI O DISPARI ALL'UTENTE 

var sceltaUtente = prompt('Pari o Dispari??').toLocaleLowerCase();


i = 0;
while (sceltaUtente != 'pari' && sceltaUtente != 'dispari') {
    sceltaUtente = prompt('Forse non hai scritto bene, Pari o Dispari??');
    i++;

}

// RICHIESTA NUMERO ALL'UTENTE DA 1 A 5 

var sceltaNumeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));


i = 0;
while (sceltaNumeroUtente <= 0  || sceltaNumeroUtente > 5 ) {
    sceltaNumeroUtente = parseInt(prompt('Non è compreso tra 1 e 5, Inserisci un numero da 1 a 5'));
    i++;

}

// SOMMA NUMERI UTENTE E COMPUTER

var somma = sceltaNumeroUtente + numeriRandom(1,5);

// FUNZIONE PARI O DISPARI

var messaggio;
var risultato = pariDispari(somma);


// DICHIARAZIONE DEL VINCITORE 

if (sceltaUtente == risultato) {
    var dichiarazione = 'Hai vinto';
} else {
    dichiarazione = 'Hai perso';
}

document.getElementById('sceltautente').innerHTML = 'Hai scelto ' + sceltaUtente;

document.getElementById('sceltanumeroutente').innerHTML = 'Hai scelto il numero ' + sceltaNumeroUtente;

document.getElementById('somma').innerHTML = 'La somma con un numero random è ' + somma;

document.getElementById('risultato').innerHTML = 'La somma random è ' + risultato;

document.getElementById('dichiarazione').innerHTML = dichiarazione;



// console.log(sceltaUtente);
// console.log(sceltaNumeroUtente);
// console.log(somma);
// console.log(risultato);
// console.log(dichiarazione);



// FUNZIONI 

function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }



function pariDispari(n1) {
    if (n1 % 2 == 0) {
        messaggio = 'pari';
    } else {
        messaggio = 'dispari'
    }
    return messaggio;
}
