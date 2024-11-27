// Register.js
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {handleRegister} from '../Controller/userController'


function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [formalidad, setFormalidad] = useState('');
    const [edad, setEdad] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const formalidadoptions = ['Formal', 'Semiformal', 'Casual'];

      const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRegister(name, password,formalidad,edad, setMessage, navigate);
      };
      
  return (
    <div>
      <h2>Regístrate</h2>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <select 
        value={formalidad}
        onChange={(e) => setFormalidad(e.target.value)}
      >
       <option value="">Seleccione un tipo de formalidad</option>
        {formalidadoptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button type='regis' onClick={handleSubmit}>Registrarse</button>
      <p>{message}</p>

    </div>
  );
}

export default Register;
