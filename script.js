let numero = 1
var cero = 0 
const dos = 2 

const input1 = document.getElementById('input3').value;

function Multiplicar() {
  // Obtener los valores de los inputs
  const input5 = document.getElementById('multiplicar1').value;
  const input6 = document.getElementById('multiplicar2').value;

  console.log(input5)
  console.log(input6)

  const num1 = parseFloat(input5);
  const num2 = parseFloat(input6);
  
  // Sumar los números
  const Multiplicar= num1 * num2;
  
  // Mostrar el resultado en el párrafo con id 'resultado'
  document.getElementById('resultadoMultipicar').textContent = "Resultado: " + Multiplicar;
}

function Division() {
  // Obtener los valores de los inputs
  const input5 = document.getElementById('division1').value;
  const input6 = document.getElementById('division2').value;

  console.log(input5)
  console.log(input6)

  const num1 = parseFloat(input5);
  const num2 = parseFloat(input6);
  
  // Sumar los números
  const division= num1 / num2;
  
  // Mostrar el resultado en el párrafo con id 'resultado'
  document.getElementById('resultadoDivision').textContent = "Resultado: " + division;
}

function Sumar() {
  // Obtener los valores de los inputs
  const input5 = document.getElementById('sumar1').value;
  const input6 = document.getElementById('sumar2').value;

  console.log(input5)
  console.log(input6)

  const num1 = parseFloat(input5);
  const num2 = parseFloat(input6);
  
  // Sumar los números
  const Sumar= num1 + num2;
  
  // Mostrar el resultado en el párrafo con id 'resultado'
  document.getElementById('resultadoSumar').textContent = "Resultado: " + Sumar;
}

function Restar() {
  // Obtener los valores de los inputs
  const input5 = document.getElementById('restar1').value;
  const input6 = document.getElementById('restar2').value;

  console.log(input5)
  console.log(input6)

  const num1 = parseFloat(input5);
  const num2 = parseFloat(input6);
  
  // Sumar los números
  const Restar= num1 - num2;
  
  // Mostrar el resultado en el párrafo con id 'resultado'
  document.getElementById('resultadoRestar').textContent = "Resultado: " + Restar;
}

// Number
let edad = 25;
let precio = 19.99;

// String
let nombre = "Ana";
let saludo = 'Hola, ¿cómo estás?';

// Boolean
let esMayorDeEdad = true;
let estaLloviendo = false;

// Undefined
let variableSinValor;

// Null
let valorNulo = null;

// Symbol
let idUnico = Symbol('id');

// BigInt
let numeroGrande = 12345678901234567890;

// Object
let persona = {
    nombre: "Carlos",
    edad: 28,
    sexo: {},
};

// Array
let frutas = ["manzana", "banana", "naranja"];

// Function
function decirHola() {
    console.log("Hola!");
}

let persona2 = {
  nombre: 'Juan',
  edad: 30
};

Array
let colores = ['rojo', 'verde', 'azul'];

function saludar() {
  console.log('Hola!');
}

let i = 789

for (let i = 0; i < colores.length; i++) {
  console.log("este color es " + colores[i]);
}
// Array
let colonias = ["coyoacan", "tlalpan", "tlahuac", "cuahutemoc", "benito juarez", "xochimilco"];

for (let i = 0; i < colonias.length; i++) {
  console.log("esta colonia es " + colonias[i]);
  
}
// Array
let papeleria = ["lapiz", "goma", "compas", "regla", "cuaderno", "cartulina"];

for (let i = 0; i < papeleria.length; i++) {
  console.log("la papeleria tiene " + papeleria[i]);
  
}
// Array
let verduras = ["aguacate", "jitomate", "cebolla", "zanahoria", "papa", "calabaza"];

for (let i= 0; i < verduras.length; i++) {
  console.log("la verduleria tiene " + verduras[i]);
  
}
// Array
let coctel = ["chantilly", "melon", "fresa", "sandia", "miel", "granola", "platano", "durazno"];

for (let i= 0; i < coctel.length; i++) {
  console.log("el coctel tiene " + coctel[i]);
  
}

function miFuncion () {
  console.log("me encantas precioso")
};

const myFunction = ( text ) => {
  console.log(text)
}

miFuncion() 
myFunction( "Mi reina es hermosa" )
myFunction( "y sabrosa tambien" )

const Consologueando = ( ) => {
  console.log("mi rey es el mejor")
}

Consologueando()


const Nuevafuncion = ( mensaje, segundoMensaje ) => {
  console.log("pinky convenenciero")
  console.log( mensaje )
  console.log( segundoMensaje )
}

const OtraFuncion = ( text ) => {
  console.log( text ) 
}