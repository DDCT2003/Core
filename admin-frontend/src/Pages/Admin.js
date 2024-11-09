// Dashboard.js
import React, { useState } from 'react';


function Dashboard() {

  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [talla, setTalla] = useState('');
  const [color, setColor] = useState('');
  const [tipoClima, setTipoClima] = useState('');

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
        type="text"
        placeholder="Para que clima es"
        value={tipoClima}
        onChange={(e) => setTipoClima(e.target.value)}
      />
      <h3>Ingrese el color</h3>
      <input
        type="color"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type='submit'>Añadir Prenda</button>

    </div>
  );
}

export default Dashboard;
