/*Ejercicio de números perfectos*/
let numeros = 4;
let avance = 1
let divisores = [];
let perfectos = [];
let contador = 1;

while (true) {
    contador = 1;
    while (contador < avance) {
        if (avance%contador == 0) {
            divisores.push(contador);
        }
        contador++;
    }

    let verificar = (divisores.reduce((a, b) => a + b, 0));

    if (avance == verificar) {
        perfectos.push(avance);
    }

    divisores = [];

    if (perfectos.length == numeros) {
        break
    } else {
        avance++;
    }
}
console.log("La cantidad de perfectos es: ", numeros, "Los números perfectos son los siguientes: ", perfectos);