
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
    mensaje.innerHTML = fotos[imgSelec].alt;
})
flechas[1].addEventListener('click', () =>{
    imgSelec += 1;
    if(imgSelec > fotos.length-1) imgSelec = 0;
    imagenContenedor.src= fotos[imgSelec].src;
    mensaje.innerHTML = fotos[imgSelec].alt;
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
        excribirTexto('.typed1','😘 Se que te quiero no solo porque seas mi prometida, mi noviesita, mi niña hermosa, mi amorcito o mi solecito, 👩‍❤️‍👨🌞🌈 te quiero no sólo porque cada vez que pienso en ti deseo que estés aquí, conmigo...🥺💞 Te quiero por tu forma impredecible de enamorarme, de no seguir ningún guión de los que se recitan por ahí🌞🐇, de modificarlo por completo y hacer de esta historia inolvidable e irrepetible...🍂☔<br>Te quiero porque esa ternura tan especial que a veces ocultas es uno de los muchos motivos por los que sigo aquí, queriendote más y descubriendote más🥰💜💖, te quiero porque me preocupo por ti y más si se trata de algo que no puedo entender, que no puedo solucionar o tan siquiera protegerte de su frio intenso... ⚡💦🍀Te quiero porque siento miedo y coraje al mismo tiempo de querer saber todos tus secretos, pero no, yo te quiero y me emociona mucho vivir una mirada a la vez, como de una simple llamada a distancia, a pequeños planes como "ver" una película o estudiar algo que siempre termina siento la forma en que nos miramos🙈😍😝, complejamente te quiero porque no hay respuesta simple que sea un no se porque y nada más, te quiero por esté texto, porque sin querer me llenaste de inspiración a más de media noche para escribirte la respuesta a esa pregunta...🌃💡 Porque un poema no tiene sentido si no tiene ningún motivo a llamarse como tal, y por si las dudas, quererte es mi motivo mi princesa hermosa 👑💜')
    }
})
tarjeta_2.addEventListener('mouseout', () =>{
    if(comenzar2){
        comenzar2 = false;
        excribirTexto('.typed2','☀️💜El sol se esconde como dos hermosos ojos verdosos que ocultan los párpados⛅🍀, el frío inunda un poco el color nieve de su piel❄️, pero gracias al amor que esconde ese corazoncito se podrá defender a cobija y pijama🐻🥰, está niña que tengo en mi mente me hace más cuerdo y loco al mismo tiempo🤭; aún no lo explicaré porque se aproximan muchos sueñitos deseosos de llamar su atención y ser acariciados por esas manos tan cálidas🤗👻, no se porque las note más que esas dos estrellas deslumbrantes✨, tal vez es porque puedo tocarlas, besarlas, acariciarlas y no simplemente mirarlas como cualquiera🥺😘, pero está noche se trata de soñar con la musa que me motivo a escribir este poema 💜🌻☄️👩‍❤️‍👨')
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
