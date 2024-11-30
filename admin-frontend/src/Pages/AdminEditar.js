import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AdminEditar() {
  const { id } = useParams(); // Obtener el id desde la URL
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [talla, setTalla] = useState('');
  const [color, setColor] = useState('');
  const [colores, setColores] = useState([]);
  const [precio, setPrecio] = useState('');
  const [clima, setClima] = useState('');
  const [stock, setStock] = useState('');
  const [edad, setEdad] = useState('');
  const [formalidad, setFormalidad] = useState('');
  const [message, setMessage] = useState('');

  // Opciones para el ComboBox
  const climaOptions = ['frio', 'templado', 'caliente'];
  const formalidadOptions = ['Formal', 'Semiformal', 'Casual'];
  const edadOptions = ['Niño', 'Joven', 'Adulto'];

  useEffect(() => {
    const fetchColores = async () => {
      try {
        const response = await fetch('https://proyecto-react-back-production.up.railway.app/color/get'); // Endpoint del backend
        if (!response.ok) {
          throw new Error('Error al obtener los colores');
        }
        const data = await response.json();
        setColores(data); // Actualizar el estado con los colores obtenidos
      } catch (error) {
        console.error('Error al obtener colores:', error);
      }
    };

    fetchColores();
  }, []);


  useEffect(() => {
    const fetchPrenda = async () => {
      try {
        console.log(id)

        const response = await fetch(`https://proyecto-react-back-production.up.railway.app/ropa/getOne/${id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          }
        });
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
        setEdad(prenda.edad);
        setFormalidad(prenda.formalidad)
      } catch (err) {
        console.error(err.message);
      }
    };

    if (id) fetchPrenda(); // Llamar solo si hay un id
  }, [id]);

  const handleEdit = async () => {
    const updatedData = { nombre, tipo, talla, color, precio, clima, stock, edad, formalidad };
    
    try {
      const response = await fetch(`https://proyecto-react-back-production.up.railway.app/ropa/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      console.log(id)

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

      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">Seleccione un color</option>
        {colores.map((c) => (
          <option key={c._id} value={c.color}>
            {c.color}
          </option>
        ))}
      </select>
      <select 
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      >
        <option value="">Seleccione para quien es la prenda</option>
        {edadOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select 
        value={formalidad}
        onChange={(e) => setFormalidad(e.target.value)}
      >
        <option value="">Seleccione un tipo de formalidad</option>
        {formalidadOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button type="submit" onClick={handleEdit}>
        Editar Prenda
      </button>
      <p>{message}</p>
    </div>
  );
}

export default AdminEditar;
