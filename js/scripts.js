const DIR_SERVIDOR_ITUNES = "https://itunes.apple.com/search/?media=music&term=";
let xhr = new XMLHttpRequest();

function buscarCanciones() {
    console.log("Tocó buscar");
    let termino = document.getElementById("busqueda").value;
    console.log("Tocó buscar " + termino);

    // 1 Componemos la url
    let url = DIR_SERVIDOR_ITUNES + termino;
    let url_formateada = encodeURI(url);
    // 2 Llamamos al servidor
    xhr.open('GET', url_formateada);
    xhr.onreadystatechange = mostrarResultados;
    xhr.send();
}

function mostrarResultados() {
    limpiarTabla();

    if (xhr.readyState == 4) {
        console.log("Respuesta recibida");
        if (xhr.status == 200) {
            console.log("Respuesta buena");
            // Parseamos (guardamos en una variable) xhr.responseText
            // Y los guardamos en "resultados_busqueda". Lo hemos DESERIALIZADO.
            let resultados_busqueda = JSON.parse(xhr.responseText);
            // De esta manera, tendríamos dos atributos en resultados_busqueda
            resultados_busqueda.resultCount;
            resultados_busqueda.results;

            // TODO: Puede que la búsqueda, aunque esté bien realizada no haya devuelto nada
            // Deveríamos evaluar que los resultados tienen contenido y si no, mostrar un mensaje

            // Recorremos "resultados_busqueda.results" con un bucle for, que funcionará hasta 
            // la cantidad de "resultados_busqueda.resultCount"
            for (let index = 0; index < resultados_busqueda.resultCount; index++) {
                mostrarCancion(resultados_busqueda.results[index]);
            }
        } else {
            console.log("Respuesta mala" + xhr.status);
        }
    }
}

function mostrarCancion(cancion) {
    // Aquí encapsulamos los datos de la canción en la tabla
    let tabla_canciones = document.getElementById("tablaCanciones");
    let tr_tabla = document.createElement("tr");
    let artist_name = document.createElement("td");
    let track_name = document.createElement("td");
    let collection_name = document.createElement("td");
    let artwork_url = document.createElement("td");
    let preview_url = document.createElement("td");
    let img_artwork = document.createElement("img");
    let audio_preview_url = document.createElement("audio");
    let source_preview_url = document.createElement("source");

    // encapsulamos los valores a los campos de los td
    artist_name.innerHTML = cancion.artistName;
    track_name.innerHTML = cancion.trackName;
    collection_name.innerHTML = cancion.collectionName;
    // asignamos la url a la etiqueta img que añadiremos a artwork_url
    img_artwork.src = cancion.artworkUrl100;
    artwork_url.appendChild(img_artwork);

    // definimos el contenido de la etiqueta audio
    audio_preview_url.controls = true;
    source_preview_url.src = cancion.previewUrl;
    source_preview_url.type = "audio/mpeg";
    // añadimos la etiqueta source a la etiqueta audio
    audio_preview_url.appendChild(source_preview_url);
    //console.log(audio_preview_url.innerHTML);

    // añadimos la etiqueta audio al td del reproductor
    preview_url.appendChild(audio_preview_url);
    preview_url.style.textAlign = "center";
    preview_url.style.padding = "0.5rem";

    // incorporamos los td al tr
    tr_tabla.appendChild(artist_name);
    tr_tabla.appendChild(track_name);
    tr_tabla.appendChild(collection_name);
    tr_tabla.appendChild(artwork_url);
    tr_tabla.appendChild(preview_url);

    // incorporamos el tr a la tabla
    tabla_canciones.appendChild(tr_tabla);
}

function limpiarTabla() {
    // Borramos los campos tr de la tabla si ya se había pintado algo
    let tabla_canciones = document.getElementById("tablaCanciones");
    while (tabla_canciones.rows.length > 1) {
        tabla_canciones.deleteRow(1);
    }
}