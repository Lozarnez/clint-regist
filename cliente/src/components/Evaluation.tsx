import { Container, Skeleton } from '@mui/material';
import clienteAxios from 'axiosConfig';
import { registradoObject, evaluationParams } from 'definitions';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Evaluation() {

  const params:evaluationParams = useParams();
  const [registrado, setRegistrado] = useState<registradoObject>();

  useEffect(() => {
    getRegistrado();
  }, []);


  const getRegistrado = async () => {
    await clienteAxios.get(`/registrados/${params.id}`)
      .then(res => {
        setRegistrado(res.data.cliente);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Container>
      <h1>Evaluation</h1>
      { registrado ?
        <div>
          <h2>{registrado.nombre}</h2>
        </div>
        : <Skeleton variant="rectangular" width="100%" height="100px" />
      }
    </Container>
  );
}

export default Evaluation;