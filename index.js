//Variables

let neutra = 'encendida';
let frenoDeMano = 'encendido';
let clutch = 'presionado';
let freno = 'presionado';
let primera = 'activada';
let segunda = 'desactivada';
let tercera = 'desactivada';
let cuarta = 'desactivada';
let quinta = 'desactivada';
let reversa = 'desactivada';
let frenadoAleatorio = 'activado';

let paradas = parseInt(Math.random() * (1, 3) + 1);
let kilometros = parseInt(Math.random() * (200, 100) + 100);
let tiempoParadas = parseInt(Math.random() * (1, 5) + 1);
let distanciaParadas = parseInt(kilometros / paradas - 2);

// Encendido del auto

function recorrido() {
    console.log("Calculando ruta ............");
    console.log("La distancia recorrida será de:", kilometros + " kilometros");
    if (paradas == 1) {
        console.log("EL Vehiculo tendrá:", paradas + " parada");
        console.log("La parada estará en el Kilometro: " +
            parseInt(kilometros / 2 - 2));
        console.log("La parada durará:", tiempoParadas + " segundos");
    } else {
        console.log("EL Vehiculo tendrá:", paradas + " paradas");
        console.log("Las paradas estarán cada:", distanciaParadas + " kilometros");
        console.log("Cada parada durará:", tiempoParadas + " segundos");
    }
    console.log("!Estamos Listos Para Empezar!");
    arranque();
}



function frenado() {
    if (frenadoAleatorio == 'activado') {
        setTimeout(function () {
            console.log(`Se ha pisado el clutch`);
            console.log(`Se ha reducido la velocidad y se ha bajado el cambio a TERCERA`);
            console.log(`Se ha soltado el clutch`);

        }, 2000);
        setTimeout(function () {
            console.log(`Se ha pisado el clutch`);
            console.log(`Se ha reducido la velocidad y se ha bajado el cambio a SEGUNDA`);
            console.log(`Se ha soltado el clutch`);
        }, 6000);
        setTimeout(function () {
            console.log(`Se ha pisado el clutch`);
            console.log(`Se ha reducido la velocidad y se ha bajado el cambio a PRIMERA`);
            console.log(`Se ha soltado el clutch`);
        }, 12000);
        setTimeout(function () {
            console.log(`Se ha pisado el clutch`);
            console.log(`Se ha activado la neutra y se ha parado totalmente`);
            console.log(`Se ha soltado el clutch`);
        }, 20000)
        setTimeout(function () {
            console.log("ARRANCANDO DE NUEVO")
            arranque2();
        }, 24000)
    }
}


let encendido = document.querySelector('.encender');
encendido.addEventListener('click', function () {
    if (neutra == 'encendida' && frenoDeMano == 'encendido') {
        console.log(`Se ha verificado que esta puesta la neutra y el freno de mano`);
        console.log(`El auto se ha encendido`);
        recorrido();
    } else {
        alert(`Debes tener el auto en neutra y tener activado el freno de mano para poder encenderlo`);
    }
});

// Temporizador

window.onload = function () {
    pantalla = document.getElementById("screen");
}
var isMarch = false;
var acumularTime = 0;
function start() {
    if (isMarch == false) {
        timeInicial = new Date();
        control = setInterval(cronometro, 10);
        isMarch = true;
    }
}

function cronometro() {
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();
    if (ss < 10) { ss = "0" + ss; }
    if (mm < 10) { mm = "0" + mm; }
    pantalla.innerHTML = mm + " : " + ss;
    if (mm == 1 && ss == 30) {
        clearInterval(control);
    }
}



// Arranque del auto



let arranque = () => {
    var arrancar = document.querySelector('.arrancado');
    arrancar.addEventListener('click', function () {
        if (clutch == 'presionado' && freno == 'presionado' && frenoDeMano == 'encendido') {
            console.log(`Se ha pisado el clutch`);
            setTimeout(function () {
                console.log(`Se ha pisado el freno`);
            }, 2000);

            setTimeout(function () {
                console.log(`Se ha quitado el freno de mano`);
            }, 4000);

            setTimeout(function () {
                console.log(`Se ha puesto PRIMERA en marcha`);
            }, 6000);

            setTimeout(function () {
                console.log(`Se ha soltado el freno de piso`);
            }, 8000);
            setTimeout(function () {
                console.log(`Se esta acelerando progresivamente`);
            }, 10000);

            setTimeout(function () {
                console.log(`Se esta soltando el clutch y se esta acelerando progresivamente`);
            }, 12000);
            setTimeout(function () {
                console.log(`Se ha soltado el clutch por completo`);
            }, 14000);
            setTimeout(function () {
                cambios();
            }, 16000)
        } else {
            console.log(`Debes mantener presionado el freno y el clutch al mismo tiempo, luego quitar el freno de mano e ir soltando y acelerando progresivamente`)
        }
    });
}

