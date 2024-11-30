import { CreateRopa, CreateColor } from '../Models/ropaModel';

export const handleRopa = async (nombre, tipo,talla,color,precio,clima,stock,edad, formalidad,setMessage) => {
    try {
        const data = await CreateRopa(nombre, tipo,talla,color,precio,clima,stock,edad,formalidad);
      
        if(data){
          setMessage(`Se creó la prenda`);
        }else{
          setMessage('No fue posible crear')
        }
        
      } catch (error) {
        setMessage('An error occurred');
        console.error(error);
      }
}

export const handleColor = async (nombre, setMessage) => {
  try {
      const data = await CreateColor(nombre);
    
      if(data){
        setMessage(`Se creó el color`);
      }else{
        setMessage('No fue posible crear')
      }
      
    } catch (error) {
      setMessage('An error occurred');
      console.error(error);
    }
}

