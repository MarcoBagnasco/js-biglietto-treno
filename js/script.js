// console.log('Hello'); //test


/*  CALCOLO PREZZO BIGLIETTO

    1.Chiedere i km da percorrere
    2.Calcolare il prezzo
    3.Chiedere l'età
    4.Aggiungere eventuali sconti
    5.Visualizzare prezzo finale
*/

// 1.
var km = parseInt(prompt('Quanti km intendi percorrere?'));
console.log(km); //test

// 2.
var pricePerKm = 0.21;
var price = km * pricePerKm;
console.log(price); //test

// 3.
var age = parseInt(prompt('Quanti hanni hai?'));
console.log(age); //test

// 4.
var juniorDiscount = 0.8;
var seniorDiscount = 0.6;

if(age < 18){
    price *= juniorDiscount;
} else if(age > 65){
    price *= seniorDiscount;
}
console.log(price); //test

// 5.
var priceString = '€' + price.toFixed(2)

document.getElementById('price').innerHTML = 'Il prezzo del tuo bigietto è ' + priceString;