
// si un numero es par o impar introducido por pantalla
//si el numero no es valido que nos pida de nuevo el numero



let numero = parseInt(prompt("introduce numero"));


while (isNaN(numero)) 
{
	numero = parseInt(prompt("introduce numero"));
}

if (numero % 2 == 0)
{
	alert("es un numero par");
}
else
{
	alert("el numero es impar");
}