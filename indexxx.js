//## 7 funciones métodos
function saludar(){
    var saludo = "Hola geeks";
    console.log(saludo);
  }
  
  function saludarGeeks(){
    var saludo = "Hola geeks";
   return saludo;
  }
  
  //parametros
  function datosper(nombre,edad){
    var res = nombre+" tiene "+edad+" años";
    console.log("nombre: "+nombre);
    console.log("edad: "+edad);
   return res;
  }
  var usuario = datosper("Juan",24);
  console.log(usuario);
//Contador
//pre inicializando valores
function contador(cant=10){
   console.log("cantidad: "+cant);
}
contador(24);
//parametros REST ... (EL RESTO DE...)
function paella(ing1,ing2,...masingredientes){
  console.log("Ingrediente 1: ",ing1);
  console.log("Ingrediente 2: ",ing2);
  console.log("masingredientes: ",masingredientes);
}
paella("Arroz bomba","pimientos","gambas","calamar");
function platillo(...masingredientes){    
    console.log("platillo: ",masingredientes);
  }
  platillo("Arroz bomba","pimientos","gambas","calamar");
//SPREAD //esparcidos
  //pizza
  var ingBase = ["tomate","queso"];
function pizza(ing1,ing2,ing3){
    console.log("Ingrediente 1: ",ing1);
    console.log("Ingrediente 2: ",ing2);
    console.log("Ingrediente 2: ",ing3);
  }
  pizza(...ingBase,"pepperoni");
 console.log("REST + SPREAD"); 
  //Combinando REST + SPREAD
  function pizzaVeg(ing1,ing2,ing3,...adiciones){// function 
    console.log("Ingrediente 1: ",ing1);
    console.log("Ingrediente 2: ",ing2);
    console.log("Ingrediente 2: ",ing3);
    console.log("Adiciones: ",adiciones);
  }
  var ingBase2 = ["tomate","queso"];
  pizzaVeg(...ingBase2,"pepperoni","salami","queso azul","champiñones");
//FUNCIONES ANONIMAS:
//CALLBACK O ASILAR FUNCION DE OTRAS FUNCIONES
//DE MANERA AISLADA
/* No funciona con use strict
(
    function(){
    }
)()
*/
var mensaje = function(nombre){
    var msg = "Hola "+nombre+" funcion anonima";
    return msg;
}
console.log(mensaje("David"));
//Callbacks : sumarCB callback
//ayuda a controlar procesos asincronos
function calcular(num1,num2,sumarCB,restarCB){
    var suma = num1 + num2;
    var resta = num1-num2;
    sumarCB(suma);
    restarCB(resta);
}
calcular(2,3,function(result){
    console.log("suma: ",result);
},function(result){
    console.log("resta: ",result);
});
//Arrow function o flecha
var saludar = nombre => "Hola "+nombre;
console.log(saludar("Carolina"));
var sumar = cantidad=>cantidad+10;
console.log(sumar(20));
//encapsulando varios parametros
var calcularenc = (datoA,datoB)=>datoA+datoB;
console.log(calcularenc(23,23));
//encapsulamiento multiple variante
var calcularAr = (datoX,datoY)=>{
    var datoZ = 5;
    return datoX+datoY+datoZ;
}
console.log(calcularAr(21,12));
//variante sin parametros fnc anonima
var validar = ()=>{
    return "validacion ok..";
}
console.log(validar());
//OPERADOR this
const boton = document.querySelector('.boton');
boton.addEventListener('click',function (){
  console.log('Me hicieron clic');
  console.log(this);
  console.log(this.innerHTML);
});
/*
boton.addEventListener('click',()=>{
   
     console.log(this);
     this.location = "https://google.com";
});
*/
//EVENTOS MOUSE
const boton2 = document.querySelector('.boton');
boton2.addEventListener('click',function(){
    console.log("El boton se ha pulsado");
});
boton2.addEventListener('mouseover',function(){
    console.log("El mouse está sobre el botón");
});
boton2.addEventListener('mouseout',function(){
    console.log("El mouse está fuera del botón");
});
//EVENTOS DEL TECLADO
//keydown
//keypress
//keyup
window.addEventListener("keydown",function(event){
  console.log("Pulsando tecla");
  //console.log(event.keyCode);
  console.log(String.fromCharCode(event.keyCode));
});
window.addEventListener("keypress",function(event){
    console.log("Tecla pulsada");
});
window.addEventListener("keyup",function(event){
    console.log("Tecla liberada");
});
//EVENTOS CARGA DOCUMENTO
window.addEventListener('load',function(){
  console.log("la ventana ha cargado completamente");
});
//EVENTOS MULTIMEDIA
const video = document.querySelector('.bostonVideo');
video.addEventListener("play", function () {
    console.log('El video ha iniciado');
});
video.addEventListener("seeking", function () {
    console.log('Se esta buscando en el video', this.currentTime);
});
video.addEventListener("ended", function () {
    console.log('El video ha terminado');
});
//TEMPORIZADORES O TIMERS
// setInterval : Ejecución infinita cada x tiempo.
// setTimeout: Ejecutar despues del tiempo que indique una sola vez
  //var temporizador = setInterval(function () {
    //  setColor();
  //}, 2000);
setTimeout(function () {
    setColor();
}, 3000);
function setColor() {
   var pagina = document.body;
   pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}
function stopChangeColor() {
   clearInterval(temporizador)
}
//10 NUMEROS
//Propiedades numerica
console.log("MAX_VALUE: ", Number.MAX_VALUE);
console.log("MIN_VALUE: ", Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);
console.log("NEGATIVE_INFINITY: ", Number.POSITIVE_INFINITY);
//Not at number
//saber si el digito o dato es un numero
console.log("NaN: ", Number.NaN);
//Metodos Numericos
var numero = "10";
console.log('Number: ', typeof numero, typeof Number(numero));
console.log('parseInt: ',  parseInt(numero));
console.log('parseFloat: ', Number.parseFloat(numero));
console.log('isNaN: ', isNaN(numero));
console.log('isInteger: ', Number.isInteger(numero));
//Metodos numericos de instancias
var numero = 2.5;
console.log("toExponential: ", numero.toExponential(4));
//regresar el valor con dos decimales
//si lo pones cero lo redondea
console.log("toFixed: ", numero.toFixed(2));
//Precision digito hahsta 6
console.log("toPrecision: ", numero.toPrecision(6));
//Convierte el numero a string
console.log("toString: ", typeof numero.toString());
//11 CADENAS DE TEXTO