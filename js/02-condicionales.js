/* Estructura if
 
if(condicion logica){
    todas las lineas de codigo que quiero que haga mi programa cuando se cumple la  condicion, o el resultado de la condicion es true.
}else{
    todo el codigo que quiero ejecutar cuando la condicion no se cumple o me da false.
}
*/

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un segundo numero"));

if (num1 > num2) {
    document.write("El numero mas grande es " + num1)
} else if (num1 === num2) {
    document.write("Los dos numeros son iguales")
} else {
    document.write("El numero mas grande es " + num2)
};


