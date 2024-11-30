import React, { useEffect, useState } from 'react';
import { handleColor } from '../Controller/ropaController';

function AdminColor() {
  const [nombre, setNombre] = useState('');
  const [message, setMessage] = useState('');


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleColor(nombre,setMessage);
  };

  return (
    <div>
      <h2>Ingrese un nuevo Color</h2>
      <input
        type="text"
        placeholder="Color"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
     
      <button type="submit" onClick={handleSubmit}>
        Añadir Color
      </button>
      <p>{message}</p>
    </div>
  );
}

export default AdminColor;
