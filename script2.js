let nombre = "Lu";
let edad = 21;

let a,b,c;
a = 1;

const pi2 = 3.14

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
console.log(11%2)
console.log(2**3)

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

let tripilicar = n => n*3 // flecha =>
console.log(tripilicar(3))
function mostrarResultado (funcion){
    console.log(funcion)
}
mostrarResultado(duplicar(5))

//A PARTIR D'ICI IL ME MANQUE UN COURS car ordi éteint

function dejarPasar(edad){
    if (edad >= 18){
        console.log("dejar pasar");
    }
    else {
        console.log("no dejar pasar");
    }
}

dejarPasar(19)
dejarPasar(17)

function montaniaRusa(altura, acompaniado){
    if (altura >= 1.70){
        console.log("Puede pasar");
    }
    else if (acompaniado){
        console.log("Puede pasar");
    }
    else {
        console.log("No puede pasar");
    }
}

montaniaRusa(1.70, false)
montaniaRusa(1.69, true)
montaniaRusa(1.69, false)


function contarHasta10(){
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
}




//DERNIER COURS SUR JAVASCRIPT
//Rappel cours précédent

let arrayDeObjetos = [
    {nombre : "Conrad"},
    {nombre : "Lucia"},
    {nombre : "Esteban"},
]

console.table(arrayDeObjetos)

function aumentarEdad(array){
    for (let i=0; i<array.length; i++){
        array[i].edad += 1
    }
}

function filtrarViejos(array){
    let filtrados = []
    for (let i=0; i<array.length; i++){
        if (array[i].edad >= 25){
            filtrados.push(array[i])
        }
    }
    return filtrados
}

aumentarEdad(arrayDeObjetos)

console.table(arrayDeObjetos)

let listaFiltrada = filtrarViejos(arrayDeObjetos)
console.table(listaFiltrada)

//Début du vrai cours du 02/05/2024
localStorage.setItem("nombreJugador", dato)
let nombreJ = localStorage.getItem("nombreJugador")

prompt (`Hola ${nombreJ}, ${aumentarEdad(arrayDeObjetos), $(2+2)}`)

localStorage.removeItem("nombreJugador")
localStorage.clear()

let mejorProfesor = {
    nombre : "Steve",
    appellido : "Piazza",
}

console.log(mejorProfesor.appellido)
let mejorProfesorJSON = JSON.stringify(mejorProfesor)
console.log(mejorProfesorJSON)
console.log(mejorProfesorJSON.nombre)

//let dolarHoy = JSON.parse("https://pokeapi.co/api/v2/pokemon/ditto")
//console.log("dolarHoyAPI")


