function enviarSugerencia(event) {
  event.preventDefault();

  const nombre = document.getElementById('userName').value.trim();
  const cancion = document.getElementById('songTitle').value.trim();
  const artista = document.getElementById('artistName').value.trim();

  // Número 56 5238 7930 formateado con la lada de México (52)
  const numeroWA = "525652387930";
  const textoWA = `Hola Reinventando, mi nombre es ${nombre} y me gustaria que pusieras la cancion ${cancion} del artista ${artista}`;
  const urlWA = `https://wa.me/${numeroWA}?text=${encodeURIComponent(textoWA)}`;

  window.open(urlWA, '_blank');
  document.getElementById('songForm').reset();
}