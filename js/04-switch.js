// se usa cuando tenemos programas que simulen un menu y reemplaza a una serie if animados.
let estacion = prompt("Seleccione su estacion del año preferida: 1- verano, 2- primavera, 3-otoño, 4- invierno");

// if(estacion === "1"){
//     document.write("Sushi");
// }else if( estacion === "2"){
//     document.write("Una mila");
// }else if(estacion === "3"){
//     document.write("Fideos con manteca y queso");
// }else if(estacion === "4"){
//     document.write("Guiso de fideos moñitos");
// }else{
//     document.write("Ingreso un numero erroneo");
// }

/*switch(opcion){
    case "1":
        todas las lineas de codigo 
        break;
    case "2":
        todas las lineas de codigo 
        break;
    case "3":
        todas las lineas de codigo 
        break;
    case "4":
        todas las lineas de codigo 
        break;
    default: 
        todas las lineas de codigo a ejecutar si no se cumplio ningun case
} */

switch(estacion){
    case "1":
        document.write("Sushi");
        break; 
    case "2":
        document.write("Sushi");
        break; 
    case "3":
        document.write("Sushi");
        break; 
    case "4":
        document.write("Sushi");
        break; 
    default:
        document.write("Ingreso un numero erroneo");
}