
/// Busqueda Aleatoria
function Disney() {
    // Limpiar el contenido actual
    contenido.innerHTML = '';

    fetch('https://api.disneyapi.dev/character')
        .then(response => response.json())
        .then(data => {
            let personaje = Math.floor(Math.random() * data.data.length);
            console.log(data);
            contenido.innerHTML += `
            <div>
            <table>
            <caption> </caption>
                <thead></thead>
                <tbody>
                    <tr>
                        <th rowspan="5"><img src="${data.data[personaje].imageUrl}"></th>
                        <td><b>Nombre:</b> ${data.data[personaje].name}</td>
                    </tr>
                    <tr>
                        <th>ID: ${data.data[personaje]._id}</th>
                    </tr>
                    <tr>
                        <th>Fecha de Creacion: ${data.data[personaje].createdAt}</th>
                    </tr>
                    <tr>
                        <th>Ultima Actualizacion: ${data.data[personaje].updatedAt}</th>
                    </tr>
                    <tr>
                        <th> <a href="${data.data[personaje].sourceUrl}" target="_blank">Enlace de origen</a></th>
                    </tr>
                    <tr>
                        <th></th>
                    </tr>
                </tbody>
                <footer></footer>
            </table>
        </div>
            `;
        });
}


/* 
            <div>
            <img src="${data.data[personaje].imageUrl}"><br><br>
            <p><b>Nombre:</b> ${data.data[personaje].name}<br><br></p>
            <p><b>ID del Personaje:</b> ${data.data[personaje]._id}<br><br></p>
            <p><b>Fecha de creación:</b> ${data.data[personaje].createdAt}<br><br></p>
            <p><b>Última actualización:</b> ${data.data[personaje].updatedAt}<br><br></p>
            <p><a href="${data.data[personaje].sourceUrl}" target="_blank">Enlace de origen</a></p>
            </div>
*/