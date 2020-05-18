
/*pida 6 numeros por pantalla y los meta en un array
tiene que mostrar el array en el cuerpo de la pagina
hay que ordenadorlo y mostrarlo (alfabetico)
mostrar cuantos elementos tiene el array
busqueda de un valor introducido por el usuario y que nos diga si esta y su posicion

*/


let array = [];

for (var i = 0; i < 6; i++) 
{
	numero[i] = prompt("introduce un numero")
	array.push(numero)



}


// let numero2 = prompt("introduce el numero 2")
// let numero3 = prompt("introduce el numero 3")
// let numero4 = prompt("introduce el numero 4")
// let numero5 = prompt("introduce el numero 5")
// let numero6 = prompt("introduce el numero 6")


// array.push(numero2)
// array.push(numero3)
// array.push(numero4)
// array.push(numero5)
// array.push(numero6)

console.log(array);


console.log(array.sort());

console.log(array.length);







