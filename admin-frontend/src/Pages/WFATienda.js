// Tieenda.js
import React, { useEffect, useState } from 'react';
import {  useAuth   } from '../context/AuthContext';

function WFATienda() {
  const [prendas, setPrendas] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const { auth } = useAuth ();
  const [edad, setEdad] = useState(auth.age);
  const [formalidad, setFormalidad] = useState(auth.formalidad);

    console.log(auth.age)
    console.log(auth.formalidad)

  useEffect(() => {
    const fetchPrendasWfa = async () =>{
      setLoading(true); // Inicia el estado de carga
      setError(null); // Limpia errores previos
      try {
        const response = await fetch(
          `https://proyecto-react-back-production.up.railway.app/weather/clotheswfa?edad=${edad}&formalidad=${formalidad}`
        );
        if (!response.ok) {
          throw new Error('Error al obtener las prendas'); // Manejo de errores HTTP
        }
        const data = await response.json(); // Convertir respuesta a JSON
        setPrendas(data); // Actualizar el estado con las prendas obtenidas
      } catch (err) {
        setError(err.message); // Manejar errores
      } finally {
        setLoading(false); // Finalizar estado de carga
      }
    };

    fetchPrendasWfa(); // Llama a la función cuando el componente se monte
  }, [auth.formalidad, auth.edad]); // Volverá a ejecutar si formalidad o edad cambian

  useEffect(() => {
    
  
    const guardarRecomendaciones = async () => {
      try {
        await fetch('https://proyecto-react-back-production.up.railway.app/recomendaciones/guardar-recomendaciones', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ recomendaciones: prendas }),
        });
        console.log('Recomendaciones guardadas exitosamente');
      } catch (err) {
        console.error('Error al guardar las recomendaciones:', err);
      }
    };
  
    if (prendas.length > 0 ) {
      guardarRecomendaciones();
    }
  

  }, [prendas]);

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
         <th>Formalidad</th>
        <th>Dirigido a gente</th>
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
          <td>{ropa.formalidad}</td>
          <td>{ropa.edad}</td>

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

export default WFATienda;
