const cromosMundial = [];

function crearJugador(id, nombre, pais, posicion, urlImagen, urlBandera, colorFondoHex, goles, partidos, destacado, curiosidad) {
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
        curiosidad: curiosidad,
        desbloqueado: false
    };
}

function renderizarAlbum(listaJugadores) {
    const contenedor = document.getElementById("contenedorAlbum");

    contenedor.innerHTML = "";

    listaJugadores.forEach(function(jugador) {
        contenedor.innerHTML += `
            <div class="card-cromo" style="background-color: ${jugador.colorFondoHex}">
                <img src="${jugador.urlImagen}" alt="${jugador.nombre}">
                <h2>${jugador.nombre}</h2>
                <p>${jugador.pais}</p>
                <p>${jugador.posicion}</p>
                <p>Goles: ${jugador.estadisticas.goles}</p>
                <p>Partidos: ${jugador.estadisticas.partidos}</p>
            </div>
        `;
    });
}