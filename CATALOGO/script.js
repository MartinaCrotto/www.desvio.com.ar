
// DATOS ======================================================

const objetos = [
    {
        id: 1,
        img: "obj1.png",
        x: 170,
        y: 300,
        w: 180,

        objeto: "(01)",
        nombre: "Silla Ruberta Iron",
        anio: "2014",
        autor: "Alejandro Sarmiento",
        descripcion: "Combina una estructura metálica con una trama de caucho reciclado que se adapta al cuerpo y modifica la forma tradicional de sentarse. Busca convertir la flexibilidad y el movimiento en parte esencial del diseño del objeto y la experiencia de uso del mismo.",
        color: "#FF0000",
        descubierto: false
    },

    {
        id: 2,
        img: "obj2.png",
        x: 500,
        y: 900,
        w: 170,
        objeto: "(02)",
        nombre: "Accesorio para oreja",
        anio: "1966",
        autor: "Eduardo Costa",
        descripcion: "Realizado a partir del molde de una oreja humana en oro, convierte el cuerpo en el origen mismo de la joya. Desplaza el valor del objeto hacia su circulación como idea e imagen, antes que como pieza destinada a venderse.",
        color: "#FF00B7",
        descubierto: false
    },

    {
        id: 3,
        img: "obj3.png",
        x: 2150,
        y: 140,
        w: 170,
        objeto: "(03)",
        nombre: "Lámpara Flor",
        anio: "1968",
        autor: "Edgardo Giménez",
        descripcion: "Inspirada en una flor y realizada con materiales sintéticos, convierte la iluminación en un objeto vivo, lúdico y expresivo. Propone correrse de la lógica funcionalista dándole al diseño una dimensión teatral, donde el objeto también construye atmósferas y emociones.",
        color: "#FFE100",
        descubierto: false
    },

    {
        id: 4,
        img: "obj4.png",
        x: 1620,
        y: 1100,
        w: 150,
        objeto: "(04)",
        nombre: "Salero",
        anio: "1968",
        autor: "Edgardo Giménez",
        descripcion: "Resignifica una tipología doméstica tradicional al exagerar su escala y convertirlo en un objeto de impacto visual. Propone cuestionar la frontera entre diseño y arte, haciendo que un elemento utilitario deje de pasar desapercibido para convertirse en protagonista de la escena.",
        color: "#FFE100",
        descubierto: false
    },

    {
        id: 5,
        img: "obj5.png",
        x: 1600,
        y: 110,
        w: 220,
        objeto: "(05)",
        nombre: "Banco Buenos Aires",
        anio: "2008",
        autor: "Grupo Bondi",
        descripcion: "Juega con la percepción al trasladar la imagen cotidiana de un sillón confortable a un objeto urbano de hormigón. Cuestiona las expectativas del usuario, creando una tensión entre apariencia, materialidad y forma de uso.",
        color: "#FF00B7",
        descubierto: false
    },

    {
        id: 6,
        img: "obj6.png",
        x: 2140,
        y: 980,
        w: 170,
        objeto: "(06)",
        nombre: "Circus Stool",
        anio: "1922",
        autor: "Alejandro Sarmiento",
        descripcion: "Construido a partir de una única lámina de cartón plegada, explora cómo un material simple puede convertirse en una pieza de mobiliario liviana y resistente. Busca cuestionar la idea de descarte, convirtiendo lo efímero en un objeto funcional y duradero.",
        color:"#FF0000",
        descubierto: false
    },

    {
        id: 7,
        img: "obj7.png",
        x: 1030,
        y: 1030,
        w: 180,
        objeto: "(07)",
        nombre: "Silla Hortensia",
        anio: "2019",
        autor: "Andrés Reisinger",
        descripcion: "Transforma la tipología de asiento en una forma escultórica cubierta de pétalos digitales, explorando nuevas relaciones entre materia, percepción y tecnología. Propone correr la función como punto de partida, y diseñar desde la emoción, la imagen y lo imaginario.",
        color: "#FF00B7",
        descubierto: false
    },

    {
        id: 8,
        img: "obj8.png",
        x: 520,
        y: 260,
        w: 280,
        objeto: "(08)",
        nombre: "Frutera Talaga",
        anio: "2007",
        autor: "Patricia Lascano",
        descripcion: "Resignifica la madera mediante una técnica de curvado que convierte un objeto cotidiano en una forma orgánica y dinámica. Propone abandonar la lógica del contenedor rígido para explorar una relación más sensible entre material, forma y uso.",
        color: "#FFE100",
        descubierto: false
    },

    {
        id: 9,
        img: "obj9.png",
        x: 2140,
        y: 520,
        w: 240,
        objeto: "(09)",
        nombre: "Afiche Licra",
        anio: "1972",
        autor: "Ángela Vasallo",
        descripcion: "Reemplaza la imagen publicitaria tradicional por una composición tipográfica donde el mensaje se convierte en protagonista. Rompe con los códigos de la publicidad de moda y busca transformarla en una declaración visual, alejándose de la persuasión basada en la apariencia para construir identidad desde la palabra.",
        color: "#FF0000",
        descubierto: false
    },

    {
        id: 10,
        img: "obj10.png",
        x: 60,
        y: 640,
        w: 190,
        objeto: "(10)",
        nombre: "Publicidad Sylvapen",
        anio: "1976",
        autor: "Cícero publicidad",
        descripcion: "Usa la imagen de un niño imitando el gesto de fumar para resignificar un marcador escolar como símbolo de expresión y juego. Construye un mensaje inesperado y rompe los códigos tradicionales de la publicidad infantil generando una tensión entre inocencia y cultura adulta; la provocación visual se vuelve su herramienta de comunicación.",
        color: "#FFE100",
        descubierto: false
    },

    {
        id: 11,
        img: "obj11.png",
        x: 60,
        y: 1140,
        w: 300,
        objeto: "(11)",
        nombre: "Yacaré",
        anio: "2022",
        autor: "Cristian Mohaded",
        descripcion: "Altera la tipología convencional del banco para construir una pieza que parece moverse entre lo artificial y lo orgánico. Propone abandonar la neutralidad en el diseño industrial y crear objetos con identidad propia, capaces de despertar extrañamiento, emoción y una nueva forma de interacción.",
        color: "#FF00B7",
        descubierto: false
    },

    {
        id: 12,
        img: "obj12.png",
        x: 1120,
        y: 120,
        w: 150,
        objeto: "(12)",
        nombre: "Silla Hueso",
        anio: "2000",
        autor: "Fernando Poggio",
        descripcion: "Transforma una estructura tradicional de mobiliario en una forma orgánica de aluminio que evoca la anatomía del cuerpo. Busca hacer visible aquello que sostiene al usuario, convirtiendo la función estructural invisible, en la protagonista de una experiencia escultórica y simbólica.",
        color: "#FF0000",
        descubierto: false
    },

    {
        id: 13,
        img: "obj13.png",
        x: 1100,
        y: 600,
        w: 200,
        objeto: "(13)",
        nombre: "Bicho 3",
        anio: "2012",
        autor: "Marcela Sinclair",
        descripcion: "Transforma una tipología doméstica reconocible mediante una forma asimétrica e inestable que se aleja de la estética funcional tradicional. Reivindica el error y la imperfección como recursos de diseño, creando un objeto que prioriza la exploración y la experiencia sensible.",
        color: "#FF0000",
        descubierto: false
    },

    {
        id: 14,
        img: "obj14.png",
        x: 1840,
        y: 760,
        w: 160,
        objeto: "(14)",
        nombre: "Silla Mamut",
        anio: "2000",
        autor: "J. D’Alessandro y E. Asseff",
        descripcion: "Construye una pieza funcional a partir de materiales industriales descartados. Desafia las expectativas sobre cómo debe verse y construirse una silla y demuestra que el diseño también puede surgir del reaprovechamiento y la transformación. Propone desplazar el valor del objeto desde la nobleza del material hacia la creatividad del proceso y el uso consciente de recursos.",
        color: "#FFE100",
        descubierto: false
    },

    {
        id: 15,
        img: "obj15.png",
        x: 1450,
        y: 480,
        w: 180,
        objeto: "(15)",
        nombre: "Radio en una bolsa",
        anio: "1981",
        autor: "Daniel Weil",
        descripcion: "Transforma un objeto doméstico rígido en una pieza flexible, transparente y adaptable al movimiento del usuario. Revela su estructura y rompe con la idea de radio como objeto estático, convirtiéndola en un objeto nómada y en un organismo abierto: donde función, materia y expresión conviven.",
        color: "#FF00B7",
        descubierto: false
    }

];

