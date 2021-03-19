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

// Data Validation
var defaultKm = 'Ti assegneremo 10km di default.';
if(isNaN(km)){
    alert('Non hai inserito un numero\n' + defaultKm);
    km = 10;
} else if( km <= 0 || km > 10000 ){
    if(km < 0){
        alert('Hai inserito valori negativi\n' + defaultKm);
    } else if(km == 0){
        alert('Per stare fermo non serve prendere il treno...\n' + defaultKm);
    } else{
        alert('La nostra rete ferroviaria non è così estesa!\n' + defaultKm);
    }
    km = 10;
}

// 2.
var pricePerKm = 0.21;
var price = km * pricePerKm;

// 3.
var age;
var happyBirthday = false;
var today = new Date();
var birthDay = parseInt(prompt('Inserisci la tua data di nascita nel formato gg/mm/aaaa.\nGiorno: '));
var birthMonth = parseInt(prompt('Inserisci la tua data di nascita nel formato gg/mm/aaaa.\nMese: '));
var birthYear = parseInt(prompt('Inserisci la tua data di nascita nel formato gg/mm/aaaa.\nAnno: '));

//Data Validation
if( (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) || (birthDay < 1 || birthDay > 31) || (birthMonth < 1 || birthMonth > 12) || (birthYear < 1900 || birthYear >= today.getFullYear()) || (birthDay > 29 && birthMonth == 2) ){
    alert('Hai inserito una data non valida.\nTi assegneremo la data di nascita di deafult 01/01/2000');
    birthDay = 1;
    birthMonth = 1;
    birthYear = 2000;
}

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