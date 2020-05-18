// mostrar todos los numeros entre 2 numeros introducidos por el usuario

let numero1 = parseInt(prompt("introduce un numero"));
let numero2 = parseInt(prompt("introduce otro numero"));

document.write( "de"+ numero1 +" a "+ numero2 + " estan estos numeros")
for (var i = numero1; i <= numero2; i++)
{
	document.write(i +"<br/>");
}