// REFERENCIAS ======================================================

const world = document.getElementById("world");
const cursor = document.getElementById("cursor");
const viewport = document.getElementById("viewport");

const overlay = document.getElementById("overlay");

const ovNumero = document.getElementById("ovNumero");
const ovNombre = document.getElementById("ovNombre");
const ovAnio = document.getElementById("ovAnio");
const ovAutor = document.getElementById("ovAutor");
const ovDescripcion = document.getElementById("ovDescripcion");

let overlayAbierto = false;

// VOLVER A LA HOME ======================================================

const logo = document.getElementById("logo");

// Cambia el cursor al pasar sobre el logo
logo.style.cursor = "pointer";

// Ir a la página principal de DESVÍO
logo.addEventListener("click", () => {

    window.location.href = "../index.html";

});

// CREAR OBJETOS ======================================================

objetos.forEach(obj => {

    const div = document.createElement("div");

    div.className = "objeto";
    div.dataset.id = obj.id;

    div.style.left = obj.x + "px";
    div.style.top = obj.y + "px";
    div.style.width = obj.w + "px";

    div.innerHTML = `

        <div class="contenido">

            <span class="numero">
                (${String(obj.id).padStart(2, "0")})
            </span>

            <img src="img/${obj.img}">

        </div>

    `;

    world.appendChild(div);

    obj.elemento = div;
    obj.numero = div.querySelector(".numero");


    // posición dinámica

    obj.xActual = obj.x;
    obj.yActual = obj.y;

});

