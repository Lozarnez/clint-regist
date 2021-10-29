import { Button, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

function Home() {

  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.StyledRow}>
          <h1>Control de clientes</h1>
        </Grid>
        <Grid item xs={4} className={classes.StyledRow}>
          <Button variant='contained'>
            <Link to="/formulario" className={classes.StyledButton}>Formulario</Link>
          </Button>
        </Grid>
        <Grid item xs={4} className={classes.StyledRow}>
          <Button variant='contained'>
            <Link to="/lista-prospectos" className={classes.StyledButton}>Lista</Link>
          </Button>
        </Grid>
          <Grid item xs={4} className={classes.StyledRow}>
          <Button variant='contained'>
            <Link to="/evaluacion" className={classes.StyledButton}>Evaluacion</Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles({
  StyledRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  StyledButton: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }

});

export default Home;