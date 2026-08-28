const API_URL = 'http://localhost:3000/api';

// Función para obtener los usuarios desde la API
async function obtenerUsuarios() {
  try {
    const response = await fetch(`${API_URL}/usuarios`);
    const data = await response.json();
    console.log('Usuarios recibidos del servidor:', data);
    return data;
  } catch (error) {
    console.error('Error al conectar con el backend:', error);
  }
}

// Inicialización de la app en frontend
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicación Frontend inicializada');
  obtenerUsuarios();
});