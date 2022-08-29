alert ("Bienvenido")
alert ("Esta aplicacion permite escribir un mensaje y repetir ese mensaje la cantidad de veces que quieras")

let mensaje = prompt("ingrese su mensaje")
let x = parseInt(prompt("ingrese en números la cantidad de veces que se van a repetir"))

for (let i = 1; i <= x; i++){
alert (mensaje);
}

switch(parseInt(prompt("ingrese una opcion \n 1- Volver al inicio \n 2- salir"))){
    case 1: alert("presiona F5")
    break;
    case 2:alert("Gracias por utilizar esta aplicacion")
    let opcion = parseInt(prompt ("antes de irte recomendarias esta funcion a tus amigos \n 1-Si \n 2-No"))
if (opcion === 1){alert("Comparte esta aplicacion!");}

if (opcion === 2){alert("Lamentamos que no te guste, trataremos de mejorar para la proxima");}
    break;
}