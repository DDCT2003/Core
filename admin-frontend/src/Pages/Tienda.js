import React, { useEffect, useState } from 'react';

function Tienda() {
  const [prendas, setPrendas] = useState([]); // Estado para almacenar las prendas
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Manejo de errores

  useEffect(() => {
    const fetchPrendas = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://proyecto-react-back-production.up.railway.app/ropa/get`
        ); // 🔹 Endpoint para obtener TODAS las prendas

        if (!response.ok) {
          throw new Error('Error al obtener las prendas');
        }

        const data = await response.json();
        setPrendas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrendas();
  }, []); // 🔹 Solo se ejecuta al montar el componente

  // Renderización
  if (loading) return <p>Cargando prendas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='divtable'>
      <h1>Lista de Todas las Prendas</h1>

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
          {prendas.map((ropa) => (
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
