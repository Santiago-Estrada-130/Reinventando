function enviarSugerencia(event) {
  event.preventDefault();
  
  const nombre = document.getElementById('userName').value.trim();
  const cancion = document.getElementById('songTitle').value.trim();
  const artista = document.getElementById('artistName').value.trim();
  const feedback = document.getElementById('formFeedback');

  if (!nombre || !cancion || !artista) return;

  feedback.innerText = "¡Sugerencia enviada! Redirigiendo a WhatsApp...";
  feedback.style.display = "block";

  const numeroWA = "525652387930";
  const textoWA = `Hola Reinventando Radio! Soy ${nombre} y me gustaría escuchar: ${cancion} de ${artista}`;
  const urlWA = `https://wa.me/${numeroWA}?text=${encodeURIComponent(textoWA)}`;

  setTimeout(() => {
    window.open(urlWA, '_blank');
    document.getElementById('songForm').reset();
    feedback.style.display = "none";
  }, 1200);
}