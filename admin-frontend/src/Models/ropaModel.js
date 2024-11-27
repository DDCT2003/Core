 
 
 export const CreateRopa = async (nombre, tipo,talla,color,precio,clima,stock,edad, formalidad,) => {
    
        const response = await fetch('http://localhost:3000/ropa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, tipo,talla,color,precio,clima,stock,edad, formalidad }),
        });
        return response.ok ? await response.json() : null;
  };

  export const getRopa = async () => {
 
      const response = await fetch('http://localhost:3000/ropa/get'); // Endpoint del backend
      if (!response.ok) {
        throw new Error('Error al obtener los datos'); // Manejo de errores HTTP
      }
      const data = await response.json(); // Convertir respuesta a JSON
     return data;
    }