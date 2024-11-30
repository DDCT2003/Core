import React, { useEffect, useState } from 'react';

function Tienda() {
  const [prendas, setPrendas] = useState([]); // Estado para almacenar las prendas
  const [filteredPrendas, setFilteredPrendas] = useState([]); // Prendas filtradas
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Manejo de errores
  const [formalidad, setFormalidad] = useState(''); // Filtro de formalidad
  const [edad, setEdad] = useState(''); // Filtro de edad

  useEffect(() => {
    const fetchPrendas = async () => {
      try {
        const response = await fetch('https://proyecto-react-back-production.up.railway.app/ropa/get'); // Endpoint del backend
        if (!response.ok) {
          throw new Error('Error al obtener las prendas'); // Manejo de errores HTTP
        }
        const data = await response.json(); // Convertir respuesta a JSON
        setPrendas(data); // Actualizar el estado con las prendas obtenidas
        setFilteredPrendas(data); // Inicialmente todas las prendas están visibles
      } catch (err) {
        setError(err.message); // Manejar errores
      } finally {
        setLoading(false); // Finalizar el estado de carga
      }
    };

    fetchPrendas();
  }, []);

  useEffect(() => {
    const filtered = prendas.filter((ropa) => {
      return (
        (formalidad ? ropa.formalidad === formalidad : true) &&
        (edad ? ropa.edad === edad : true)
      );
    });
    setFilteredPrendas(filtered); // Actualizar prendas filtradas
  }, [formalidad, edad, prendas]);

  // Renderización
  if (loading) return <p>Cargando prendas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='divtable'>
      <h1>Prendas</h1>

      {/* Filtros */}
      <div style={{ marginBottom: '15px', height: '70px', textAlign: 'center' }}>
        <label>
          <strong>Formalidad:</strong>
          <select
            value={formalidad}
            onChange={(e) => setFormalidad(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '20px', maxWidth: '300px' }}
          >
            <option value="">Todas</option>
            <option value="Formal">Formal</option>
            <option value="Semiformal">Semiformal</option>
            <option value="Casual">Casual</option>
          </select>
        </label>

        <label>
          <strong>Edad:</strong>
          <select
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            style={{ marginLeft: '10px', maxWidth: '300px' }}
          >
            <option value="">Todas</option>
            <option value="Niño">Niño</option>
            <option value="Joven">Joven</option>
            <option value="Adulto">Adulto</option>
          </select>
        </label>
      </div>

      {/* Tabla de resultados */}
      <table border="1" style={{ width: '100%', maxWidth: '700px', borderCollapse: 'collapse' }}>
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
          {filteredPrendas.map((ropa) => ( // Iterar sobre las prendas filtradas
            <tr key={ropa._id}>
              <td>{ropa.nombre}</td>
              <td>{ropa.tipo}</td>
              <td>{ropa.clima}</td>
              <td>{ropa.stock}</td>
              <td>{ropa.color}</td>
              <td>
                <button
                  disabled={ropa.stock <= 0}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: ropa.stock > 0 ? '#6d0000' : '#ccc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: ropa.stock > 0 ? 'pointer' : 'not-allowed',
                    height: '25px',
                    marginTop: '5px',
                    marginBottom: '5px',
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

export default Tienda;
