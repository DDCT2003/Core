 
 
 export const CreateRopa = async (nombre, tipo,talla,color,precio,clima,stock,edad, formalidad,) => {
    
        const response = await fetch('https://proyecto-react-back-production.up.railway.app/ropa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, tipo,talla,color,precio,clima,stock,edad, formalidad }),
        });
        return response.ok ? await response.json() : null;
  };

  export const getRopa = async () => {
 
      const response = await fetch('https://proyecto-react-back-production.up.railway.app/ropa/get'); // Endpoint del backend
      if (!response.ok) {
        throw new Error('Error al obtener los datos'); // Manejo de errores HTTP
      }
      const data = await response.json(); // Convertir respuesta a JSON
     return data;
    }

     
 export const CreateColor = async (color) => {
    
  const response = await fetch('https://proyecto-react-back-production.up.railway.app/color', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({color}),
  });
  return response.ok ? await response.json() : null;
};