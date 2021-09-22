
let solecito = document.getElementById('solecito');
let nubes_arriba = document.getElementById('nubes_arriba');
let nube_arriba = document.getElementById('nube_arriba');
let nubes_abajo = document.getElementById('nubes_abajo');
let nube_sol = document.getElementById('nube_sol');


window.addEventListener('scroll',function() {
    let valor = window.scrollY;

    solecito.style.top = valor * 0.25 + 'px';
    
    nubes_arriba.style.left = valor * -0.05 + 'px';
    nubes_arriba.style.top = valor * 0.10 + 'px';

    nube_arriba.style.left = valor * 0.08 + 'px';
    nube_arriba.style.top = valor * -0.10 + 'px';

    nubes_abajo.style.left = valor * -0.05 + 'px';
    nubes_abajo.style.top = valor * -0.10 + 'px';

    nube_sol.style.left = valor * -0.05 + 'px';
    nube_sol.style.top = valor * 0.05 + 'px';
})


//---------------------[ Mostrar fotos ]-------------------------//

const fotos = document.querySelectorAll('.fotos')
const contenedorImg = document.querySelector('.contenedor-img');
const imagenContenedor = document.querySelector('.mostrar-img');
const mensaje = document.querySelector('.mensaje');
const equis = document.querySelector('.equis')
const flechas = document.querySelectorAll('.flecha')


let imgSelec;
for(let i = 0; i < fotos.length; i++){
    fotos[i].addEventListener('click', () =>{
        imgSelec = i;
        añadirImagen(fotos[i].getAttribute('src'),fotos[i].getAttribute('alt'));    
    })
}
// flechas
flechas[0].addEventListener('click', () =>{
    imgSelec -= 1;
    if(imgSelec < 0) imgSelec = fotos.length-1;
    imagenContenedor.src= fotos[imgSelec].src;
})
flechas[1].addEventListener('click', () =>{
    imgSelec += 1;
    if(imgSelec > fotos.length-1) imgSelec = 0;
    imagenContenedor.src= fotos[imgSelec].src;
})


const añadirImagen = (srcImage, altImg) => {
    contenedorImg.classList.toggle('mover');
    imagenContenedor.classList.toggle('mostrar');
    imagenContenedor.src= srcImage;
    mensaje.innerHTML = altImg;
    document.body.style.overflowY = 'hidden'
    document.body.style.overflowX = 'hidden'
}

equis.addEventListener('click', ()=>{
    contenedorImg.classList.toggle('mover');
    imagenContenedor.classList.toggle('mostrar');
    document.body.style.overflowY = 'scroll'
})


//--------------------------[ Texto tarjetas ]----------------------------//

const tarjeta_1 = document.querySelector('#tarjeta1');
const tarjeta_2 = document.querySelector('#tarjeta2');

let comenzar = true;
let comenzar2 = true;

tarjeta_1.addEventListener('mouseout', () =>{
    if(comenzar){
        comenzar = false;
        excribirTexto('.typed1','Se que te quiero no solo porque seas mi prometida, mi noviesita, mi niña hermosa o mi amorcito, te quiero no sólo porque cada vez que pienso en ti deseo que estés aquí, conmigo... te quiero por tu forma impredecible de enamorarme, de no seguir ningún guión de los que se recitan por ahí, de modificarlo por completo y hacer de esta historia inolvidable e irrepetible...<br>Te quiero porque esa ternura tan especial que a veces ocultas es uno de los muchos motivos por los que sigo aquí, queriendote más y descubriendote más, te quiero porque me preocupo por ti y más si se trata de algo que no puedo entender, que no puedo solucionar o tan siquiera protegerte de su frio intenso... Te quiero porque siento miedo y coraje al mismo tiempo de querer saber todos tus secretos, pero no, yo te quiero y me emociona mucho vivir una mirada a la vez, como de una simple llamada a distancia, a pequeños planes como "ver" una película o estudiar algo que siempre termina siento la forma en que nos miramos, complejamente te quiero porque no hay respuesta simple que sea un no se porque y nada más, te quiero por esté texto, porque sin querer me llenaste de inspiración a más de media noche para escribirte la respuesta a esa pregunta...Porque un poema no tiene sentido si no tiene ningún motivo a llamarse como tal, y por si las dudas, quererte es mi motivo.')
    }
})
tarjeta_2.addEventListener('mouseout', () =>{
    if(comenzar2){
        comenzar2 = false;
        excribirTexto('.typed2','En una aplicación en la que un usuario puede estar trabajando desde diferentes dispositivos, con una sola identidad (mismo username) pero con tokens diferentes en cada dispositivo, si pierde o le roban uno de estos, este método le permitiría al administrador borrar o deshabilitar el refresh token en cuestión sin necesidad de que el usuario se quede sin servicio en el resto de dispositivos. Ni que tenga que volver a autenticarse, ni cambiar su password, etc. Es decir, podría seguir trabajando sin que le influya en nada y sin riesgo de que puedan generarle nuevos access tokens desde el dispositivo sustraído. Es recomendable que los access tokens tengan un tiempo de vida corto para que en casos como este, se pueda volver a un estado seguro rápidamente.')
    }
})

let excribirTexto = (clase, texto) => {
    const typed = new Typed(clase,{
        strings: [texto],

        typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
        startDelay: 100, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    })    
}
