console.log("/////////// IF-ELSE /////////// ")

// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si elvalor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than0,5” y sino un alerta con el mensaje “Lower than 0,5”.

console.log("a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si elvalor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than0,5” y sino un alerta con el mensaje “Lower than 0,5”.")

var num = Math.random();
if (num >= 0.5) {
    console.log('num ', num, ' is greater or equal than 0,5');
} else {
    console.log('num ', num, ' is lower than 0,5');
};


// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 ymuestre los siguientes mensajes de alerta:
// i. “Bebe” si la edad es menor a 2 años;
// ii. “Niño” si la edad es entre 2 y 12 años;
// iii. “Adolescente” entre 13 y 19 años;
// iv. “Joven” entre 20 y 30 años;
// v. “Adulto” entre 31 y 60 años;
// vi. “Adulto mayor” entre 61 y 75 años; vii. “Anciano” si es mayor a 75 años

console.log("b. Crear una variable “Age” que contenga un número entero entre 0 y 100 ymuestre  un mensaje de alerta")

var edad = Math.floor(Math.random() * 100);
console.log("Edad: ", edad)
if (edad < 2) console.log('Bebe');
if (edad >= 2 && edad <= 12) console.log('Niño');
if (edad >= 13 && edad <= 19) console.log('Adolecente');
if (edad >= 20 && edad <= 30) console.log('Joven');
if (edad >= 31 && edad <= 60) console.log('Adulto');
if (edad >= 61 && edad <= 75) console.log('Adulto mayor');
if (edad > 75) console.log('Anciano');
