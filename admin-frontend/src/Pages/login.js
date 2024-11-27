// Login.js (React)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {handleLogin} from '../Controller/userController'

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [IsLog, setIsLog] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(name, password, login, setIsLog, setMessage, navigate);
  };

  const handleRegister = () => {
    navigate('/register'); // Cambia "/register" a la ruta de tu página de registro
  };

  return (
    <div >
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
      <button type='submit' onClick={handleSubmit}>Iniciar Sesión</button>
      <button type='regis' onClick={handleRegister}>Registrarse</button>

      <p>{message}</p>
    </div>
  );
}

export default Login;
