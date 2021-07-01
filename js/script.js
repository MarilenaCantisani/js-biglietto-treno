// Collect km & age
var kmTotal = parseInt(prompt("Quanti chilometri devi percorrere?"));
var age = parseInt(prompt("Quanti anni hai?"));
console.log ("Km da percorrere: ", kmTotal);
console.log ("Anni: ", age);

var totalPrice;
var priceKm = kmTotal * 0.21;
var discount20 = priceKm * 20 / 100;
var discount40 = priceKm * 40 / 100;

var priceTicket = document.getElementById("priceTicket")

// Price ticket 
if(age < 18) {
    totalPrice = priceKm - discount20;
    totalPrice = totalPrice.toFixed(2); 
    console.log("Prezzo biglietto: ", totalPrice);
} else if (age > 65) {
    totalPrice = priceKm - discount40;
    totalPrice = totalPrice.toFixed(2); 
    console.log("Prezzo biglietto: ", totalPrice);
} else {
    totalPrice = (kmTotal * 0.21);
    totalPrice = totalPrice.toFixed(2); 
    console.log("Prezzo biglietto: ", totalPrice);
}

// Print result 
priceTicket.innerHTML = "Il prezzo totale del tuo biglietto è: " + totalPrice + "€"; 

