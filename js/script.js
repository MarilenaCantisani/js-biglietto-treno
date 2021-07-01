// Collect km & age
var kmTotal = parseInt(prompt("Quanti chilometri devi percorrere?"));
var age = parseInt(prompt("Quanti anni hai?"));
console.log ("Km da percorrere: ", kmTotal);
console.log ("Anni: ", age);

// Price ticket 
if(age < 18) {
    var price = (kmTotal * 0.21) - ((kmTotal * 0.21) * 20 / 100);
    var price = price.toFixed(2); 
    console.log("Prezzo biglietto: ", price);

} else if (age > 65) {
    var price = (kmTotal * 0.21) - ((kmTotal * 0.21) * 40 / 100);
    var price = price.toFixed(2); 

    console.log("Prezzo biglietto: ", price);


} else {
    var price = (kmTotal * 0.21);
    var price = price.toFixed(2); 
    console.log("Prezzo biglietto: ", price);
}

