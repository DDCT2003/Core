import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AdminEditar() {
  const { id } = useParams(); // Obtener el id desde la URL
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [talla, setTalla] = useState('');
  const [color, setColor] = useState('');
  const [precio, setPrecio] = useState('');
  const [clima, setClima] = useState('');
  const [stock, setStock] = useState('');
  const [message, setMessage] = useState('');

  // Opciones para el ComboBox
  const climaOptions = ['frio', 'templado', 'caliente'];

  useEffect(() => {
    // Si ya tienes un id, puedes hacer una solicitud para obtener la prenda por id y llenar los campos
    const fetchPrenda = async () => {
      try {
        const response = await fetch(`http://localhost:3000/ropa/${id}`);
        if (!response.ok) throw new Error('Error al obtener la prenda');
        const prenda = await response.json();
        // Rellenar los campos con los datos de la prenda
        setNombre(prenda.nombre);
        setTipo(prenda.tipo);
        setTalla(prenda.talla);
        setColor(prenda.color);
        setPrecio(prenda.precio);
        setClima(prenda.clima);
        setStock(prenda.stock);
      } catch (err) {
        console.error(err.message);
      }
    };

    if (id) fetchPrenda(); // Llamar solo si hay un id
  }, [id]);

  const handleEdit = async () => {
    const updatedData = { nombre, tipo, talla, color, precio, clima, stock };
    try {
      const response = await fetch(`http://localhost:3000/ropa/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error('Error al actualizar la prenda');

      const updatedPrenda = await response.json();
      setMessage('Prenda actualizada correctamente');
    } catch (err) {
      console.error(err.message);
      setMessage('Error al actualizar la prenda');
    }
  };

  return (
    <div>
      <h2>Edite una prenda</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Talla"
        value={talla}
        onChange={(e) => setTalla(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <select value={clima} onChange={(e) => setClima(e.target.value)}>
        <option value="">Seleccione un clima</option>
        {climaOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit" onClick={handleEdit}>
        Editar Prenda
      </button>
      <p>{message}</p>
    </div>
  );
}

export default AdminEditar;
