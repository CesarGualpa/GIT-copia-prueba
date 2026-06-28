// =====================================================
// ARREGLO GLOBAL DEL ÁLBUM
// =====================================================

// Este arreglo contiene todos los cromos del mundial.
// El líder lo dejó vacío y los estudiantes van agregando datos.
const cromosMundial = [];


// =====================================================
// FUNCIÓN CONSTRUCTORA / FÁBRICA DE JUGADORES
// =====================================================

// Esta función crea un objeto jugador con la misma estructura para todos.
function crearJugador(
    id,
    nombre,
    pais,
    posicion,
    urlImagen,
    urlBandera,
    colorFondoHex,
    goles,
    partidos,
    destacado,
    curiosidad
) {
    return {
        id: id,
        nombre: nombre,
        pais: pais,
        posicion: posicion,
        urlImagen: urlImagen,
        urlBandera: urlBandera,
        colorFondoHex: colorFondoHex,

        estadisticas: {
            goles: goles,
            partidos: partidos
        },

        destacado: destacado,
        curiosidad: curiosidad
    };
}


// =====================================================
// DATOS DEL ESTUDIANTE B
// GRUPO A Y GRUPO E
// =====================================================

// IMPORTANTE:
// Como Estudiante B debes agregar 6 jugadores en total.
// No son 6 jugadores por país.
// Son 6 jugadores repartidos entre las selecciones del Grupo A y Grupo E.

// Usa IDs del 1 al 6.
// Esto evita conflictos con el Estudiante C, que normalmente usará IDs del 7 al 12.


// =====================================================
// JUGADOR 1
// =====================================================

cromosMundial.push(
    crearJugador(
        1, // id único del jugador

        "Enner Valencia", // nombre del jugador real

        "Ecuador", // país del Grupo A o Grupo E

        "Delantero", // ejemplo: Delantero, Mediocampista, Defensa, Arquero

        "imgJugadores/ennerValencia.png", // ruta de la imagen del jugador

        "../Grupo_E/img/ecuador.png", // ruta de la bandera del país

        "#fffb00", // color representativo del país en formato hexadecimal

        40, // goles del jugador

        84, // partidos jugados

        true, // true si es destacado, false si no

        "Máximo artillero de la selección ecuatoriana y único ecuatoriano con goles en tres Copas Mundiales distintas."
    )
);


// =====================================================
// JUGADOR 2
// =====================================================

cromosMundial.push(
    crearJugador(
        2,

        "Thomas Müller",

        "Alemania",

        "Mediapunta / Delantero",

        "imgJugadores/thomasMüller.png",

        "../Grupo_E/img/alemania.png",

        "#000000",

        44,

        126,

        true,

        "Solo Miroslav Klose ha marcado más goles mundialistas para Alemania; Müller suma 10 en tres ediciones."
    )
);


// =====================================================
// JUGADOR 3
// =====================================================

cromosMundial.push(
    crearJugador(
        3,

        "Hirving Lozano",

        "Mexico",

        "Extremo",

        "imgJugadores/hirvingLozano.png",

        "../Grupo_A/img/mexico.png",

        "#00ff00",

        20,

        73,

        true,

        "Anotó el gol con el que México venció por primera vez a Alemania en un Mundial (Rusia 2018)."
    )
);


// =====================================================
// JUGADOR 4
// =====================================================

cromosMundial.push(
    crearJugador(
        4,

        "Son Heung-min",

        "Corea del Sur",

        "Delantero",

        "imgJugadores/sonHeungMin.png",

        "../Grupo_A/img/corea_del_sur.png",

        "#ff0000",

        41,

        117,

        true,

        "Primer asiático en ganar la Bota de Oro de la Premier League (temporada 2021-22)."
    )
);


// =====================================================
// JUGADOR 5
// =====================================================

cromosMundial.push(
    crearJugador(
        5,

        "Christian Eriksen",

        "Dinamarca",

        "Mediocampista ofensivo",

        "imgJugadores/christianEriksen.png",

        "../Grupo_A/img/dinamarca.png",

        "#ff0000",

        40,

        130,

        true,

        "Regresó a la élite y al gol en la Euro 2024 tras sufrir un paro cardíaco en la Euro 2020, convirtiéndose en símbolo de resiliencia."
    )
);


