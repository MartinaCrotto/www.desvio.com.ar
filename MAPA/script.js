//========================================================
// COLORES
//========================================================

const amarillo = "#FFE100";
const rosa = "#FF00B7";


const mensajesBusqueda = [

    "Calculando desvío...",

    "Explorando alternativas...",

    "Evitando el recorrido esperado..."

];

//========================================================
// ORIGEN
// Universidad Torcuato Di Tella
//========================================================

const origen = L.latLng(
    -34.54712317934867,
    -58.446529554376376
);

//========================================================
// VARIABLES
//========================================================

let controlRuta = null;
let muestraActiva = null;
let cartelRuta = null;


//========================================================
// MAPA
//========================================================

const mapa = L.map("map",{

    zoomControl:false,

    preferCanvas:true,

     attributionControl:false

}).setView(

    [-34.6037,-58.3816],

    12

);



//========================================================
// BASE
//========================================================

L.tileLayer(

"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

{

    maxZoom:19,
    attribution:""

}

).addTo(mapa);



//========================================================
// ZOOM
//========================================================

L.control.zoom({

    position:"bottomright"

}).addTo(mapa);


//========================================================
// ORIGEN DESVÍO
//========================================================

function iconoOrigen(color){

    return L.divIcon({

        className:"",

        html:`
        <div
        style="
            width:24px;
            height:24px;

            border-radius:50%;

            border:4px solid white;
            box-sizing:border-box;

            display:flex;
            align-items:center;
            justify-content:center;
        ">
            <div
            style="
                width:16px;
                height:16px;

                border-radius:50%;

                border:4px solid ${color};
                background:white;

                box-sizing:border-box;
            ">
            </div>
        </div>
        `,

        iconSize:[24,24],
        iconAnchor:[12,12]

    });

}

const marcadorOrigen = L.marker(

    origen,

    {

        icon:iconoOrigen("#000000"),

        interactive:false

    }

).addTo(mapa);


//========================================================
// ICONOS
//========================================================

function crearIcono(simbolo,color){

    return L.divIcon({

        className:"",

       html:`

<div
style="
display:flex;
align-items:center;
justify-content:center;

width:36px;
height:36px;

font-family:Helvetica,Arial,sans-serif;
font-size:36px;
font-weight:bold;

color:${color};

-webkit-text-stroke:4px white;
paint-order:stroke fill;

user-select:none;
">

${simbolo}

</div>

`,

        iconSize:[32,32],

        iconAnchor:[16,16]

    });

}



//========================================================
// OVERLAY
//========================================================

const overlay = document.getElementById("overlay");

const titulo = document.getElementById("titulo");

const barrio = document.getElementById("barrio");

const boton = document.getElementById("comoLlegar");

const cerrar = document.getElementById("cerrarOverlay");

const fecha = document.getElementById("fecha");

const direccion = document.getElementById("direccion");

const loadingRuta = document.getElementById("loadingRuta");



cerrar.onclick = () => {

    overlay.style.display = "none";

    borrarRuta();

    muestraActiva = null;

    marcadorOrigen.setIcon(

    iconoOrigen("#000000")

);

    mapa.flyTo(
        [-34.6037, -58.3816],
        12,
        {
            duration: 0.8
        }
    );


};

//========================================================
// CERRAR RUTA
//========================================================

function borrarRuta(){

    if(controlRuta){

        mapa.removeControl(controlRuta);
        controlRuta = null;

    }

    if(cartelRuta){

        mapa.removeLayer(cartelRuta);
        cartelRuta = null;

    }

}

//========================================================
// MUESTRAS
//========================================================

