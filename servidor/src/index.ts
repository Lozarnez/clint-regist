import express from 'express';
import cors from 'cors';
import conectDB from '../config/db';


// creating server
const app = express();
conectDB();
app.use(express.json({extended: true} as any));
app.use(cors());

const port = process.env.PORT || 4000;

// import routes 
app.use('/api/registro', require('./routes/cliente'));
app.use('/api/registrados', require('./routes/registrados'));

// defining routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// starting server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});