import React, { useState } from 'react';
import { handleRopa } from '../Controller/ropaController';

function Dashboard() {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [talla, setTalla] = useState('');
  const [color, setColor] = useState('');
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRopa(nombre, tipo, talla, color, precio, clima, stock, edad, formalidad, setMessage);
  };

  return (
    <div>
      <h2>Ingrese una nueva prenda</h2>
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

      <select 
        value={clima}
        onChange={(e) => setClima(e.target.value)}
      >
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
      <button type="submit" onClick={handleSubmit}>
        Añadir Prenda
      </button>
      <p>{message}</p>
    </div>
  );
}

export default Dashboard;
