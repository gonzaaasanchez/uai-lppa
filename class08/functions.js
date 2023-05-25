console.log("/////////// FUNCTIONS /////////// ")

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar el resultado en una variable, mostrando el valor dedicha variable en la consola del navegador

console.log("a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar el resultado en una variable, mostrando el valor dedicha variable en la consola del navegador")

function sum(value1, value2) {
    return value1 + value2;
}

var value1 = 2;
var value2 = 4;
var result = sum(value1, value2);

console.log(`Valores: ${value1}, ${value2}`);
console.log(`Resultado suma: ${result}`);


// b. A la función suma anterior, agregarle una validación para controlar si alguno delos parámetros no es un número, mostrar una alerta aclarando que uno de losparámetros tiene error y retornar el valor NaN como resultado

console.log("b. A la función suma anterior, agregarle una validación para controlar si alguno delos parámetros no es un número, mostrar una alerta aclarando que uno de losparámetros tiene error y retornar el valor NaN como resultado")

function sumWithNumberValidation(value1, value2) {
    if (!Number(value1) || !Number(value2)) {
        alert("Excercise b: parameter/s are not number");
        return NaN;
    }
    return value1 + value2;
}

var value3 = 2;
var value4 = 4;
var value5 = "a";
var result2 = sumWithNumberValidation(value3, value4);
var result3 = sumWithNumberValidation(value3, value5);

console.log(`Valores intento 1: ${value3}, ${value4}`);
console.log(`Resultado suma: ${result2}`);
console.log(`Valores intento 2: ${value3}, ${value5}`);
console.log(`Resultado suma: ${result3}`);

// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero

console.log("c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero")

function validateInteger(value) {
    return Number.isInteger(value);
}

var value6 = 2;
console.log(`Número ${value6} es entero: ${validateInteger(value6)}`);
value6 = -2;
console.log(`Número ${value6} es entero: ${validateInteger(value6)}`);
value6 = 1.3;
console.log(`Número ${value6} es entero: ${validateInteger(value6)}`);


// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que losnúmeros sean enteros.En caso que haya decimales mostrar un alerta con elerror y retorna el número convertido a entero(redondeado)

console.log("d. A la función suma del ejercicio 6b) agregarle una llamada que valide que losnúmeros sean enteros.En caso que haya decimales mostrar un alerta con elerror y retorna el número convertido a entero(redondeado)")

function sumWithIntNumberValidation(value1, value2) {
    if (!Number(value1) || !Number(value2)) {
        alert("Excercise d: parameter/s is not a number");
        return undefined;
    }
    if (!validateInteger(value1)) {
        value1 = Math.round(value1);
        alert("Excercise d: value1 is not integer: rounded value is: " + value1);
    }
    if (!(validateInteger(value2))) {
        value2 = Math.round(value2);
        alert("Excercise d: value2 is not integer: rounded value is: " + value2);
    }
    return value1 + value2;
}

console.log(`Valores intento 1: ${value3}, ${value4}`);
var resultd1 = sumWithIntNumberValidation(value3, value4);
console.log(`Suma intento 1: ${resultd1}`);

console.log(`Valores intento 2: ${value4}, ${value5}`);
var resultd2 = sumWithIntNumberValidation(value4, value5);
console.log(`Suma intento 2: ${resultd2}`);

console.log(`Valores intento 3: ${value4}, ${value6}`);
var resultd3 = sumWithIntNumberValidation(value4, value6);
console.log(`Suma intento 3: ${resultd3}`);


// e. Convertir la validación del ejercicio 6d) en una función separada y llamarladentro de la función suma probando que todo siga funcionando igual.

console.log("e. Convertir la validación del ejercicio 6d) en una función separada y llamarladentro de la función suma probando que todo siga funcionando igual.")

function validateIntegers(value1, value2) {
    if (!validateInteger(value1)) {
        value1 = Math.round(value1);
        alert("Excercise e: value1 is not integer: rounded value is: " + value1);
    }
    if (!(validateInteger(value2))) {
        value2 = Math.round(value2);
        alert("Excercise e: value2 is not integer: rounded value is: " + value2);
    }
    return [value1, value2]
}

function sumWithIntNumberValidationExcerciseE(value1, value2) {
    if (!Number(value1) || !Number(value2)) {
        alert("Excercise e: parameter/s is not a number");
        return undefined;
    }
    [value1, value2] = validateIntegers(value1, value2);

    return value1 + value2;
}

console.log(`Valores intento 1: ${value3}, ${value4}`);
var resulte1 = sumWithIntNumberValidationExcerciseE(value3, value4);
console.log(`Suma intento 1: ${resulte1}`);

console.log(`Valores intento 2: ${value4}, ${value5}`);
var resulte2 = sumWithIntNumberValidationExcerciseE(value4, value5);
console.log(`Suma intento 2: ${resulte2}`);

console.log(`Valores intento 3: ${value4}, ${value6}`);
var resulte3 = sumWithIntNumberValidationExcerciseE(value4, value6);
console.log(`Suma intento 3: ${resulte3}`);