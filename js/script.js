// console.log('Hello'); //test


/*  CALCOLO PREZZO BIGLIETTO

    1.Chiedere i km da percorrere
    2.Calcolare il prezzo
    3.Chiedere l'età
    4.Aggiungere eventuali sconti
    5.Visualizzare prezzo finale
*/

// 1.
alert('Benvenuto!\nProcediamo con l\'acquisto del biglietto...');
var km = parseInt(prompt('Quanti km intendi percorrere?'));
// console.log(km); //test

// 2.
var pricePerKm = 0.21;
var price = km * pricePerKm;
// console.log(price); //test

// 3.
var age;
var happyBirthday = false;
var today = new Date();
var birthDay = parseInt(prompt('Inserisci la tua data di nascita nel formato gg/mm/aaaa.\nGiorno: '));
var birthMonth = parseInt(prompt('Inserisci la tua data di nascita nel formato gg/mm/aaaa.\nMese: '));
var birthYear = parseInt(prompt('Inserisci la tua data di nascita nel formato gg/mm/aaaa.\nAnno: '));
// console.log(birthDay, birthMonth, birthYear); //test
if( ( today.getMonth() + 1) > birthMonth ){
    age = today.getFullYear() - birthYear;
} else if ( ( (today.getMonth() + 1) == birthMonth ) && ( today.getDate() >= birthDay ) ){
    age = today.getFullYear() - birthYear;
    
    if ( today.getDate() == birthDay ){
    happyBirthday = true;
    }   

} else {
    age = (today.getFullYear() - birthYear) - 1;
}

// console.log(age); //test
// console.log(happyBirthday); //test
// 4.
var juniorDiscount = 0.8;
var seniorDiscount = 0.6;

if(age < 18){
    price *= juniorDiscount;
} else if(age > 65){
    price *= seniorDiscount;
}
// console.log(price); //test

// 5.
var priceString = '€' + price.toFixed(2)

if( !happyBirthday){
    document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è ' + priceString;
} else {
    document.getElementById('price').innerHTML = 'Oggi è il tuo compleanno e viaggi GRATIS!<br/>Tanti Auguri!!!!';
}