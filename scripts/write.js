// Efecto maquina de escribir
let texto = document.querySelector('#sobre-nosotros');
let str = texto.innerHTML;
let speed = 200;
let i = 0;
texto.innerHTML="";
function maquinaEscribir (){
    if (i < str.length){
        texto.innerHTML+=str.charAt(i)
        i++;
        setTimeout(maquinaEscribir, speed);
    }
}
setTimeout(maquinaEscribir,speed);
