export interface registradoObject{
  _id: string;
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  calle: string;
  colonia: string;
  codigoPostal: string;
  numeroDomicilio: number;
  telefono: number;
  rfc: string;
  registro: string;
  estatus: string;
  documentos: [];
}

export interface evaluationParams {
  id: string;
}