import { Schema, model } from 'mongoose';

const ClienteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellidoP: {
    type: String,
    required: true,
    trim: true,
  },
  apellidoM: {
    type: String,
    required: false,
    trim: true,
  },
  calle: {
    type: String,
    required: true,
    trim: true,
  },
  numeroDomicilio: {
    type: Number,
    required: true,
    trim: true,
  },
  colonia: {
    type: String,
    required: true,
    trim: true,
  },
  codigoPostal: {
    type: Number,
    required: true,
    trim: true,
  },
  telefono: {
    type: Number,
    required: true,
    trim: true,
  },
  rfc: {
    type: String,
    required: true,
    trim: true,
  },
  documentos: {
    type: Array,
    required: true,
  },
  registro: {
    type: Date,
    default: Date.now(),
  },
  estatus: {
    type: String,
    required: true,
  }
});

export default model('Cliente', ClienteSchema);