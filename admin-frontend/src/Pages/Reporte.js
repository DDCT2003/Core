import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Reporte() {
  const { auth } = useAuth(); // Obtener información del usuario autenticado
  const [recomendaciones, setRecomendaciones] = useState([]); // Estado para almacenar las recomendaciones
  const [filteredRecomendaciones, setFilteredRecomendaciones] = useState([]); // Recomendaciones filtradas
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Manejo de errores
  const [fechaInicio, setFechaInicio] = useState(''); // Filtro de fecha inicial
  const [fechaFin, setFechaFin] = useState(''); // Filtro de fecha final
  const [formalidad, setFormalidad] = useState(''); // Filtro de formalidad
  const [edad, setEdad] = useState(''); // Filtro de edad
  const [nombre, setNombre] = useState(''); // Filtro de nombre

  useEffect(() => {
    const fetchRecomendaciones = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://proyecto-react-back-production.up.railway.app/recomendaciones/usuario?username=${auth.userName}`
        );

        if (!response.ok) {
          throw new Error('Error al obtener las recomendaciones');
        }

        const data = await response.json();
        setRecomendaciones(data);
        setFilteredRecomendaciones(data); // Inicialmente todas las recomendaciones están visibles
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecomendaciones();
  }, [auth.userName]);

  useEffect(() => {
    const filtered = recomendaciones.filter((ropa) => {
      const fecha = new Date(ropa.fecha);

      // Filtrado por fechas
      const cumpleFecha =
        (!fechaInicio || fecha >= new Date(fechaInicio)) &&
        (!fechaFin || fecha <= new Date(fechaFin));

      // Filtrado por formalidad
      const cumpleFormalidad = !formalidad || ropa.formalidad === formalidad;
        console.log(auth.userName)
        console.log(ropa.userName)

      const cumpleUsuario = !auth.userName || ropa.userid == auth.userName;

      // Filtrado por edad
      const cumpleEdad = !edad || ropa.edad === edad;

      // Filtrado por nombre
      const cumpleNombre = !nombre || ropa.nombre.toLowerCase().includes(nombre.toLowerCase());

      return cumpleFecha && cumpleFormalidad && cumpleEdad && cumpleNombre && cumpleUsuario;
    });

    setFilteredRecomendaciones(filtered);
  }, [fechaInicio, fechaFin, formalidad, edad, nombre, recomendaciones]);

  if (loading) return <p>Cargando recomendaciones...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='divtable'>
      <h1>Recomendaciones</h1>

      {/* Filtros */}
      <div style={{ marginBottom: '15px', textAlign: 'center', height: '150px' }}>
        {/* Filtro de fecha */}
        <label>
          <strong>Fecha Inicio:</strong>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '20px' }}
          />
        </label>

        <label>
          <strong>Fecha Fin:</strong>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>

        {/* Filtro de formalidad */}
        <label>
          <strong>Formalidad:</strong>
          <select
            value={formalidad}
            onChange={(e) => setFormalidad(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '20px', maxWidth: '200px' }}
          >
            <option value="">Todas</option>
            <option value="Formal">Formal</option>
            <option value="Semiformal">Semiformal</option>
            <option value="Casual">Casual</option>
          </select>
        </label>

        {/* Filtro de edad */}
        <label>
          <strong>Edad:</strong>
          <select
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            style={{ marginLeft: '10px', maxWidth: '200px' }}
          >
            <option value="">Todas</option>
            <option value="Niño">Niño</option>
            <option value="Joven">Joven</option>
            <option value="Adulto">Adulto</option>
          </select>
        </label>

        {/* Filtro de nombre */}
        <label>
          <strong>Nombre:</strong>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Buscar por nombre"
            style={{ marginLeft: '10px', maxWidth: '200px' }}
          />
        </label>
      </div>

      {/* Tabla de resultados */}
      <table border="1" style={{ width: '100%', maxWidth: '700px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Formalidad</th>
            <th>Edad</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecomendaciones.map((ropa) => (
            <tr key={ropa.prendaId}>
              <td>{ropa.nombre}</td>
              <td>{ropa.userid}</td>
              <td>{ropa.formalidad}</td>
              <td>{ropa.edad}</td>
              <td>{new Date(ropa.fecha).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reporte;
