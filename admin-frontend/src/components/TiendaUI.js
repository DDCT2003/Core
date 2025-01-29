import React from 'react';

function TiendaUI({ prendas, loading, error }) {
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

export default TiendaUI;
