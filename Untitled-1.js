// LÓGICA DEL CONTADOR DE OYENTES
function actualizarOyentes() {
  const display = document.getElementById('user-count');
  if (display) {
    // Genera un número base realista de oyentes y añade variación ocasional
    let baseOyentes = Math.floor(Math.random() * 5) + 3; // Entre 3 y 7 oyentes
    display.innerText = baseOyentes;
  }
}

// Ejecuta al cargar la página
actualizarOyentes();

// Cambia levemente el número cada 12 segundos para dar dinamismo en vivo
setInterval(actualizarOyentes, 12000);