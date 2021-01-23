const DIR_SERVIDOR_ITUNES = "https://itunes.apple.com/search/?media=music&term=";
let current_song_index = 0;
let audio_song;
let src_cancion;
let progress_bar;
let play_pause = new Boolean(false);
let playing_default_song = new Boolean(true);
let icon_play_pause;
let resultados_busqueda;
let xhr = new XMLHttpRequest();

// This function loads by default a song when page is loaded
function loadingDefaultSong() {
    let defaultSong = "Polly";
    // 1 Building the url
    let url = DIR_SERVIDOR_ITUNES + defaultSong;
    let url_formatted = encodeURI(url);
    // 2 Ajax call to the server
    xhr.open('GET', url_formatted);
    xhr.onreadystatechange = loadingTable;
    xhr.send();
    // As we are loading the first song of the AJAX call, the index is set to zero
    current_song_index = 0;
}

// This make the AJAX call based on the song type in the search element in the DOM
function searchingSongs() {
    let searchedSong = document.getElementById("busqueda").value;
    // 1 Building the url
    let url = DIR_SERVIDOR_ITUNES + searchedSong;
    let url_formatted = encodeURI(url);
    // 2 Ajax call to the server
    xhr.open('GET', url_formatted);
    xhr.onreadystatechange = loadingTable;
    xhr.send();
}

// This function loads the songs returned by the AJAX call
function loadingTable(searchedSong) {
    // 1 Building the url
    let url = DIR_SERVIDOR_ITUNES + searchedSong;
    let url_formatted = encodeURI(url);
    // 2 Ajax call to the server
    xhr.open('GET', url_formatted);
    xhr.onreadystatechange = loadingTable;
    xhr.send();
}

// This function loads the songs returned by the AJAX call
function loadingTable() {
    // Table is cleaned before loading the songs
    cleaningTable();
    // If the AJAX call was a success, the table is loaded
    if (xhr.readyState == 4) {
        console.log("Respuesta recibida");
        if (xhr.status == 200) {
            console.log("Respuesta buena");
            // Parseamos (guardamos en una variable) xhr.responseText
            // Y los guardamos en "resultados_busqueda". Lo hemos DESERIALIZADO.
            resultados_busqueda = JSON.parse(xhr.responseText);
            // De esta manera, tendríamos dos atributos en resultados_busqueda
            resultados_busqueda.resultCount;
            resultados_busqueda.results;

            // Looping "search_results.results" which will load ten songs
            for (let index = 0; index < 10; index++) {
                // Loading the data song in each row of the table
                loadingSongsInTable(resultados_busqueda.results[index], index);
            }
        } else {
            // TODO: Puede que la búsqueda, aunque esté bien realizada no haya devuelto nada
            // Deveríamos evaluar que los resultados tienen contenido y si no, mostrar un mensaje
            console.log("Respuesta mala" + xhr.status);
        }
    } else {
        // TODO: Puede que la búsqueda, aunque esté bien realizada no haya devuelto nada
        // Deveríamos evaluar que los resultados tienen contenido y si no, mostrar un mensaje
        console.log("Respuesta mala" + xhr.status);
    }
}

// This function cleans the table before loading the songs
function cleaningTable() {
    var tabla_canciones = document.getElementById("tablaCanciones");
    while (tabla_canciones.rows.length > 1) {
        tabla_canciones.deleteRow(1);
    }
}

// This function Loads the data song in each row of the table
function loadingSongsInTable(cancion, index) {
    // Aquí encapsulamos los datos de la canción en la tabla
    let tabla_canciones = document.getElementById("tablaCanciones");
    let tr_tabla = document.createElement("tr");
    tr_tabla.setAttribute("id", index, onclick = "searchingSongs();");
    let artist_name = document.createElement("td");
    let track_name = document.createElement("td");
    let collection_name = document.createElement("td");
    current_song_index = index;

    // encapsulamos los valores a los campos de los td
    artist_name.innerHTML = cancion.artistName;
    track_name.innerHTML = cancion.trackName;
    collection_name.innerHTML = cancion.collectionName;

    // incorporamos los td al tr
    tr_tabla.appendChild(artist_name);
    tr_tabla.appendChild(track_name);
    tr_tabla.appendChild(collection_name);

    // incorporamos el tr a la tabla
    tr_tabla.addEventListener('click', function () {
        loadingPlayer(index)
    }, false);
    tabla_canciones.appendChild(tr_tabla);
}

