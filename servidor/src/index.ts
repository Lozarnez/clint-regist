import express from 'express';
import conectDB from '../config/db';


// creating server
const app = express();
conectDB();
app.use(express.json({extended: true} as any));

const port = process.env.PORT || 4000;

// import routes 
app.use('/api/cliente', require('./routes/cliente'));

// defining routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// starting server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});