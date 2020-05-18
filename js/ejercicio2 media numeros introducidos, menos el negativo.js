// usando buble muestra la media introducida por los usuarios
// hasta que metas un numero negativo, en ese caso se muestra el resultado

// pedimos numeros
// 	mostramos media
// pedimos numeros
// 	mostramos media
// si introduce numero negativo
// 	se rompe el bucle
// 	se muestra media



var suma = 0;
var contador= 0;

do
{
	var numero = parseInt(prompt("introduce numero hasta que metas uno negativo")); 

	if (isNaN(numero))
	{
		numero=0;
	}

	else if (numero >=0)
	{
		suma = suma + numero;
		//suma +=numero
		contador++;
	}
}
while (numero >= 0);

alert("la suma de todos los numero es" + suma);
alert("la media de todos los numeros es" + (suma/contador));


// usando buble muestra la media introducida por los usuarios
// hasta que metas un numero negativo, en ese caso se muestra el resultado

// pedimos numeros
// 	mostramos media
// pedimos numeros
// 	mostramos media
// si introduce numero negativo
// 	se rompe el bucle
// 	se muestra media



var suma = 0;
var contador= 0;

do
{
	var numero = parseInt(prompt("introduce numero hasta que metas uno negativo")); 

	if (isNaN(numero))
	{
		numero=0;
	}

	else if (numero >=0)
	{
		suma = suma + numero;
		//suma +=numero
		contador++;
	}
}
while (numero >= 0);

alert("la suma de todos los numero es" + suma);
alert("la media de todos los numeros es" + (suma/contador));


