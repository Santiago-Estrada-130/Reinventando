// Obtiene y suma la visita sin configurar bases de datos
fetch('https://api.countapi.xyz/hit/reinventandoradio.com/visitas')
  .then(res => res.json())
  .then(data => {
    const display = document.getElementById('user-count');
    if (display) {
      display.innerText = data.value;
    }
  })
  .catch(() => {
    // Si la API falla, muestra 1 por defecto
    document.getElementById('user-count').innerText = "1";
  });