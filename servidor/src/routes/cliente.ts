import express from 'express';
import {crearCliente} from '../controllers/clinteController';

const router = express.Router();

router.post('/', 
    crearCliente
);

module.exports = router;