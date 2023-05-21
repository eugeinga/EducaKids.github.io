/*
{
  filterCharacter: 'https://api.disneyapi.dev/character?queryParams',
  getAllCharacters: 'https://api.disneyapi.dev/character',
  getOneCharacter: 'https://api.disneyapi.dev/character/:id'
}
*/



/// Busqueda Aleatoria
function Aleatorio() {
    // Limpiar el contenido actual
    datos.innerHTML = '';
    foto.innerHTML = '';

    let id = Math.floor(Math.random() * 7450);
    let url = 'https://api.disneyapi.dev/character/' + id;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            datos.innerHTML += `
          <div>
            <div><b>Nombre:</b> ${data.data.name}</div><br><br>
            <div>Películas: ${data.data.films}</div><br><br>
            <div>Cortometrajes: ${data.data.shortFilms}</div><br><br>
            <div>Programas de televisión: ${data.data.tvShows}</div><br><br>
            <div>Videojuegos: ${data.data.videoGames}</div><br><br>
            <div><a href="${data.data.sourceUrl}" target="_blank">Mas Detalles..</a></div>
          </div>
        `;
            foto.innerHTML += `
          <div>
            <img src="${data.data.imageUrl}" alt="Logo" width="200px">
          </div>
        `;
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}
