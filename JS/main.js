// Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
alert("bienvenida Denise Gargiulo ")
let selecioneProducto;
const iva = 21;
const descuento = 20;
let prescioBasePs5 = 250000;
let prescioBaseXboxOne = 150000;
let prescioBaseNintendo  = 75000;
let prescioBasePcGamer  = 300000;
let salida = "La Consola que elegiste es:";


const Iva = (valor) =>{

    return  (valor * iva) / 100
    
    
}

const Desc = (valor1, valor2) =>{
    return  (valor1 + valor2) * descuento / 100

}



const PrecioFinal = (valor1, valor2, valor3) => {

    return (valor1 + valor2) - valor3


}


let IvaPs5 =  Iva(prescioBasePs5);
let descuentosPs5 = Desc(prescioBasePs5, IvaPs5)
let precioFinalPs5 = PrecioFinal(prescioBasePs5, IvaPs5, descuentosPs5)

console.log("Play 5");
console.log("Precio Base:  $" + prescioBasePs5);
console.log("IVA:"+ " " + "$" + Iva( prescioBasePs5))
console.log("Descuento"+ " " + "$" + Desc( prescioBasePs5, IvaPs5 ))
console.log("Precio Final" + " "+ "$" + PrecioFinal( + prescioBasePs5, IvaPs5, descuentosPs5))



let IvaXbox =  Iva(prescioBaseXboxOne);
let descuentosXbox = Desc(prescioBaseXboxOne, IvaXbox)
let precioFinalXbox = PrecioFinal(prescioBaseXboxOne, IvaXbox, descuentosXbox)

console.log("Xbox One");
console.log("Precio Base:  $" + prescioBaseXboxOne);
console.log("IVA:"+ " " + "$" + Iva(  prescioBaseXboxOne))
console.log("Descuento"+ " " + "$" + Desc( prescioBaseXboxOne, IvaXbox ))
console.log("Precio Final" + " "+ "$"+ PrecioFinal( prescioBaseXboxOne, IvaXbox, descuentosXbox))


let IvaNintendo =  Iva(prescioBaseNintendo);
let descuentosNintendo = Desc(prescioBaseNintendo, IvaNintendo)
let precioFinalNintendo = PrecioFinal(prescioBaseNintendo, IvaNintendo, descuentosNintendo)

console.log("Nintendo");
console.log("Precio Base:  $" + prescioBaseNintendo);
console.log("IVA:"+ " " + "$"+  Iva( prescioBaseNintendo))
console.log("Descuento"+ " " + "$" + Desc( prescioBaseNintendo, IvaNintendo ))
console.log("Precio Final" + " "+ "$"+ PrecioFinal( prescioBaseNintendo, IvaNintendo, descuentosNintendo))


let IvaPcGamer =  Iva(prescioBasePcGamer);
let descuentosPcGamer = Desc(prescioBasePcGamer, IvaPcGamer)
let precioFinalPcGamer = PrecioFinal(prescioBasePcGamer, IvaPcGamer, descuentosPcGamer)

console.log("Pc Gamer");
console.log("Precio Base:  $" + prescioBasePcGamer);
console.log("IVA:"+ " " + "$" + Iva( prescioBasePcGamer))
console.log("Descuento"+ " " + "$" + Desc( prescioBasePcGamer, IvaPcGamer))
console.log("Precio Final" + " "+ "$" + PrecioFinal( prescioBasePcGamer, IvaPcGamer, descuentosPcGamer))



while ((selecioneProducto != "ps5") && (selecioneProducto != "xbox one") && (selecioneProducto != "nintendo") && (selecioneProducto != "pc gamer")) {

    selecioneProducto = prompt("ingrese un producto ( ps5 / xbox one / nintendo / pc gamer").toLowerCase();

    if(selecioneProducto == "ps5"){

        alert(salida += " \n" +"Elegiste una Play 5" +" \n" + "Precio Base $" + prescioBasePs5 +" \n" + "IVA $" + IvaPs5 +" \n" + "Descuento $" + descuentosPs5 +" \n" + "Precio Final PS5 $" + precioFinalPs5 )

    } 
    else if(selecioneProducto == "xbox one"){

        alert(salida += " \n" +"Elegiste una Xbox One" +" \n" + "Precio Base $" + prescioBaseXboxOne +" \n" + "IVA $" + IvaXbox +" \n" + "Descuento $" + descuentosXbox +" \n" + "Precio Final Xbox One $" + precioFinalXbox )


    } else if(selecioneProducto == "nintendo"){

        alert(salida += " \n" +"Elegiste una Nintendo" +" \n" + "Precio Base $" + prescioBaseNintendo +" \n" + "IVA $" + IvaNintendo +" \n" + "Descuento $" + descuentosNintendo +" \n" + "Precio Final Nintendo $" + precioFinalNintendo )

    } else if(selecioneProducto == "pc gamer"){

        alert(salida += " \n" +"Elegiste una PC Gamer" +" \n" + "Precio Base $" + prescioBasePcGamer +" \n" + "IVA $" + IvaPcGamer +" \n" + "Descuento $" + descuentosPcGamer +" \n" + "Precio Final PC Gamer $" + precioFinalPcGamer )

    } else{

         alert("No elegiste ningun producto ")

    }
    }
    