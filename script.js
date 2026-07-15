const logos = [
    "img/LOGO.png",
    "img/LOGO-1.png",
    "img/LOGO-2.png",
    "img/LOGO-3.png"
];

const logo = document.getElementById("logoDesvio");
let indice = 0;
function cambiarLogo(){
    logo.src = logos[indice];
    const tiempo = indice === 3 ? 2500 : 1200;
    indice = (indice + 1) % logos.length;
    setTimeout(cambiarLogo, tiempo);
}

cambiarLogo();

const menuBtn = document.getElementById("menuBtn");
const menuOpciones = document.getElementById("menuOpciones");

menuBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    menuOpciones.classList.add("abierto");

    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";

});

document.addEventListener("click",()=>{

    menuOpciones.classList.remove("abierto");

    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";

});

menuOpciones.addEventListener("click",(e)=>{

    e.stopPropagation();

});