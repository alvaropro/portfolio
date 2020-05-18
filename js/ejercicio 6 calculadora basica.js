// calculadora en js
// pida dos numeros por pantalla
// si metemos un numero mal que nos lo vuelva a pedir
// si no metes nada sea = 0
// que nos muestre en la pagina, en una alerta y por consola el resultado de 
// +-* //

/*if (isNaN(numero1) || isNaN(numero2))
{
	calculadora();
}
*/


let numero1 = parseInt(prompt("introduce el primer numero"));
let numero2 = parseInt(prompt("introduce el segundo numero"));


while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) 
{
	alert("no has introducido numeros, vuelve a intentarlo")

	numero1 = parseInt(prompt("introduce el primer numero"));
	numero2 = parseInt(prompt("introduce el segundo numero"));
}

let resultado = 

(numero1 + numero2) + "<br/>"+
(numero1 - numero2) + "<br/>"+
(numero1 * numero2) + "<br/>"+
(numero1 / numero2);

let resultado2 = 

(numero1 + numero2) + "\n" +
(numero1 - numero2) + "\n"+
(numero1 * numero2) + "\n"+
(numero1 / numero2);

document.write(resultado);
alert(resultado2);







