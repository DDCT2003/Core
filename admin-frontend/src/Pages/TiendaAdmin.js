// Tieenda.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TiendaAdmin() {
  const [prendas, setPrendas] = useState([]); // Estado para almacenar la ropa
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrendas = async () => {
      try {
        const response = await fetch('http://localhost:3000/ropa/get'); // Endpoint del backend
        if (!response.ok) {
          throw new Error('Error al obtener los datos'); // Manejo de errores HTTP
        }
        const data = await response.json(); // Convertir respuesta a JSON
        setPrendas(data); // Actualizar el estado con la ropa obtenida
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/ropa/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) throw new Error('Error al borrar la prenda');
  
      setPrendas((prevPrendas) => prevPrendas.filter((ropa) => ropa._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };


  const handleEdit = () => {
    navigate('/AdminEditar'); // Cambia "/register" a la ruta de tu página de registro
  };

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
                className='botoncore'
                onClick={() => handleEdit()}
            >
              Editar
            </button>
            <button
            className='botoncore'
             
              onClick={() => handleDelete(ropa._id)}
            >
              Borrar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );

}

export default TiendaAdmin;