// CURSOR ======================================================
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

// POSICIÓN INICIAL DEL MUNDO ======================================================
let worldX = (window.innerWidth - 2400) / 2;
let worldY = (window.innerHeight - 1400) / 2;

world.style.transform =
    `translate(${worldX}px,${worldY}px)`;

// DRAG DEL LIENZO ======================================================
let dragging = false;

let startMouseX = 0;
let startMouseY = 0;

let startWorldX = 0;
let startWorldY = 0;

let seArrastro = false;

document.addEventListener("mousedown", (e) => {
    dragging = true;
    seArrastro = false;

    startMouseX = e.clientX;
    startMouseY = e.clientY;

    startWorldX = worldX;
    startWorldY = worldY;

    cursor.classList.add("drag");
});

document.addEventListener("mouseup", () => {

    dragging = false;

    cursor.classList.remove("drag");
});

document.addEventListener("mousemove", (e) => {

    if (!dragging) return;
    seArrastro = true;

    worldX = startWorldX + (e.clientX - startMouseX);
    worldY = startWorldY + (e.clientY - startMouseY);

    const margen = 60;

    const minX = window.innerWidth - 2400 - margen;
    const minY = window.innerHeight - 1400 - margen;

    worldX = Math.min(margen, Math.max(minX, worldX));
    worldY = Math.min(margen, Math.max(minY, worldY));

    world.style.transform =
        `translate(${worldX}px,${worldY}px)`;
});

// FUNCIÓN OBJETO ESQUIVO ======================================================

function crearObjetoEsquivo(objeto) {

    const elemento = objeto.elemento;

    let persecucion = 0;

    let direccion = Math.random() * Math.PI * 2;
    let ultimoCambio = 0;

    const velocidadMax = 40;

    function colisiona(nx, ny) {

// evitar logo

const logoRect = document
    .getElementById("logo")
    .getBoundingClientRect();


const objetoRect = {

    left: worldX + nx,
    right: worldX + nx + elemento.offsetWidth,

    top: worldY + ny,
    bottom: worldY + ny + elemento.offsetHeight

};


if (

    objetoRect.right > logoRect.left &&
    objetoRect.left < logoRect.right &&
    objetoRect.bottom > logoRect.top &&
    objetoRect.top < logoRect.bottom

){

    return true;

}

        const ancho = elemento.offsetWidth * 0.7;
        const alto = elemento.offsetHeight * 0.7;

        const centroX = nx + ancho / 2;
        const centroY = ny + alto / 2;

        for (const otro of objetos) {

            if (otro.id === objeto.id) continue;

            const otroAncho = otro.w * 0.7;
            const otroAlto = otro.w * 0.7;

            const otroCentroX = otro.xActual + otroAncho / 2;
            const otroCentroY = otro.yActual + otroAlto / 2;

            if (

                Math.abs(centroX - otroCentroX) < (ancho + otroAncho) / 2 &&
                Math.abs(centroY - otroCentroY) < (alto + otroAlto) / 2
            ) {

                return true;
            }
        }

        return false;
    }

    function animar() {

        const cx =
            worldX +
            objeto.xActual +
            elemento.offsetWidth / 2;

        const cy =
            worldY +
            objeto.yActual +
            elemento.offsetHeight / 2;

        const dx = cx - mouseX;
        const dy = cy - mouseY;

        const distancia = Math.hypot(dx, dy);

        let radio = 190;

        if (persecucion > 300) radio = 170;
        if (persecucion > 500) radio = 145;
        if (persecucion > 700) radio = 120;
        if (persecucion > 900) radio = 90;

        if (!overlayAbierto && !objeto.descubierto && distancia < radio) {

            persecucion++;

            if (performance.now() - ultimoCambio > 500) {

                ultimoCambio = performance.now();

                direccion =
                    Math.atan2(dy, dx) +
                    (Math.random() - 0.5) * Math.PI / 2;
            }

            let fuerza = 1;

            if (persecucion > 300) fuerza = .85;
            if (persecucion > 500) fuerza = .65;
            if (persecucion > 700) fuerza = .45;
            if (persecucion > 900) fuerza = .20;

            const intensidad =
                1 - distancia / radio;

            const velocidad =
                velocidadMax *
                intensidad *
                fuerza;

            let nuevoX =
                objeto.xActual +
                Math.cos(direccion) * velocidad;

            let nuevoY =
                objeto.yActual +
                Math.sin(direccion) * velocidad;

            if (!colisiona(nuevoX, nuevoY)) {

                objeto.xActual = nuevoX;
                objeto.yActual = nuevoY;

            } else {

                direccion +=
                    (Math.random() - 0.5);
            }
        } else {

            persecucion = 0;
        }

        const ancho = elemento.offsetWidth;
        const alto = elemento.offsetHeight;

        objeto.xActual = Math.max(
            0,
            Math.min(2400 - ancho, objeto.xActual)
        );

        objeto.yActual = Math.max(
            0,
            Math.min(1400 - alto, objeto.yActual)
        );

        elemento.style.left =
            objeto.xActual + "px";

        elemento.style.top =
            objeto.yActual + "px";

        requestAnimationFrame(animar);
    }

    elemento.addEventListener("click", (e) => {

        e.stopPropagation();

        if (overlayAbierto) return;

        if (!objeto.descubierto) {

            objeto.descubierto = true;

        }

        abrirOverlay(objeto);

    });
    animar();
}

