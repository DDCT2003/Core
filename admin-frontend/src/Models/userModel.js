


export const loginUser = async (name, password) => {
    const response = await fetch('https://proyecto-react-back-production.up.railway.app/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });
    return response.ok ? await response.json() : null;
  };
  
  export const fetchAllUsers = async () => {
    const response = await fetch('https://proyecto-react-back-production.up.railway.app/user');
    return response.ok ? await response.json() : [];
  };
  
 export const RegisterUser = async (name, password,formalidad,edad) => {
    
        const response = await fetch('https://proyecto-react-back-production.up.railway.app/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, password, formalidad,edad }),
        });
        return response.ok ? await response.json() : null;
  };

