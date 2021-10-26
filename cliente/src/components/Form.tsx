import { useState } from 'react';
import {
  TextField,
  Paper,
  Container,
  Grid,
  Button,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Delete, Description, NoteAdd } from '@mui/icons-material';
import clienteAxios from '../axiosConfig';

function Form() {

  const classes = useStyles();
  const [form, setForm] = useState({
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    calle: '',
    numeroDomicilio: '',
    colonia: '',
    codigoPostal: '',
    telefono: '',
    rfc: '',
    estatus: 'enviado',
    documentos: [],
  });
  const [files, setFiles] = useState([]);

  const handleFileSelected = (e: any) => {
    const fileList:any = Array.from(e.target.files);
    console.log(fileList);
    setFiles(fileList);
  };

  const deleteSelectedFile = (index: number) => {
    const newFiles = files.filter((file: any, i: number) => i !== index);
    setFiles(newFiles);
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async() => {

    try {
      const formData = form;
      formData.documentos = files;
      const registro = await clienteAxios.post('registro', {formData});
      console.log(registro);
    } catch (error) {
      console.log(error);
    }
      
  }

  const renderFileList = () => (
    <Grid item xs={12} md={10}>
      <List>
        {files.map((file:any, index:number) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteSelectedFile(index)}>
                <Delete />
              </IconButton>
            }
            style={{backgroundColor: '#f5f5f5', margin: '0.5rem 0'}}
          >
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText
              primary={file.name}
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  return (
    <Container className={classes.Container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={8} textAlign="center">
          <pre id="output"></pre>
          <h1>Agregar nuevo prospecto</h1>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.PaperContainer} elevation={3}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} textAlign="center">
                <h3>Registro de candidato</h3>
              </Grid>
              <Grid item xs={12} md={10}>
                <TextField
                  type="text"
                  value={form.nombre}
                  onChange={handleChange}
                  name="nombre"
                  size="small"
                  fullWidth
                  label="Nombre(s)"
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  type="text"
                  value={form.apellidoP}
                  onChange={handleChange}
                  name="apellidoP"
                  size="small"
                  fullWidth
                  label="Apellido Paterno"
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  type="text"
                  value={form.apellidoM}
                  onChange={handleChange}
                  name="apellidoM"
                  size="small"
                  fullWidth
                  label="Apellido Materno"
                />
              </Grid>
              <Grid item xs={12}/>
              <Grid item xs={11} md={7}>
                <TextField
                  type="text"
                  value={form.calle}
                  onChange={handleChange}
                  name="calle"
                  size="small"
                  fullWidth
                  label="Calle"
                />
              </Grid>
              <Grid item xs={11} md={3}>
                <TextField
                  type="number"
                  value={form.numeroDomicilio}
                  onChange={handleChange}
                  name="numeroDomicilio"
                  size="small"
                  fullWidth
                  label="Número"
                />
              </Grid>
              <Grid item xs={11} md={7}>
                <TextField
                  type="text"
                  value={form.colonia}
                  onChange={handleChange}
                  name="colonia"
                  size="small"
                  fullWidth
                  label="Colonia"
                />
              </Grid>
              <Grid item xs={11} md={3}>
                <TextField
                  type="number"
                  value={form.codigoPostal}
                  onChange={handleChange}
                  name="codigoPostal"
                  size="small"
                  fullWidth
                  label="C.P."
                />
              </Grid>
              <Grid item xs={12}/>
              <Grid item xs={11} md={10}>
                <TextField
                  type="text"
                  value={form.telefono}
                  onChange={handleChange}
                  name="telefono"
                  size="small"
                  fullWidth
                  label="Teléfono"
                />
              </Grid>
              <Grid item xs={11} md={10}>
                <TextField
                  type="text"
                  value={form.rfc}
                  onChange={handleChange}
                  name="rfc"
                  size="small"
                  fullWidth
                  label="RFC"
                />
              </Grid>
              <Grid item xs={11} textAlign="center">
                <input type="file" id="fileInput" hidden multiple onChange={handleFileSelected} />
                {files.length === 0 && (
                  <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<NoteAdd />}
                  onClick={() => document.getElementById('fileInput')!.click()}>
                    Adjuntar documentos
                  </Button>)}
              </Grid>
              {files.length > 0 && renderFileList()}
            </Grid>
          </Paper>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} textAlign="center">
              <Button
                onClick={() => handleSubmit()}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
}

const useStyles = makeStyles({
  Container: {
    padding: '1rem',
  },
  PaperContainer: {
    padding: '1rem',
  }
});

export default Form;