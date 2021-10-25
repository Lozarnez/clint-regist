import Cliente from '../models/Cliente';

export const crearCliente = async(req:any, res:any) => {
  try {
    let cliente;

    cliente = new Cliente(req.body);

    await cliente.save();

    res.send('Usuario creado');
  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un error en crear cliente');
  }
};
