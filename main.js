
function precioConIva (precioProducto){
    let resultado = (precioProducto * 1.21)
    return resultado;
}

function precioConDescuento (precioProducto){
    let resultado = (precioConIva(precioProducto) - (precioProducto / 100 * 20))
    return resultado;
}

while (true){
    var precioProducto = prompt("ingresa el precio del producto que desea comprar"); //con var si anda, con let no
    if(!isNaN(precioProducto) && precioProducto != null && precioProducto != " "){
        break;
    }else {
        alert("no ingreso un numero");
        continue;
    }
}


 while (true){
    var promo = prompt("perfecto, su producto tiene un descuento del 20%, desea aplicarlo? escriba 'si' o 'no'")
    switch (promo.toLowerCase()){
        case "si":
            alert("Muy bien, el precio del producto con el descuento aplicado y sumado el iva es de: " + precioConDescuento(precioProducto));
            break;
        case "no":
            alert("Muy bien, el precio del producto sumado el iva es de: " + precioConIva(precioProducto));
            break;
        default:
            alert("no ingreso ni 'si', ni 'no'");
            continue;
    }
    break;
}