function arranque2(){
    if (clutch == 'presionado' && freno == 'presionado' && frenoDeMano == 'encendido') {
        console.log(`Se ha pisado el clutch`);
        setTimeout(function () {
            console.log(`Se ha pisado el freno`);
        }, 2000);

        setTimeout(function () {
            console.log(`Se ha quitado el freno de mano`);
        }, 4000);

        setTimeout(function () {
            console.log(`Se ha puesto PRIMERA en marcha`);
        }, 6000);

        setTimeout(function () {
            console.log(`Se ha soltado el freno de piso`);
        }, 8000);
        setTimeout(function () {
            console.log(`Se esta acelerando progresivamente`);
        }, 10000);

        setTimeout(function () {
            console.log(`Se esta soltando el clutch y se esta acelerando progresivamente`);
        }, 12000);
        setTimeout(function () {
            console.log(`Se ha soltado el clutch por completo`);
        }, 14000);
        if (primera == 'activada') {
            setTimeout(function () {
                console.log(`Se ha pisado el clutch`);
                console.log(`Se ha puesto SEGUNDA en marcha`);
                console.log(`Se ha soltado el clutch`);
            }, 16000);
            setTimeout(function () {
                console.log(`Se ha pisado el clutch`);
                console.log(`Se ha puesto TERCERA en marcha`);
                console.log(`Se ha soltado el clutch`);
            }, 18000);
            setTimeout(function () {
                console.log(`Se ha pisado el clutch`);
                console.log(`Se ha puesto CUARTA en marcha`);
                console.log(`Se ha soltado el clutch`);
            }, 20000);
            setTimeout(function () {
                console.log(`Se ha pisado el clutch`);
                console.log(`Se ha puesto QUINTA en marcha`);
                console.log(`Se ha soltado el clutch`);
            }, 22000);

            // DEVUELVE

            if (frenadoAleatorio == 'activado') {
                setTimeout(function () {
                    console.log(`Se ha pisado el clutch`);
                    console.log(`Se ha reducido la velocidad y se ha bajado el cambio a CUARTA`);
                    console.log(`Se ha soltado el clutch`);
        
                }, 24000);
                setTimeout(function () {
                    console.log(`Se ha pisado el clutch`);
                    console.log(`Se ha reducido la velocidad y se ha bajado el cambio a TERCERA`);
                    console.log(`Se ha soltado el clutch`);
                }, 26000);
                setTimeout(function () {
                    console.log(`Se ha pisado el clutch`);
                    console.log(`Se ha reducido la velocidad y se ha bajado el cambio a SEGUNDA`);
                    console.log(`Se ha soltado el clutch`);
                }, 28000);
                setTimeout(function () {
                    console.log(`Se ha pisado el clutch`);
                    console.log(`Se ha reducido la velocidad y se ha bajado el cambio a PRIMERA`);
                    console.log(`Se ha soltado el clutch`);
                }, 30000);
                setTimeout(function () {
                    console.log(`Se ha pisado el clutch`);
                    console.log(`Se ha activado la neutra y se ha parado totalmente`);
                    console.log(`Se han activado las estacionarias`);
                    console.log(`Se ha puesto la reversa`);
                    console.log(`Se ha parqueado`);
                    console.log(`Has llegado a tu destino`);
                }, 32000);
            }

            //FINAL

            let final = setTimeout(function () {
                console.log("Hello")
            }, 36000);
            clearInterval(final);
        }
    }
}





function cambios() {
    if (primera == 'activada') {
        setTimeout(function () {
            console.log(`Se ha pisado el clutch`);
            console.log(`Se ha puesto SEGUNDA en marcha`);
            console.log(`Se ha soltado el clutch`);
        }, 2000);
        setTimeout(function () {
            console.log(`Se ha pisado el clutch`);
            console.log(`Se ha puesto TERCERA en marcha`);
            console.log(`Se ha soltado el clutch`);
            arranque();
        }, 6000);
        setTimeout(function () {
            console.log(`Se ha pisado el clutch`);
            console.log(`Se ha puesto CUARTA en marcha`);
            console.log(`Se ha soltado el clutch`);
            frenado();
        }, 12000);
    }

}



let izquierda = window.addEventListener('keydown', function (event) {
    var x = event.charCode || event.keyCode;
    if (x == 76 || x == 108) {
        console.log(`Direccional izquierda encendida`);
        console.log(`Se ha reducido un poco la velocidad para girar`);
        console.log(`Girando a la izquierda`);
    }
});

let derecha = window.addEventListener('keydown', function (event) {
    var x = event.charCode || event.keyCode;
    if (x == 82 || x == 114) {
        console.log(`Direccional derecha encendida`);
        console.log(`Se ha reducido un poco la velocidad para girar`);
        console.log(`Girando a la derecha`);
    }
});