// This function controls the Player
function loadingPlayer(index) {
    // Capturing and setting the elements related with the loaded song in the DOM
    current_song_index = index;
    audio_song = document.getElementById("audioCancion");
    src_cancion = document.getElementById("srcCancion");
    let img_cancion = document.getElementById("imgCancion");
    let artist_name = document.getElementById("artistName");
    let track_name = document.getElementById("trackName");
    let collection_name = document.getElementById("collectionName");
    let song_src = resultados_busqueda.results[index].previewUrl;
    src_cancion.src = resultados_busqueda.results[index].previewUrl;
    img_cancion.src = resultados_busqueda.results[index].artworkUrl100;
    artist_name.innerHTML = resultados_busqueda.results[index].artistName;
    track_name.innerHTML = resultados_busqueda.results[index].trackName;
    collection_name.innerHTML = resultados_busqueda.results[index].collectionName;
    src_cancion.innerHTML = song_src;
    audio_song.load();
    audio_song.play();
    play_pause = false;
    playPause();
    // Applying default color to all the rows in the table
    for (let indexTabla = 0; indexTabla < 10; indexTabla++) {
        document.getElementById(indexTabla).style.backgroundColor = "#333";
    }
    // Highlighting the row clicked in the table
    document.getElementById(index).style.backgroundColor = "#162f2e";
}

// This function controls the behaviour of Play Button
function playPause() {
    // Capturing elements related with the Play / Pause button in the DOM
    icon_play_pause = document.getElementById("iconPlayPause");
    audio_song = document.getElementById("audioCancion");
    src_cancion = document.getElementById("srcCancion");
    if (playing_default_song) {
        current_song_index = 0;
        playing_default_song = false;
    }
    // Controlling play_pause icon button
    if (play_pause) {
        // Displaying play icon
        icon_play_pause.innerHTML = "<i class='fas fa-play' aria-hidden='true'></i>";
        audio_song.pause();
        play_pause = false;
    } else {
        // Displaying pause icon
        icon_play_pause.innerHTML = "<i class='fas fa-pause' aria-hidden='true'></i>";
        // Play loaded song
        audio_song.play();
        play_pause = true;
        // Calling the function which controls the Progress Bar
        loadingProgressBar();
    }
}

// This function controls the behaviour of Back Button
function playPrevoius() {
    if (current_song_index > 0) {
        current_song_index--;
    } else {
        current_song_index = 0;
    }
    // Load the previous song in the list
    loadingPlayer(current_song_index);
}

// This function controls the behaviour of Forward Button
function playNext() {
    if (current_song_index < 9) {
        current_song_index++;
    } else {
        current_song_index = 9;
    }
    // Load the next song in the list
    loadingPlayer(current_song_index);
}

// This function controls the behaviour of the Progress Bar
function loadingProgressBar() {
    // Capturing the Progress Bar in the DOM
    progress_bar = document.getElementById("progressBar");
    // Controlling the loaded song duration
    var song_duration = setInterval(scene, audio_song.duration);
    // Changing the with of the Progress Bar till the end of the loading song
    function scene() {
        if (audio_song.currentTime >= audio_song.duration) {
            clearInterval(song_duration);
        } else {
            progress_bar.style.width = audio_song.currentTime / 30 * 100 + '%';
        }
    }
}

// This function sorts table from A to Z
function sortTableAZ(column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    // Capturing the table element in the DOM
    table = document.getElementById("tablaCanciones");
    switching = true;
    //Looping while switching
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        // Capturing the rows element in the DOM
        rows = table.rows;
        /*Looping through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching
            shouldSwitch = false;
            /*Get the two elements to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[column];
            y = rows[i + 1].getElementsByTagName("TD")[column];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// This function sorts table from Z to A
function sortTableZA(column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tablaCanciones");
    switching = true;

    //Looping while switching
    while (switching) {
        //start by saying: no switching is done: 
        switching = false;
        // Capturing the rows element in the DOM
        rows = table.rows;
        /*Looping through all table rows (except the
        first, which contains table headers):*/
        for (i = rows.length - 1; i > 0; i--) {
            //start by saying there should be no switching
            shouldSwitch = false;
            /*Get the two elements to compare,
            one from current row and one from the previous:*/
            x = rows[i].getElementsByTagName("TD")[column];
            y = rows[i - 1].getElementsByTagName("TD")[column];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i], rows[i - 1]);
            switching = true;
        }
    }
}

// This function loads the default song when the page is loaded
window.onload = function () {
    loadingDefaultSong();
};
