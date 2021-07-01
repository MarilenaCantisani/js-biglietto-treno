/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole 
percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

/* 
1 - Chiedere quanti km vuole percorrere 
2 - Chiedere l'età 
3 - Tre step per calcolare il prezzo: 
a. Minorenni: km x 0.21 - 20%;
b. Dai minorenni agli over 65: km x 0.21 senza sconto;
c. Over 65: km x 0.21 - 40%; 
4 - Stampare il risultato finale con max due decimali. 
*/

// Collect km & age
var kmTotal = parseInt(prompt("Quanti chilometri devi percorrere?"));
var age = parseInt(prompt("Quanti anni hai?"));
console.log ("Km da percorrere: ", kmTotal);
console.log ("Anni: ", age);

// Price ticket 
if(age < 18) {
    var price = (kmTotal * 0.21) - ((kmTotal * 0.21) * 20 / 100);
    console.log("Prezzo biglietto: ", price);

} else if (age > 65) {
    var price = (kmTotal * 0.21) - ((kmTotal * 0.21) * 40 / 100);
    console.log("Prezzo biglietto: ", price);

} else {
    var price = (kmTotal * 0.21);
    console.log("Prezzo biglietto: ", price);
}