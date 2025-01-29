import React, { useEffect, useState } from 'react';
import TiendaUI from '../components/TiendaUI';

function TiendaContainer() {
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

  return <TiendaUI prendas={prendas} loading={loading} error={error} />;
}

export default TiendaContainer;
