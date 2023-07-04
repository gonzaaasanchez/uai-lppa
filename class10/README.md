Descripción del problema a resolver

La problemática de la semana 09 consiste en extender el diario online de la semana 08 para que al presionar el botón “enviar” se envien los datos cargados en el formulario a un servidor web mediante una llamada HTTP desde JavaScript.
En caso de que la validación de datos sea correcta, se deben enviar todos los datos del formulario a la siguiente URL: http://curso-dev-2021.herokuapp.com/newsletter y al recibir la respuesta se debe mostrar un cartel (modal) con un mensaje indicando si la suscripción al newsletter fue exitosa o falló. 
En caso de ser exitosa, el modal debe mostrar también los datos recibidos como respuesta de la llamada HTTP. Además, se deben guardar los datos recibidos en LocalStorage y recargarlos la próxima vez que se refresque la pantalla.
En caso de que el código de respuesta indique un error, el modal debería mostrar detalles del error. No se debe guardar nada en el LocalStorage.
Subir todos los cambios a Github y responder la problemática con la URL de la página de Github Pages con el formulario funcionando.


Pasos a seguir:

Continuando con el proyecto del diario realizado en la Semana 08, en la función que maneja el evento click del botón “enviar”, recolectar todos los datos del formulario y verificar que pase la validación.
Enviar dichos datos al servidor mediante método GET, con los valores de los campos utilizando query params.
Ejemplo: http://curso-dev-2021.herokuapp.com/newsletter?nombre=Juan&apellido=Perez
Asegurarse de que todos los datos del formulario se encuentren en la url para recibir una respuesta satisfactoria.
Crear las funciones que manejan el éxito y fracaso del envío de datos.
Crear un modal con HTML y CSS que esté por encima del resto de la página y se muestre delante de todo.
Ocultar el modal utilizando clases CSS y agregar los manejadores de eventos JavaScript necesarios para hacerlo aparecer y desaparecer según corresponda.
Agregar el código necesario para guardar en LocalStorage los datos enviados en caso de que el envío sea exitoso.
En el evento onload del objeto window, revisar si hay datos guardados en LocalStorage y utilizar dichos datos para cargar valores predeterminados al formulario.
Hacer commits con el progreso y subir todos los cambios siempre verificando que se vea correctamente en Github Pages.


ENTREGA
Responder a la Problemática con el link de Github Pages y también el link del repositorio creado.