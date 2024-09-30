/* 
Ejercicio 1
*/

function parOImpar(numero) {
    if(numero % 2 === 0) {
        console.log(`${numero} es un número par`);
    } else {
        console.log(`${numero} es un número impar`);
        
    }
}
parOImpar(1)
parOImpar(2)
parOImpar(15)
parOImpar(20)

console.log("------------------------------------------------------");


/* 
Ejercicio 2
*/

function compararNumeros(num1, num2) {
    if(num1 > num2){
        console.log(`${num1} es mayor que ${num2} `)
    } else if (num1 < num2) {
        console.log(`${num2} es mayor que ${num1} `)
    } else {
        console.log(`${num1} y ${num2} son iguales `)
    }
}

compararNumeros(20, 5);
compararNumeros(1, 2);
compararNumeros(10, 10);

console.log("------------------------------------------------------");

/* 
Ejercicio 3
*/

function multiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log(`${numero} es multiplo de 5`);
    } else {
        console.log(`${numero} no es multiplo de 5`);
    }
}

multiploDeCinco(15)
multiploDeCinco(1)
multiploDeCinco(10)


console.log("------------------------------------------------------");

/* 
Ejercicio 4
*/

function imprimirNumero(numero) {
    for(let i = 0; i <= numero; i++){
        console.log(i)
    }
}

imprimirNumero(6);

console.log("------------------------------------------------------");

/* 
Ejercicio 5
*/

function imprimirPalabra(palabra, cantidad) {
    for ( let i = 0; i < cantidad; i++){
        console.log(palabra)
    }
}

imprimirPalabra("Hola Mundo!", 5)

console.log("------------------------------------------------------");

/* 
Ejercicio 6
*/

const numeros = [1, 2, 3, 4, 5];

function imprimirNumeros(array) {
    for(let i = 0; i < array.length; i++ ){
        console.log(array[i]);
        
    }
}

imprimirNumeros(numeros)

console.log("------------------------------------------------------");

/* 
Ejercicio 7
*/

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayNumeros(array) {
    for( let i = 0; i < array.length; i++){
        if(i === 5) {
            continue
        }

        console.log(array[i])
    }
}
arrayNumeros(numeros1);

console.log("------------------------------------------------------");

/* 
Ejercicio 8
*/

const numbers = [1, 2, 3, 4, 5];

function multiplicarNumeros(array, multiplicador) {
    for ( let i = 0; i < array.length; i++){
        console.log(array[i] * multiplicador);
        
    }
}

multiplicarNumeros(numeros, 5);


