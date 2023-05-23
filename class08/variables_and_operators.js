console.log("/////////// VARIABLES EN OPERATORS /////////// ")

//a. Crear dos variables numéricas y utilizar el operador suma para guardar el valorde la suma de ambos números en una 3er variable

console.log("a. Crear dos variables numéricas y utilizar el operador suma para guardar el valorde la suma de ambos números en una 3er variable")
var var1, var2, var3;
var1 = 3;
var2 = 5;
var3 = var1 + var2;
console.log("var1: ", var1, "var2: ", var2);
console.log("resultado: ", var3);


//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una3er variable

console.log("b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una3er variable");
var string1, string2, string3;
string1 = "hola";
string2 = "soy otro string";
string3 = string1 + string2;
console.log("string1: ", string1, "string2: ", string2);
console.log("el string concatenado es: ", string3);


//c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad deletras del string) guardando el resultado de la suma en una 3er variable (utilizar length)

console.log("c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad deletras del string) guardando el resultado de la suma en una 3er variable (utilizar length)");
var string4, string5, string6;
string4 = "hola";
string5 = "que tal";
string6 = string4.length + string5.length;
console.log("string4: ", string4, "string5: ", string5);
console.log("longitud de los dos textos concatenados: ", string6);