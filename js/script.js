// Collect km & age
var kmTotal = parseInt(prompt("Quanti chilometri devi percorrere?"));
var age = parseInt(prompt("Quanti anni hai?"));
console.log ("Km da percorrere: ", kmTotal);
console.log ("Anni: ", age);

var priceTicket = document.getElementById("priceTicket")

// Price ticket 
if(age < 18) {
    var totalPrice = (kmTotal * 0.21) - ((kmTotal * 0.21) * 20 / 100);
    var totalPrice = totalPrice.toFixed(2); 
    console.log("Prezzo biglietto: ", totalPrice);

} else if (age > 65) {
    var totalPrice = (kmTotal * 0.21) - ((kmTotal * 0.21) * 40 / 100);
    var totalPrice = totalPrice.toFixed(2); 

    console.log("Prezzo biglietto: ", totalPrice);


} else {
    var totalPrice = (kmTotal * 0.21);
    var totalPrice = totalPrice.toFixed(2); 
    console.log("Prezzo biglietto: ", totalPrice);
}

// Print result 
priceTicket.innerHTML = "Il prezzo totale del tuo biglietto è: " + totalPrice + "€"

