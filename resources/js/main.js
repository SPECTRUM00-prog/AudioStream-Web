function reproducir() {
  var audio = document.getElementById("miAudio");
  audio.play();
}

function pausar() {
  var audio = document.getElementById("miAudio");
  audio.pause();
}

function cambiarCancion(nombre, artista, archivo, foto) {
  var audio = document.getElementById("miAudio");
  var titulo = document.getElementById("tituloCancion");
  var autor = document.getElementById("artistaCancion");
  var imagen = document.getElementById("portada");

  titulo.textContent = nombre;
  autor.textContent = artista;
  audio.src = archivo;
  imagen.src = foto;
  audio.play();
}

function cambiarVolumen() {
  var audio = document.getElementById("miAudio");
  var control = document.getElementById("volumen");
  audio.volume = control.value;
}
