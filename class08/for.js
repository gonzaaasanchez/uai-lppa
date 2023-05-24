console.log("/////////// FOR /////////// ")

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando unbucle for de JavaScript para mostrar una alerta utilizando cada una de laspalabras

console.log("a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando unbucle for de JavaScript para mostrar una alerta utilizando cada una de laspalabras")

var array = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];
console.log("array: ", array);
array.forEach(function (element) {
    // alert("for excercise a: " + element);
});

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula ymostrar una alerta por cada palabra modificada

console.log("b. Al array anterior convertir la primera letra de cada palabra en mayúscula ymostrar una alerta por cada palabra modificada")

var array = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];
array.forEach(function (element) {
    var capitalized = element.substring(0, 1).toUpperCase() + element.substring(1).toLowerCase();
    // alert("for excercise b: " + capitalized)
});

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al arraydel punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro dela variable sentence.Al final mostrar una única alerta con la cadena completa

console.log("c. Crear una variable llamada “sentence” que tenga un string vacío, luego al arraydel punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro dela variable sentence.Al final mostrar una única alerta con la cadena completa")

var sentence = "";
array.forEach(function (element) {
    sentence += element;
})
console.log(sentence);
// alert("for excercise c: " + sentence)


// d. Crear una array vacío y con un bucle for de 10 repeticiones.Llenar el array conel número de la repetición, es decir que al final de la ejecución del bucle fordebería haber 10 elementos dentro del array, desde el número 0 hasta al número9. Mostrar por la consola del navegador el array final(utilizar console.log).

console.log("d. Crear una array vacío y con un bucle for de 10 repeticiones.Llenar el array conel número de la repetición, es decir que al final de la ejecución del bucle fordebería haber 10 elementos dentro del array, desde el número 0 hasta al número9.Mostrar por la consola del navegador el array final(utilizar console.log).")

var emptyArray = [];
for (let index = 0; index < 10; index++) {
    emptyArray.push(index);
}
console.log("emptyArray rellenado con 10 elementos: " + emptyArray);
