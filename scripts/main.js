const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/*Slider*/

const d = document;
const prev = d.querySelector('.prev');
const next = d.querySelector('.next');
const items = d.querySelectorAll('.slide li');

//Ejecuta toda la acción
prev.onclick = () => getItem(items,'prev');
next.onclick = () => getItem(items,'next');

const getItem = (array,direction) =>{
    let newItem;
    for( i = 0 ; i < array.length; i++){
        if(array[i].classList.contains('active')){
            array[i].classList.remove('active');
            switch(direction){
                case 'prev':
                    i > 0 ?
                    newItem = array[i - 1] :
                    newItem = array[array.length-1]
                break;
                case 'next':
                    i < array.length-1 ?
                    newItem = array[i + 1]:
                    newItem = array[0]
                break;
                //case 'this': newItem = 

            }
        }
    }
    newItem.classList.add('active');
}