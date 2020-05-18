/*programa que pide dos numeros 
cual es mayor
cual es menor
si esos numero son iguales*/

// ----------------------------------------------------

/*pedir dos numeros 
pedir dos numeros 
comprobar cual
	si 1 es mayor
	si 2 es mayor 
mirar si esos numeros son iguales
......*/

// let numero1 = parseInt(prompt("introduce el primer numero"));
// let numero2 = parseInt(prompt("introduce el segundo numero"));

// // let numero1 = 5;
// // let numero2 = 7;

// // console.log(numero1, numero2);

// if (numero1 == numero2)
// {
// 	alert("numeros son iguales");
// }
// else if (numero1 !== numero2)
// {
// 	alert("los numeros no son iguales");
// }
// else if (numero1 > numero2)
// {
// 	alert("el numero mayor es" + " " + numero1);
// }
// else if (numero1 < numero2)
// {
// 	alert("el numero mayor es" + " " + numero2);
// }
// else
// {
// 	alert("introduce numeros correctos");
// }



let numero1 = parseInt(prompt("introduce el primer numero"));
let numero2 = parseInt(prompt("introduce el segundo numero"));


if (numero1 == numero2)
{
	alert("numeros son iguales");
}
else if (numero1 > numero2)
{
	alert("el numero mayor es" + numero1);
	alert("el numero menor es" + numero2);
}
else if (numero2 > numero1)
{
	alert("el numero mayor es" + " " + numero2)
	alert("el numero menor es" + " " + numero1)
}
else
{
	alert("introduce numeros correctos");
}






