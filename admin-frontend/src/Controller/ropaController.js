import { CreateRopa } from '../Models/ropaModel';

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

