// Register.js
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:3000/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, password }),
            });
      
            if (response.ok) {
              const data = await response.json();
              setMessage(`Registro exitoso. Role: ${data.role}`);
              navigate('/')
              
              // Aquí puedes redirigir o almacenar el rol del usuario según sea necesario.
            } else {
              setMessage('No se registró');
            }
          } catch (error) {
            setMessage('An error occurred');
            console.error(error);
          }
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
      <button type='regis' onClick={handleRegister}>Registrarse</button>
      <p>{message}</p>

    </div>
  );
}

export default Register;
