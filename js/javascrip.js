// el usuario crea y elimina notas en listado
// las notas se almacenan en local storage
// se pueden agregar cantidad ilimitada
// al cargar pagina se cargan en local storage
// al eliminarse se quitan del local storage

// ----------------------------------------------------


// variables 
const listaTweets = document.getElementById('lista-tweets');

// event-liseners


eventListeners();

function eventListeners() {
	
	// cuando se envia el formulario
	document.querySelector('#formulario').addEventListener('submit', agregarTweet);
	
}




// funciones

function agregarnota (e) {

	e.preventDefault();
	console.log('formulario enviado');

	// leer el valor de la tarea
	const tweet = document.getElementById('tweet').value;


	// crear boton para eliminar
	const botonBorrar = document.createElement('a');
	botonBorrar.classList = "borrar-tweet";
	botonBorrar.innerText = "X";



	// crear un elemento y añadir a la lista
	const li = tweet;
	li.innerText = tweet;

	// añade el boton de borrar al tweet
	li.appendChild(botonBorrar);

	// añade el tweet a la lista
	listatweets.appendChild(li);
	
}







