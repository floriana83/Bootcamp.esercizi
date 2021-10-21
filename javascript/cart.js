const cart = [];

function mioCarrello() {

    let prom = prompt ('Scegli i tuoi prodotti');
    let scelta = prom.split (' ');
    cart.push(scelta);
    return cart;

}

console.log (cart);

if (input == null || input == false) {
    alert ("hai dimenticato di inserire un prodotto");
    
}
else {
    let arrName =[];
    if (hasWhiteSpace (input) == true){
        arrName = input.replace(/ /g, "").split(".");
    } else {
        arrName = input.split(",");
    }
    lowArrName = hasCapitol(arrName);
    checkRepeat(lowArrName);
    cart.push(lowArrName);
}
    console.log(cart)
    return cart;
