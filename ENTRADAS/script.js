//==================================================
// DATOS
//==================================================

const eventos = [

{
    nombre:"deƨvío (vol 01)",
    fecha:"10 / 06",
    direccion:"Yerbal 557",
    barrio:"Caballito",
    estado:"pasada"
},

{
    nombre:"deƨvío (vol 02)",
    fecha:"19 / 06",
    direccion:"Teodoro García 3059",
    barrio:"Colegiales",
    estado:"pasada"
},

{
    nombre:"deƨvío (vol 03)",
    fecha:"29 / 06",
    direccion:"Lavardén 49",
    barrio:"Parque Patricios",
    estado:"pasada"
},

{
    nombre:"deƨvío (vol 04)",
    fecha:"05 / 07",
    direccion:"Tronador 2012",
    barrio:"Villa Ortúzar",
    estado:"pasada"
},

{
    nombre:"deƨvío (vol 05)",
    fecha:"17 / 07",
    direccion:"Secret Location",
    barrio:"Palermo",
    estado:"proxima"
}

];


//==================================================
// REFERENCIAS
//==================================================

const colores=[

"#FF0000",
"#FF00B7",
"#FFE100"

];

const entradas=document.querySelectorAll(".entrada");

const acciones=document.getElementById("acciones");

const comprar=document.getElementById("comprar");

const cerrar=document.getElementById("cerrarSeleccion");

const soldOut=document.getElementById("soldOut");

const buscador=document.getElementById("busqueda");

let seleccion=null;

let eventoSeleccionado=null;


//==================================================
// PREPARAR ENTRADAS
//==================================================

entradas.forEach((entrada,index)=>{

    entrada.dataset.color=
    colores[index%colores.length];

    const titulo=document.createElement("div");

    titulo.className="titulo";

    titulo.textContent=entrada.textContent.trim();

    entrada.textContent="";

    entrada.appendChild(titulo);

    const evento=eventos[index];

    const info=document.createElement("div");

    info.className="infoEvento";

    info.innerHTML=`

        <div class="fecha">
            ${evento.fecha}
        </div>

        <div>
            ${evento.direccion}
        </div>

        <div>
            ${evento.barrio}
        </div>

    `;

    info.style.color=

    evento.estado==="pasada"

    ? "#999"

    : "#000";

    entrada.appendChild(info);

});


//==================================================
// BUSCADOR
//==================================================

buscador.addEventListener("input",()=>{

    const texto=

    buscador.value.toLowerCase();

    entradas.forEach((entrada)=>{

        entrada.style.display=

        entrada.textContent
        .toLowerCase()
        .includes(texto)

        ? "flex"

        : "none";

    });

});


//==================================================
// HOVER
//==================================================

entradas.forEach((entrada)=>{

    entrada.addEventListener("mouseenter",()=>{

        if(seleccion) return;

        entradas.forEach(e=>{

            if(e!==entrada){

                e.querySelector(".titulo").style.color=
                e.dataset.color;

            }

        });

    });

    entrada.addEventListener("mouseleave",()=>{

        if(seleccion) return;

        entradas.forEach(e=>{

            e.querySelector(".titulo").style.color="#000";

        });

    });

});

//==================================================
// CLICK EN LAS ENTRADAS
//==================================================

entradas.forEach((entrada,index)=>{

    entrada.addEventListener("click",()=>{

        if(seleccion) return;

        seleccion=entrada;

        eventoSeleccionado=eventos[index];

        // ocultar las demás
entradas.forEach(e=>{

    const titulo=e.querySelector(".titulo");

    if(e!==entrada){

        titulo.style.color="#fff";

    }else{

        titulo.style.color="#000";

    }

});

        // mostrar info
        entrada
            .querySelector(".infoEvento")
            .classList.add("visible");

        // colocar acciones
        const rect=entrada.getBoundingClientRect();

        acciones.style.left=(rect.right-170)+"px";
        acciones.style.top=(rect.bottom+95)+"px";

        acciones.classList.add("visible");

        // configurar botón

        comprar.classList.remove("agotado");

comprar.textContent="COMPRAR";

comprar.style.visibility="visible";
comprar.style.pointerEvents="auto";

soldOut.style.opacity="0";

        if(eventoSeleccionado.estado==="proxima"){

            comprar.disabled=false;

            comprar.style.color="#000";
            comprar.style.borderColor="#000";
            comprar.style.cursor="pointer";

        }else{

            comprar.disabled=true;

            comprar.style.color="#999";
            comprar.style.borderColor="#999";
            comprar.style.cursor="not-allowed";

        }

    });

});


//==================================================
// COMPRAR
//==================================================

comprar.addEventListener("click",()=>{

    if(!seleccion) return;

    // empieza el fade del botón
    comprar.style.opacity = "0";
    comprar.style.pointerEvents = "none";

    // esperamos a que termine el fade
    setTimeout(()=>{

        comprar.style.visibility = "hidden";

        // aparece SOLD OUT
        soldOut.style.opacity = "1";

    }, 400);


    seleccion.classList.add("agotada");

});


//==================================================
// CERRAR
//==================================================

cerrar.addEventListener("click",()=>{

    seleccion=null;

    eventoSeleccionado=null;

    entradas.forEach(e=>{

    e.querySelector(".titulo").style.color="#000";

    e.classList.remove("agotada");

    e.querySelector(".infoEvento")
     .classList.remove("visible");


     comprar.style.visibility = "visible";
comprar.style.pointerEvents = "auto";
soldOut.style.opacity = "0";
});

    acciones.classList.remove("visible");

  comprar.style.visibility = "visible";
comprar.style.pointerEvents = "auto";

    comprar.textContent="COMPRAR";

comprar.classList.remove("agotado");

comprar.style.visibility="visible";
comprar.style.pointerEvents="auto";

soldOut.style.opacity="0";

comprar.style.opacity = "1";
});


//==================================================
// BUSCADOR
//==================================================

buscador.addEventListener("input",()=>{

    const texto=buscador.value.toLowerCase();

    entradas.forEach((entrada)=>{

        entrada.style.display=

        entrada.innerText
        .toLowerCase()
        .includes(texto)

        ? "flex"

        : "none";

    });

});