console.log("/////////// STRINGS /////////// ")

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase)

console.log("a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase)");
var string1;
string1 = "hola soy un string largo";
console.log("string1: ", string1, "string1 en mayúscula: ", string1.toUpperCase());


// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nuevavariable(utilizar substring).

console.log("b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nuevavariable(utilizar substring).");
var string2, string3;
string2 = "soy un string para el ejercicio b";
string3 = string2.substring(0, 5);
console.log("string2: ", string2, "string3 recortando string2 a 5 caracteres: ", string3);


// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring)

console.log("c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring)");
var string2, string3;
string2 = "soy un string para el ejercicio c";
string3 = string2.substring(0, 5);
console.log("string2: ", string2, "string3 recortando string2 a 5 caracteres: ", string3);


// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera letra en mayúscula y las demás en minúscula.Guardar elresultado en una nueva variable(utilizar substring, toUpperCase, toLowerCase yel operador +)

console.log("d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera letra en mayúscula y las demás en minúscula.Guardar elresultado en una nueva variable(utilizar substring, toUpperCase, toLowerCase yel operador +)");

var string4, string5;
string4 = "soY un sTring para El eJerCIcio d";
string5 = string4.substring(0, 1).toUpperCase() + string4.substring(1, string4.length).toLowerCase();
console.log("string4: ", string4, "string4 son sólo primer mayúscula: ", string5);


// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco.Encontrar la posición del primer espacio en blanco y guardarla en unavariable(utilizar indexOf)

console.log("e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco.Encontrar la posición del primer espacio en blanco y guardarla en unavariable(utilizar indexOf)");

var string6, spaceIndex;
string6 = "vamos a buscar el índice del primer espacio";
spaceIndex = string6.indexOf(" ");
console.log("string6: ", string6, "posición del primer espacio: ", spaceIndex);


// f. Crear una variable de tipo string con al menos 2 palabras largas(10 caracteres yalgún espacio entre medio).Utilizar los métodos de los ejercicios anteriores paragenerar un nuevo string que tenga la primera letra de ambas palabras enmayúscula y las demás letras en minúscula(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)

console.log("f. Crear una variable de tipo string con al menos 2 palabras largas(10 caracteres yalgún espacio entre medio).Utilizar los métodos de los ejercicios anteriores paragenerar un nuevo string que tenga la primera letra de ambas palabras enmayúscula y las demás letras en minúscula(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)");

var string7, spaceIndex2, string8;
string7 = "sOYUnstring cONpalabRAslaRGas soMOs3palaBRASLargas mentiraSOMOs4";
spaceIndex2 = string7.indexOf(" ");
string8 = string7.substring(0, 1).toUpperCase() + string7.substring(1, spaceIndex2).toLowerCase() + string7.substring(spaceIndex2, spaceIndex2 + 1) + string7.substring(spaceIndex2 + 1, spaceIndex2 + 2).toUpperCase() + string7.substring(spaceIndex2 + 2, string7.length).toLowerCase();

console.log("string7: ", string7, "string7 con primeras letras de las primeras 2 palabras en mayúscula: ", string8);