const muestras=[

{

    nombre:"deƨvío (vol 01)",

    fecha: "10 / 06",

    direccion:"Yerbal 557",

    barrio:"Caballito",

    estado:"pasada",

    simbolo:"#",

    color:amarillo,

    destino:L.latLng(-34.6183,-58.4389),

    rutas:[

[
    origen,

    L.latLng(-34.5535,-58.4500), // Belgrano
    L.latLng(-34.5665,-58.4630), // Colegiales
    L.latLng(-34.5790,-58.4740), // Villa Ortúzar
    L.latLng(-34.5925,-58.4640), // Villa Crespo
    L.latLng(-34.6075,-58.4520), // Parque Centenario

    L.latLng(-34.6183,-58.4389)
],

[
    origen,

    L.latLng(-34.5485,-58.4340), // Palermo Chico
    L.latLng(-34.5650,-58.4180), // Recoleta
    L.latLng(-34.5880,-58.4200), // Barrio Norte
    L.latLng(-34.6065,-58.4320), // Almagro

    L.latLng(-34.6183,-58.4389)
],

[
    origen,

    L.latLng(-34.5560,-58.4810), // Villa Urquiza
    L.latLng(-34.5750,-58.4850), // Agronomía
    L.latLng(-34.5955,-58.4720), // La Paternal
    L.latLng(-34.6105,-58.4560), // Caballito Norte

    L.latLng(-34.6183,-58.4389)
]

]

},

{

    nombre:"deƨvío (vol 02)",

    fecha: "19 / 06",

    direccion:"Teodoro García 3059",

    barrio:"Colegiales",

    estado:"pasada",

    simbolo:"$",

    color:amarillo,

    destino:L.latLng(-34.5763,-58.4498),

   rutas:[

[
    origen,

    L.latLng(-34.5535,-58.4540), // Belgrano R
    L.latLng(-34.5675,-58.4760), // Villa Urquiza
    L.latLng(-34.5835,-58.4680), // Parque Chas
    L.latLng(-34.5840,-58.4540), // Chacarita

    L.latLng(-34.5763,-58.4498)
],

[
    origen,

    L.latLng(-34.5550,-58.4810), // Villa Urquiza
    L.latLng(-34.5800,-58.4850), // Agronomía
    L.latLng(-34.5920,-58.4680), // La Paternal
    L.latLng(-34.5850,-58.4520), // Chacarita

    L.latLng(-34.5763,-58.4498)
],

[
    origen,

    L.latLng(-34.5490,-58.4340), // Palermo Chico
    L.latLng(-34.5690,-58.4170), // Recoleta
    L.latLng(-34.5880,-58.4300), // Palermo Hollywood

    L.latLng(-34.5763,-58.4498)
]

]
},

{

    nombre:"deƨvío (vol 03)",

    fecha: "29 / 06",

    direccion:"Lavardén 49",

    barrio:"Parque Patricios",

    estado:"pasada",

    simbolo:"&",

    color:amarillo,

    destino:L.latLng(-34.6366,-58.4016),

  rutas:[

[
    origen,

    L.latLng(-34.5765,-58.4600), // Chacarita
    L.latLng(-34.5940,-58.4520), // Villa Crespo
    L.latLng(-34.6105,-58.4380), // Almagro
    L.latLng(-34.6245,-58.4210), // Boedo

    L.latLng(-34.6366,-58.4016)
],

[
    origen,

    L.latLng(-34.5630,-58.4840), // Villa Urquiza
    L.latLng(-34.5845,-58.4840), // Agronomía
    L.latLng(-34.6025,-58.4630), // La Paternal
    L.latLng(-34.6185,-58.4400), // Caballito

    L.latLng(-34.6366,-58.4016)
],

[
    origen,

    L.latLng(-34.5690,-58.4280), // Palermo
    L.latLng(-34.5905,-58.4180), // Recoleta
    L.latLng(-34.6105,-58.4100), // Congreso
    L.latLng(-34.6240,-58.4050), // San Cristóbal

    L.latLng(-34.6366,-58.4016)
]

]
},

{

    nombre:"deƨvío (vol 04)",

    fecha: "05 / 07",

    direccion:"Tronador 2012",

    barrio:"Villa Ortúzar",

    simbolo:"*",

    color:amarillo,

    destino:L.latLng(-34.5920,-58.4725),

   rutas:[

[
    origen,

    L.latLng(-34.5535,-58.4520), // Belgrano R
    L.latLng(-34.5675,-58.4660), // Colegiales
    L.latLng(-34.5805,-58.4810), // Parque Chas
    L.latLng(-34.5965,-58.4660), // La Paternal

    L.latLng(-34.5920,-58.4725)
],

[
    origen,

    L.latLng(-34.5490,-58.4340), // Palermo Chico
    L.latLng(-34.5700,-58.4200), // Recoleta norte
    L.latLng(-34.5905,-58.4360), // Palermo Hollywood
    L.latLng(-34.5995,-58.4550), // Villa Crespo

    L.latLng(-34.5920,-58.4725)
],

[
    origen,

    L.latLng(-34.5565,-58.4760), // Villa Urquiza
    L.latLng(-34.5720,-58.4870), // Parque Chas
    L.latLng(-34.5900,-58.4840), // límite Agronomía
    L.latLng(-34.6020,-58.4700), // La Paternal

    L.latLng(-34.5920,-58.4725)
]

]
},

{

    nombre:"deƨvío (vol 05)",

    fecha: "17 / 07",

    direccion:"Secret Location",

    barrio:"Palermo",

    estado:"proxima",

    simbolo:"?",

    color:rosa,

    destino:L.latLng(-34.5858,-58.4258),

    rutas:[

[
    origen,

    L.latLng(-34.5540,-58.4520),
    L.latLng(-34.5700,-58.4680),
    L.latLng(-34.5905,-58.4620),
    L.latLng(-34.6040,-58.4450),
    L.latLng(-34.5980,-58.4300),

    L.latLng(-34.5858,-58.4258)
],

[
    origen,

    L.latLng(-34.5490,-58.4320),
    L.latLng(-34.5660,-58.4160),
    L.latLng(-34.5900,-58.4120),
    L.latLng(-34.6020,-58.4240),

    L.latLng(-34.5858,-58.4258)
],

[
    origen,

    L.latLng(-34.5600,-58.4830),
    L.latLng(-34.5850,-58.4780),
    L.latLng(-34.6060,-58.4540),
    L.latLng(-34.5990,-58.4350),

    L.latLng(-34.5858,-58.4258)
]

]

}

];