// ACTIVAR TODOS ======================================================
objetos.forEach(obj => {

    crearObjetoEsquivo(obj);
});

function abrirOverlay(objeto) {

    ovNumero.textContent = objeto.objeto;
    ovNombre.textContent = objeto.nombre;
    ovAnio.textContent = objeto.anio;
    ovAutor.textContent = objeto.autor;
    ovDescripcion.textContent = objeto.descripcion;

    overlay.style.setProperty("--color-overlay", objeto.color);

    objetos.forEach(o => {

        if (o.id === objeto.id) {

            o.elemento.classList.remove("inactivo");

        } else {

            o.elemento.classList.add("inactivo");
        }
    });

    objeto.numero.style.color = objeto.color;

    overlay.classList.add("abierto");

    const rect = objeto.elemento.getBoundingClientRect();

    const margen = 24;

    // ---------- HORIZONTAL ----------

    let x;

    if (rect.left < window.innerWidth / 2) {

        // objeto en la mitad izquierda
        x = rect.right + margen;

    } else {

        // objeto en la mitad derecha
        x = rect.left - overlay.offsetWidth - margen;

    }

    // ---------- VERTICAL ----------

    let y;

    if (rect.top < window.innerHeight / 2) {

        // mitad superior
        y = rect.top;

    } else {

        // mitad inferior
        y = rect.bottom - overlay.offsetHeight;

    }

    // ---------- AJUSTE FINAL ----------
const margenPantalla = 80;

x = Math.max(
    margenPantalla,
    Math.min(
        x,
        window.innerWidth - overlay.offsetWidth - margenPantalla
    )
);

y = Math.max(
    margenPantalla,
    Math.min(
        y,
        window.innerHeight - overlay.offsetHeight - margenPantalla
    )
);
    

    overlay.style.left = x + "px";
    overlay.style.top = y + "px";

    overlayAbierto = true;

    cursor.classList.add("inactivo");
}

function cerrarOverlay() {

    objetos.forEach(obj => {

        if (!obj.descubierto) {

        obj.numero.style.color = "#000";

    } else {

        obj.numero.style.color = obj.color;

    }
    });

    objetos.forEach(obj => {

        obj.elemento.classList.remove("inactivo");
    });

    overlay.classList.remove("abierto");

    overlayAbierto = false;

    cursor.classList.remove("inactivo");
}

// EFECTO CURSOR SOBRE OBJETOS ======================================================
document.querySelectorAll(".objeto").forEach(obj => {

    obj.addEventListener("mouseenter", () => {

        if (overlayAbierto) return;

        cursor.classList.add("hover");

    });

    obj.addEventListener("mouseleave", () => {

        if (overlayAbierto) return;

        cursor.classList.remove("hover");

    });
});

document.addEventListener("click", (e) => {

    if (!overlayAbierto) return;

    if (seArrastro) {

        seArrastro = false;
        return;

    }

    if (overlay.contains(e.target)) return;

    cerrarOverlay();

});


// RESIZE ======================================================
window.addEventListener("resize", () => {

    const margen = 60;

    const minX = window.innerWidth - 2400 - margen;
    const minY = window.innerHeight - 1400 - margen;

    worldX = Math.min(margen, Math.max(minX, worldX));
    worldY = Math.min(margen, Math.max(minY, worldY));

    world.style.transform =
        `translate(${worldX}px,${worldY}px)`;
});