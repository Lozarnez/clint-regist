import Cliente from '../models/Cliente';

export const crearCliente = async(req:any, res:any) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { rfc } = req.body.formData;
  console.log(rfc);

  try {
    let cliente = await Cliente.findOne({ rfc });

    if (cliente) {
      return res.status(400).json({ msg: 'El RFC ya ha sido registrado' });
    } else {
      cliente = new Cliente(req.body.formData);
      await cliente.save();
      res.status(200).json({ msg: 'Registro completado correctamente', cliente });
      res.send('Usuario creado');
    }

  } catch (error) {
    console.log(error);
    res.status(400).send('Hubo un error al registrar cliente');
  }
};
