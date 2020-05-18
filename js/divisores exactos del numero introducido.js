
// mostrar numeros divisores de un numero introducido por pantalla

let numero = parseInt(prompt("introduce numero"));


for (var i = 1; i < numero; i++) 
{
	if (numero%i ==0)
	{
		console.log(i + "es el numero");
	}
	
}