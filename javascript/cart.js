const cart = [];

function mioCarrello() {

    let prodotto = prompt ('Scegli i tuoi prodotti');
    let scelta = prodotto.split (' ');

    if (prodotto === null || prodotto === "") {
        alert ("hai dimenticato di inserire un prodotto");
    } 
    
    if (cart.includes(prodotto) == true) {
        alert ( "hai inserito questo prodotto:" + prodotto );
    } else {
        alert ("prodotto già inserito: " + prodotto);
    }

    cart.push(prodotto);
    console.log (cart);

    return prodotto;
} 