//========================================================
// CREAR PINES
//========================================================

muestras.forEach(muestra=>{

    const marcador=L.marker(

        muestra.destino,

        {

            icon:crearIcono(

                muestra.simbolo,

                muestra.color

            )

        }

    ).addTo(mapa);



    marcador.on("click",()=>{

        abrirOverlay(muestra);

    });

});



//========================================================
// BOTÓN "CÓMO LLEGAR"
//========================================================

boton.onclick = () => {

    if(!muestraActiva) return;

    const mensaje =
        mensajesBusqueda[
            Math.floor(Math.random() * mensajesBusqueda.length)
        ];

    loadingRuta.innerHTML = mensaje;

    loadingRuta.classList.add("visible");

    boton.disabled = true;

    setTimeout(()=>{

        loadingRuta.classList.remove("visible");

        dibujarRuta(muestraActiva);

        boton.disabled = false;

    },900);

};

function colorConAlpha(hex, alpha){

    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;

}

//========================================================
// ABRIR OVERLAY
// (reemplazá la función anterior por ésta)
//========================================================

function abrirOverlay(muestra){

    // Si había una ruta abierta, la quitamos
    borrarRuta();

    marcadorOrigen.setIcon(
        iconoOrigen("#000000")
    );
   
    muestraActiva = muestra;

    overlay.style.display = "block";

    titulo.innerHTML = muestra.nombre;

    fecha.innerHTML = muestra.fecha;

    boton.style.background = muestra.color;
    boton.style.color = "#000";

    overlay.style.background = colorConAlpha(muestra.color,0.22);

    if(muestra.estado == "proxima"){

        direccion.innerHTML = "Secret Location";
        barrio.innerHTML = muestra.barrio;

    }else{

        direccion.innerHTML = muestra.direccion;
        barrio.innerHTML = muestra.barrio;

    }

      mapa.flyTo(
        muestra.destino,
        14,
        {
            duration:0.6
        }
    );

}
//========================================================
// DIBUJAR RUTA
//========================================================

function dibujarRuta(muestra){

    borrarRuta();

    // Elegimos una de las rutas disponibles al azar
    const rutaElegida =
        muestra.rutas[
            Math.floor(Math.random()*muestra.rutas.length)
        ];

marcadorOrigen.setIcon(

    iconoOrigen(muestra.color)

);

    controlRuta = L.Routing.control({

        waypoints:rutaElegida,

        addWaypoints:false,

        draggableWaypoints:false,

        fitSelectedRoutes:true,

        routeWhileDragging:false,

        show:false,

        collapsible:false,

       lineOptions:{

    styles:[

        {

            color:"#000",

            weight:7,

            opacity:.08

        },

        {

            color:muestra.color,

            weight:4,

            opacity:.85

        }

    ]

},

        createMarker:function(){

            return null;

        }

    }).addTo(mapa);


controlRuta.on("routesfound", function(e){

    if(cartelRuta){

        mapa.removeLayer(cartelRuta);

    }

    const mensajes = [

        "Desvío sugerido",
        "Ruta menos predecible",
        "Camino alternativo"

    ];

    const mensaje =
        mensajes[
            Math.floor(Math.random()*mensajes.length)
        ];

    // Todos los puntos reales de la ruta
    const coords = e.routes[0].coordinates;

    // Mitad real
    const mitad =
        coords[
            Math.floor(coords.length/2)
        ];

    cartelRuta = L.marker(mitad,{

        interactive:false,

        icon:L.divIcon({

            className:"",

            html:`
                <div class="cartelRuta">

                    ${mensaje}

                </div>
            `,

            iconSize:[170,40],

            iconAnchor:[85,20]

        })

    }).addTo(mapa);

});

}

//========================================================
// VOLVER A LA HOME
//========================================================

const logoDesvio = document.querySelector(".logoDesvio");

logoDesvio.style.cursor = "pointer";

logoDesvio.addEventListener("click", () => {

    window.location.href = "../index.html";

});