// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var lyricsData = [
  { text: "I wanna be your vacuum cleaner", time: 16 },
  { text: "Breathing in your dust", time: 16.5 },
  { text: "I wanna be your Ford Cortina", time: 23 },
  { text: "I will never rust", time: 24 },

  { text: "If you like your coffee hot", time: 30 },
  { text: "Let me be your coffee pot", time: 32 },
  { text: "You call the shots, babe", time: 36 },
  { text: "I just wanna be yours", time: 37 },

  { text: "Secrets I have held in my heart", time: 43.4 },
  { text: "Are harder to hide than I thought", time: 47 },
  { text: "Maybe I just wanna be yours", time: 49 },
  { text: "I wanna be yours, I wanna be yours", time: 53 },

  { text: "Let me be your leccy meter", time: 72 },
  { text: "And I'll never run out", time: 75 },
  { text: "Let me be the portable heater", time: 78 },
  { text: "That you'll get cold without", time: 81 },

  { text: "I wanna be your setting lotion (wanna be)", time: 86 },
  { text: "Hold your hair in deep devotion (How deep?)", time: 90 },
  { text: "At least as deep as the Pacific Ocean", time: 94 },
  { text: "Now I wanna be yours", time: 96 },

  { text: "Secrets I have held in my heart", time: 100 },
  { text: "Are harder to hide than I thought", time: 104 },
  { text: "Maybe I just wanna be yours", time: 106 },
  { text: "I wanna be yours, I wanna be yours", time: 110 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);