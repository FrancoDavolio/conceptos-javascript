/* while (condicion logica){
    todo el codigo que quiero que se repita 
    cambiar la condicon logica
}*/
/*
let cantidaMates = 1;

while(cantidaMates <= 20){
    document.write("<br>Mates cebados: " + cantidaMates);
    cantidaMates++;// cantidaMates = cantidaMates + 1;
} 
*/

/* do-while, hacer...mientras (se cumpla una condicion logica);

do {
    todas las lineas de codigo a ejecutar
    cambiar la condicion logica 
}while(condicion logica);
*/

/*let cantidaMates = 20

do{
    document.write("<br>Mates cebados: N " + cantidaMates);
    cantidaMates--;
}while(cantidaMates >= 1);*/

/*bucle for

for(inicializar una variable; condicion logica; incrementar o decrementar la variable creada ){
    todas las lineas q quiero ejecutar muchas veces
};
*/
for (let mates = 1; mates <= 20; mates++) {
    document.write("<br>Numero de Mates: "+mates)
}