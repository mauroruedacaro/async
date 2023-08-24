async function fetchData(url) {
    try {
    const response = await fetch(url);
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ocurrió un error:', error);
        return null;
    }
    }
    
document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const dataContainer = document.getElementById('dataContainer');
    fetchButton.addEventListener('click', async () => {
        const apiUrl = 'https://api.example.com/data';
        const data = await fetchData(apiUrl)
        if (data) {
            dataContainer.textContent = 'Datos recibidos: ' + JSON.stringify(data);
        }  else {
            dataContainer.textContent = 'No se pudieron obtener los datos.';
        }
        });
    });