// =====================================================
// JUGADOR 6
// =====================================================

cromosMundial.push(
    crearJugador(
        6,

        "Benni McCarthy",

        "Sudáfrica",

        "Delantero",

        "imgJugadores/benniMccarthy.png",

        "../Grupo_A/img/sudafrica.png",

        "#ffd000",

        31,

        80,

        true,

        "Único sudafricano que ha ganado la UEFA Champions League (con el Porto en 2004)."
    )
);

// =====================================================
// DATOS DEL ESTUDIANTE C
// GRUPO C Y GRUPO I
// =====================================================

// IMPORTANTE:
// Como Estudiante C debes agregar 6 jugadores en total.
// No son 6 por país.
// Son 6 jugadores repartidos entre el Grupo C y el Grupo I.

// Usa IDs del 7 al 12.
// Esto evita que tus IDs choquen con los del Estudiante B,
// quien normalmente usa IDs del 1 al 6.


// =====================================================
// JUGADOR 7
// =====================================================

cromosMundial.push(
    crearJugador(
        7, // id único del jugador

        "NOMBRE DEL JUGADOR 7", // nombre real del jugador

        "PAÍS DEL JUGADOR 7", // país del Grupo C o Grupo I

        "POSICIÓN DEL JUGADOR 7", // ejemplo: Arquero, Defensa, Mediocampista, Delantero

        "img/nombre-jugador-7.jpg", // imagen del jugador guardada en la carpeta img

        "img/bandera-pais-7.png", // imagen de la bandera guardada en la carpeta img

        "#000000", // color representativo del país en hexadecimal

        0, // cantidad de goles del jugador

        0, // cantidad de partidos jugados

        false, // true si es destacado, false si no es destacado

        "ESCRIBE AQUÍ UNA CURIOSIDAD HISTÓRICA O ESTADÍSTICA DEL JUGADOR 7."
    )
);


// =====================================================
// JUGADOR 8
// =====================================================

cromosMundial.push(
    crearJugador(
        8,

        "NOMBRE DEL JUGADOR 8",

        "PAÍS DEL JUGADOR 8",

        "POSICIÓN DEL JUGADOR 8",

        "img/nombre-jugador-8.jpg",

        "img/bandera-pais-8.png",

        "#000000",

        0,

        0,

        false,

        "ESCRIBE AQUÍ UNA CURIOSIDAD HISTÓRICA O ESTADÍSTICA DEL JUGADOR 8."
    )
);


// =====================================================
// JUGADOR 9
// =====================================================

cromosMundial.push(
    crearJugador(
        9,

        "NOMBRE DEL JUGADOR 9",

        "PAÍS DEL JUGADOR 9",

        "POSICIÓN DEL JUGADOR 9",

        "img/nombre-jugador-9.jpg",

        "img/bandera-pais-9.png",

        "#000000",

        0,

        0,

        false,

        "ESCRIBE AQUÍ UNA CURIOSIDAD HISTÓRICA O ESTADÍSTICA DEL JUGADOR 9."
    )
);


// =====================================================
// JUGADOR 10
// =====================================================

cromosMundial.push(
    crearJugador(
        10,

        "NOMBRE DEL JUGADOR 10",

        "PAÍS DEL JUGADOR 10",

        "POSICIÓN DEL JUGADOR 10",

        "img/nombre-jugador-10.jpg",

        "img/bandera-pais-10.png",

        "#000000",

        0,

        0,

        false,

        "ESCRIBE AQUÍ UNA CURIOSIDAD HISTÓRICA O ESTADÍSTICA DEL JUGADOR 10."
    )
);


// =====================================================
// JUGADOR 11
// =====================================================

