function Ejercicio1(){

  let numero1 = Number(prompt("Ingrese el primer número"));
  let numero2 = Number(prompt("Ingrese el segundo número"));
  let resultado = calcularSuma(numero1, numero2);

  alert("El resultado es " + resultado)

}

function calcularSuma(numero1, numero2){

  let suma = numero1 + numero2;

  if(numero1 == numero2){
    resultado = suma * 3;
  }

  else {
    resultado = suma;
  }

  return resultado;

}

function Ejercicio2(){

  let n = Number(prompt("Ingrese un número"));
  let resultado = calcularDiferencia(n);

  alert("El resultado es " + resultado)

}

function calcularDiferencia(n){

  if (n > 51) {
    let diferencia = n - 51;
    resultado = diferencia * 3;
  }

  else {
    let diferencia = 51 - n;
    resultado = diferencia;
  }

  return resultado;

}

function Ejercicio3(){

  let numero1 = Number(prompt("Ingrese el primer número"));
  let numero2 = Number(prompt("Ingrese el segundo número"));
  let resultado = verificarNumeros(numero1, numero2);

  alert(resultado);

}

function verificarNumeros(numero1, numero2){

  let suma = numero1 + numero2;

  if((numero1 == 30) || (numero2 == 30) || (suma == 30)){
    resultado = "Verdadero";
  }

  else {
    resultado = "Falso";
  }

  return resultado;

}

function Ejercicio4(){

  let numero = Number(prompt("Ingrese un número"));
  let resultado = verificarNumero(numero);

  alert(resultado)

}

function verificarNumero(numero){

  if ((numero == 10) || (numero == 100) || (numero == 200)) {
    resultado = "Verdadero";
  }

  else {
    resultado = "Falso";
  }

  return resultado;

}

function Ejercicio5(){

  let numero = Number(prompt("Ingrese un número"));
  let resultado = verificarMultiplo(numero);

  alert(resultado)

}

function verificarMultiplo(numero){

  if (numero % 7 == 0) {
    resultado = "El numero es múltipo de 7";
  }

  else {

    if (numero % 3 == 0) {
      resultado = "El número es múltipo de 3";
    }

    else {
      resultado = "El número no es múltipo de 3 ni de 7";
    }

  }

  return resultado;

}

function Ejercicio6(){

  let numero1 = Number(prompt("Ingrese el primer número"));
  let numero2 = Number(prompt("Ingrese el segundo número"));
  let resultado = verificarRango(numero1, numero2);

  alert(resultado);

}

function verificarRango(numero1, numero2){

  if ((numero1 >= 100 && numero1 <= 200) || (numero2 >= 100 && numero2 <= 200)) {
    resultado = "Alguno de los números está dentro del rango";
  }

  else {
    resultado = "Ninguno de los números está dentro del rango";
  }

  return resultado;

}

function Ejercicio8(){

  let numero1 = Number(prompt("Ingrese el primer número"));
  let numero2 = Number(prompt("Ingrese el segundo número"));
  let numero3 = Number(prompt("Ingrese el tercer número"));
  let resultado = verificarRango(numero1, numero2, numero3);

  alert(resultado);

}

function verificarRango(numero1, numero2, numero3){

  if ((numero1 >= 20 && numero1 <= 50) && (numero2 >= 20 && numero2 <= 50) && (numero3 >= 20 && numero3 <= 50)) {
    resultado = "Todos los números están dentro del rango";
  }

  else {
    resultado = "Alguno de los números no está dentro del rango";
  }

  return resultado;

}


function Ejercicio9(){

  let numero1 = Number(prompt("Ingrese el primer número"));
  let numero2 = Number(prompt("Ingrese el segundo número"));
  let resultado = verificarRango(numero1, numero2);

  alert(resultado);

}

function verificarRango(numero1, numero2){

  if ((numero1 >= 20 && numero1 <= 50) || (numero2 >= 20 && numero2 <= 50)) {
    resultado = "Verdadero";
  }

  else {
    resultado = "Falso";
  }

  return resultado;

}

function EjercicioEstructuraDatos() {

  let arrayValores = [1 , 3 , "a" , [1 , 2]];

  let arrayUsuario = [];

  datoIngresado = prompt("Ingrese un número");

  while (datoIngresado != "q") {

    arrayUsuario.push(Number(datoIngresado));

    datoIngresado = prompt("Ingrese un número");

  } 

  console.log("Números ingresados multiplicados por 2");

  arrayUsuario.map (datoIngresado => {

    console.log(datoIngresado + " x 2 = " + datoIngresado * 2);

  })

  let array = arrayValores.concat(arrayUsuario);

  console.log("Números primos");

  array.map (elemento => {

    if ((!isNaN(elemento)) && (verificarPrimo(elemento)) && (elemento != 1)) {
      console.log(elemento);
    }

    function verificarPrimo(elemento) {

      let i = 2;

      while (i < elemento) {

        if (elemento % i === 0) {
          return false;
        }

        i++;

      }

      return elemento;

    }
  
  })

  let elemento = 10; 

  console.log("Existe elemento " + elemento + ":");

  if (array.includes(elemento)){
    console.log("El elemento existe");
  }

  else {
    console.log("El elemento no existe");
  }

  console.log("Elementos no numéricos");

  noNumericos = array.filter (elemento => isNaN(elemento));

  console.log(noNumericos); 

  console.log("Elementos ordenados de menor a mayor");
 
  array.sort ((a, b) => {
  
    return a - b; 

  })

  console.log(array);

}

function EjercicioDiccionarios() {

  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let dni = Number(prompt("Ingrese su DNI"));

  let datos = {"nombre": nombre, "apellido": apellido, "Dni": dni};

  console.log (datos);

  if (dni % 2 == 0) {
    datos.dniEsPar = "Es par";
  }

  console.log (datos);

  delete datos.nombre;
  delete datos.apellido;

  console.log (datos);

  let cadena = JSON.stringify(datos);

  console.log (cadena);

}