import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Fragment>
      <h1>Home</h1>
      <Link to="/formulario">Formulario</Link>
      <Link to="/lista-prospectos">Lista</Link>
      <Link to="/evaluacion">Evaluacion</Link>
    </Fragment>
  );
}

export default Home;