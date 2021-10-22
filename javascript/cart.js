const cart = [];

function mioCarrello() 
{
    let prodotto = prompt ("Scegli i tuoi prodotti");
    if (prodotto == null || prodotto == "") {
        alert ("hai dimenticato di inserire un prodotto") 
    }      
    if (cart.includes(prodotto)) {
        alert ( prodotto + "hai già inserito questo prodotto!")
        
    }  
    else {
        cart.push(prodotto);
        alert ("Grazie per aver acquistato il prodotto: " + prodotto);       
        
    }   
    console.log (cart);

}  

