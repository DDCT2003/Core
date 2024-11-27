// Tieenda.js
import React, { useEffect, useState } from 'react';

function ClimaTienda() {
  const [prendas, setPrendas] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchPrendas = async () => {
      try {
        const response = await fetch('http://localhost:3000/weather/clothes'); // Endpoint del backend
        if (!response.ok) {
          throw new Error('Error al obtener los datos'); // Manejo de errores HTTP
        }
        const data = await response.json(); // Convertir respuesta a JSON
        setPrendas(data); // Actualizar el estado con los usuarios obtenidos
      } catch (err) {
        setError(err.message); // Manejar errores
      } finally {
        setLoading(false); // Finalizar el estado de carga
      }
    };

    fetchPrendas();
  }, []);

  // Renderización
  if (loading) return <p>Cargando prendas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
<div className='divtable'>
  <h1>Prendas</h1>
  <table border="1" style={{ width: '100%', maxWidth:'700px', borderCollapse: 'collapse'} }>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Clima</th>
        <th>Stock</th>
        <th>Color</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {prendas.map((ropa) => (
        <tr key={ropa._id} >
          <td>{ropa.nombre}</td>
          <td>{ropa.tipo}</td>
          <td>{ropa.clima}</td>
          <td>{ropa.stock}</td>
          <td>{ropa.color}</td>
          <td >
            <button
             
              disabled={ropa.stock <= 0}
              style={{
                padding: '5px 10px',
                backgroundColor: ropa.stock > 0 ? '#6d0000' : '#ccc',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: ropa.stock > 0 ? 'pointer' : 'not-allowed',
                height:'25px',
                marginTop:'5px',
                marginBottom:'5px'
              }}
            >
              Comprar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );

}

export default ClimaTienda;
