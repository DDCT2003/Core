// Login.js (React)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [IsLog, setIsLog] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLog(true);
        setMessage(`Login successful. Role: ${data.role}`);
        login(data.role);
        if(data.role==='Admin'){
        
        navigate('/admin')
        }else{
          navigate('/tienda')
        }
        // Aquí puedes redirigir o almacenar el rol del usuario según sea necesario.
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error(error);
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Cambia "/register" a la ruta de tu página de registro
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button type='submit' onClick={handleLogin}>Iniciar Sesión</button>
      <button type='regis' onClick={handleRegister}>Registrarse</button>

      <p>{message}</p>
    </div>
  );
}

export default Login;
