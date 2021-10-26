import express from 'express';
import {listadoRegistrados, clienteRegistrado, actualizarCliente} from '../controllers/registradosControllers';

const router = express.Router();

router.get('/',
    listadoRegistrados
);

router.get('/:id',
  clienteRegistrado
);

router.put('/:id/actualizar',
  actualizarCliente
);

module.exports = router;