cromosMundial.push(
    crearJugador(
        11,

        "NOMBRE DEL JUGADOR 11",

        "PAÍS DEL JUGADOR 11",

        "POSICIÓN DEL JUGADOR 11",

        "img/nombre-jugador-11.jpg",

        "img/bandera-pais-11.png",

        "#000000",

        0,

        0,

        false,

        "ESCRIBE AQUÍ UNA CURIOSIDAD HISTÓRICA O ESTADÍSTICA DEL JUGADOR 11."
    )
);


// =====================================================
// JUGADOR 12
// =====================================================

cromosMundial.push(
    crearJugador(
        12,

        "NOMBRE DEL JUGADOR 12",

        "PAÍS DEL JUGADOR 12",

        "POSICIÓN DEL JUGADOR 12",

        "img/nombre-jugador-12.jpg",

        "img/bandera-pais-12.png",

        "#000000",

        0,

        0,

        false,

        "ESCRIBE AQUÍ UNA CURIOSIDAD HISTÓRICA O ESTADÍSTICA DEL JUGADOR 12."
    )
);

// =====================================================
// FUNCIÓN DEL ESTUDIANTE C
// CALCULAR TOTAL DE GOLES DE SUS JUGADORES
// =====================================================

function calcularTotalGolesEstudianteC() {

    // Aquí filtramos solo los jugadores del Estudiante C.
    // Como tus IDs son del 7 al 12, usamos esa condición.
    const jugadoresEstudianteC = cromosMundial.filter(function(jugador) {
        return jugador.id >= 7 && jugador.id <= 12;
    });

    let totalGoles = 0;

    jugadoresEstudianteC.forEach(function(jugador) {
        totalGoles = totalGoles + jugador.estadisticas.goles;
    });

    const elementoTotal = document.getElementById("totalGolesEstudianteC");

    if (elementoTotal !== null) {
        elementoTotal.textContent = totalGoles;
    }
}

// =====================================================
// FUNCIÓN PARA RENDERIZAR EL ÁLBUM
// =====================================================

function renderizarAlbum(listaJugadores = cromosMundial) {

    const contenedorAlbum = document.getElementById("albumJugadores");
    const contadorAlbum = document.getElementById("contadorAlbum");

    if (contenedorAlbum === null) {
        console.log("No se encontró el contenedor albumJugadores.");
        return;
    }

    contenedorAlbum.innerHTML = "";

    if (contadorAlbum !== null) {
        contadorAlbum.textContent = "Cromos cargados: " + listaJugadores.length;
    }

    if (listaJugadores.length === 0) {
        contenedorAlbum.innerHTML = `
            <p class="mensaje-vacio">
                Todavía no hay cromos registrados.
            </p>
        `;
        return;
    }

    listaJugadores.forEach(function(jugador) {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("card-cromo");

        tarjeta.setAttribute("data-id", jugador.id);
        tarjeta.setAttribute("data-pais", jugador.pais);

        tarjeta.innerHTML = `
            <div class="cromo-imagen-contenedor">
                <img 
                    src="${jugador.urlImagen}" 
                    alt="Imagen de ${jugador.nombre}" 
                    class="cromo-imagen"
                >
            </div>

            <div class="cromo-info">
                <h3>${jugador.nombre}</h3>

                <p>
                    <strong>País:</strong> ${jugador.pais}
                </p>

                <p>
                    <strong>Posición:</strong> ${jugador.posicion}
                </p>

                <div class="cromo-bandera-contenedor">
                    <img 
                        src="${jugador.urlBandera}" 
                        alt="Bandera de ${jugador.pais}" 
                        class="cromo-bandera"
                    >
                </div>

                <p>
                    <strong>Goles:</strong> ${jugador.estadisticas.goles}
                </p>

                <p>
                    <strong>Partidos:</strong> ${jugador.estadisticas.partidos}
                </p>

                <p>
                    <strong>Destacado:</strong> ${jugador.destacado ? "Sí" : "No"}
                </p>

                <p class="cromo-curiosidad">
                    ${jugador.curiosidad}
                </p>
            </div>
        `;

        contenedorAlbum.appendChild(tarjeta);
    });
}


// =====================================================
// EJECUCIÓN INICIAL
// =====================================================

renderizarAlbum();
renderizarAlbum();