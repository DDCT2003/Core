import { loginUser, fetchAllUsers, RegisterUser } from '../Models/userModel';

// Función para manejar login
export const handleLogin = async (name, password, login, setIsLog, setMessage, navigate) => {
  try {
    const data = await loginUser(name, password);
    if (data && data.role) {
      setIsLog(true);
      setMessage(`Login successful. Role: ${data.role}`);
      console.log(data.edad);
      console.log(data.formalidad);

      login(data.role, data.name, data.edad,data.formalidad); // Uso del contexto de autenticación
      if (data.role === 'Admin') {
        navigate('/admin');
      } else {
        navigate('/tienda');
      }
    } else {
      setMessage('Invalid credentials');
    }
  } catch (error) {
    setMessage('An error occurred');
    console.error(error);
  }
};

// Función para manejar la obtención de usuarios
export const getAllUsers = async (setUsers) => {
  try {
    const users = await fetchAllUsers();
    setUsers(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};


export const handleRegister = async (name, password,formalidad, edad, setMessage, navigate) => {
    try{
    
        const data = await RegisterUser(name, password, formalidad,edad);
        if (data) {
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
}