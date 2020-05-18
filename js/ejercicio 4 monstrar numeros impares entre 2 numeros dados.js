// mostrar numeros impares que hay entre dos numeros introducidos por el usuario

let numero1 = parseInt(prompt("introduce el primer numero"));
let numero2 = parseInt(prompt("introduce el segundo numero"));

while (numero1 < numero2) 
{
	numero1++
	// comprobar si un numero es impar
	if (numero1%2 !=0)
	{
		console.log('el ' + numero1 + ' es impar');
	}
}
