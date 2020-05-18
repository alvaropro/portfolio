
//tabla de multiplicar de un numero introducido por pantalla



let numero = parseInt(prompt("introduce numero"));


for (var i = 1; i <= 10; i++) 
{
	document.write(i + " x " + numero + " = " + (i*numero) + "<br/>")
}

