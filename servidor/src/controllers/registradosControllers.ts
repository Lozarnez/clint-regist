import Cliente from '../models/Cliente';

export const listadoRegistrados = async(req:any, res:any) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    let clientes = await Cliente.find();
    if(!clientes){
      res.status(404).json({
        ok: false,
        message: 'No hay clientes registrados'
      });
    } else {
      res.status(200).json({
        ok: true,
        clientes
      });
    }
  } catch (error) {
    console.log(error);
  }
    
};

export const clienteRegistrado = async(req:any, res:any) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    let cliente = await Cliente.findById(req.params.id);
    if(!cliente){
      res.status(404).json({
        ok: false,
        message: 'No hay clientes registrados'
      });
    } else {
      res.status(200).json({
        ok: true,
        cliente
      });
    }
  } catch (error) {
    console.log(error);
  }

};

export const actualizarCliente = async(req:any, res:any) => {
  res.header("Access-Control-Allow-Origin", "*");
    try {
      let cliente = await Cliente.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true});
      if(!cliente){
        res.status(404).json({
          ok: false,
          message: 'No hay clientes registrados'
        });
      } else {
        res.status(200).json({
          ok: true,
          msg: 'Registro actualizado correctamente',
          cliente
        });
      }
    } catch (error) {
      console.log(error);
    }
  
  };