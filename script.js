const obtenerPersonaje = () => {
    let inputTexto = document.getElementById("input_personaje");
    let valor = inputTexto.value.trim().toLowerCase();
    peticionApi(valor);
}

const peticionApi = (personaje) => {
    const baseUrl = 'https://rickandmortyapi.com/api/character/';
    const endpoint = ''
    const url = `${baseUrl}?name=${personaje}`;

    axios.get(url)
    .then(res => printData(res.data))
    .catch(err => {
        console.log(err);
        document.getElementById('show-info').innerHTML = "Personaje no encontrado.";
    });
}

const printData = (data) => {
    let respuesta = document.getElementById('show-info');
    if (data.length > 0) {
        respuesta.innerHTML = `
            <img src="${data[0].image}" alt="${data[0].name}" style="width:150px;">
            <h2>${data[0].name}</h2>
            <p>Especie: ${data[0].species}</p>
            <p>Estado: ${data[0].status}</p>
            <p>Origen: ${data[0].origin.name}</p>
            <p>Genero: ${data[0].gender}</p>
        `;
    } else {
        respuesta.innerHTML = "No se encontraron resultados.";
    }
}
