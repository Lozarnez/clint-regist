import { useEffect, useState } from 'react';
import {
  Container, Skeleton,
} from '@mui/material';
import { registradoObject } from '../definitions';
import { DataGrid } from '@mui/x-data-grid';
import clienteAxios from 'axiosConfig';
import { Redirect, useHistory } from 'react-router';

function SubjectList() {

  const history = useHistory();
  const [registrados, setRegistrados] = useState<registradoObject[]>([]);

  useEffect(() => {
    getRegistrados();
  },[]);

  const getRegistrados = async() => {
    await clienteAxios.get('/registrados')
      .then(response => {
        if(response.data.ok === true) {
          setRegistrados(response.data.clientes);
        } else {
          console.log('Error en el servidor');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const columns = [
    {field: 'index', headerName: ' ', width: 90},
    {field: 'nombre', headerName: 'Nombre', width: 200},
    {field: 'apellidoP', headerName: 'Apellido Paterno', width: 200},
    {field: 'apellidoM', headerName: 'Apellido Materno', width: 200},
    {field: 'rfc', headerName: 'RFC', width: 200},
    {field: 'estatus', headerName: 'Estatus', width: 90},
  ];

  const rows = registrados.map((registrado, index) => {
    return {
      id: registrado._id,
      index: index + 1,
      nombre: registrado.nombre,
      apellidoP: registrado.apellidoP,
      apellidoM: registrado.apellidoM,
      rfc: registrado.rfc.toUpperCase(),
      estatus: registrado.estatus,
    }
  });

  const renderTable = () => {
    if(registrados.length > 0) {
    return (<DataGrid
        columns={columns}
        rows={rows}
        pageSize={10}
        rowsPerPageOptions={[5]}
        onRowClick={(e) => {history.push(`/evaluacion/${e.id}`)}}
      />);
    } else {
      return <Skeleton variant="rectangular" width="100%" height={400} />
    }
  };

  return (
    <Container>
      <h1>SubjectList</h1>
      {renderTable()}
    </Container>
  );
}

export default SubjectList;