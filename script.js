let nombre = "Lu";
let edad = 21;
console.log('Hola Mundo!');

const ARRAY1 = [1, "Esteban", true];

ARRAY1.push(2);
console.log(ARRAY1);
console.log(ARRAY1[2]);

let estudiante1 = {
    nombre : "Lucia",
    edad : 23,
    adeuda : false,
    cumplirAnios : function(){
        diaymes = "20/07"
        estudiante1.edad = estudiante1.edad + 1;
    }
}

console.log(estudiante1.nombre)
estudiante1.cumplirAnios()

console.log(1+1);
console.log("esteban" + "piazza");
console.log("esteban"+1);
console.log("1"+1);
console.log("1"-1);
console.log("esteban"-1);
console.log(1*2);
console.log(10/2);
console.log(10%2);

console.log(10<=10);
console.log(10==10);
console.log("10"==10);
console.log("10"===10);
console.log("10"!=10);
console.log("10"!==10);

console.log("perro" && "gato");
console.log("perro" || "gato");

function saludar(){
    console.log("Hola mundo!");
}

saludar()

function duplicar(n){
    return n * 2;
}

console.log(duplicar(4))

let dividirPor2 = function(n){return n/2}