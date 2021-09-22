

let $1 = document.getElementById('1');
let $2 = document.getElementById('2');
let $3 = document.getElementById('3');
let $4 = document.getElementById('4');
let $5 = document.getElementById('5');
let $6 = document.getElementById('6');
let $7 = document.getElementById('7');
let $8 = document.getElementById('8');
let $9 = document.getElementById('9');
let $10 = document.getElementById('10');
let $11 = document.getElementById('11');

let opciones = document.querySelectorAll(".opciones");
let abrazo = document.getElementById("abrazo");
let milk = document.getElementById("milk");
let mocha = document.getElementById("mocha");

let objeto = {
    1:{respuesta:'a',tarjeta:$1},
    2:{respuesta:'c',tarjeta:$2},
    3:{respuesta:'a',tarjeta:$3},
    4:{respuesta:'c',tarjeta:$4},
    5:{respuesta:'b',tarjeta:$5},
    6:{respuesta:'b',tarjeta:$6},
    7:{respuesta:'b',tarjeta:$7},
    8:{respuesta:'a',tarjeta:$8},
    9:{respuesta:'a',tarjeta:$9},
    10:{respuesta:'a',tarjeta:$10},
    11:{respuesta:'c',tarjeta:$11}
}

let pregMostrada = [];
let validar;
const numTarjetas = 11;

let numero = numeroAleatorio(numTarjetas,1,pregMostrada);
objeto[numero.toString()].tarjeta.style.display = 'block';


for(let i = 0; i < opciones.length;i++){
    opciones[i].addEventListener("click",() => {
        if(validar === undefined){
            opciones[i].classList.remove('opciones');

            if(opciones[i].innerHTML[3] == objeto[numero.toString()].respuesta){
                opciones[i].classList.add('respuesta');
                opciones[i].classList.add('colorVerde');
                opciones[i].innerHTML = '¡Esoo! mi solecito 💜🥳';
                validar = 'correcto';

                mocha.style.display = 'none';
                milk.style.display = 'none';
                abrazo.style.display = 'block';

                
                setTimeout(() => {
                    window.location="sol.html"
                }, 2000);

                

            }else{
                opciones[i].classList.add('respuesta');
                opciones[i].classList.add('colorRojo');
                let contEtiquta = opciones[i].innerHTML;
                opciones[i].innerHTML = 'Me rompiste el cora 😭';
                validar = 'incorrecto';


                if(pregMostrada.length == numTarjetas-1){
                    pregMostrada = [];
                }

                pregMostrada.push(numero);
                cargarTarjeta(i,contEtiquta);
                
            }
        }
    });
}    


function numeroAleatorio(max, min, array){
    let numRandom = Math.floor(Math.random() * (1 + max - min) + min); 
    for(const num of array){
        if(num == numRandom){
            return numeroAleatorio(max,min,array);
        }
    }
    return numRandom;
}


function cargarTarjeta(puntero, contEtiquta){
    
    setTimeout(() => {
        opciones[puntero].innerHTML = contEtiquta;
        opciones[puntero].classList.remove('respuesta');
        opciones[puntero].classList.remove('colorRojo');
        opciones[puntero].classList.add('opciones');

        objeto[numero.toString()].tarjeta.style.display = 'none';
        numero = numeroAleatorio(numTarjetas,1,pregMostrada);
        objeto[numero.toString()].tarjeta.style.display = 'block';
    }, 1500);
    
    validar = undefined;
}

console.log(validar);
