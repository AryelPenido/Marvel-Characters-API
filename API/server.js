const express = require('express');
const cors = require('cors');
bodyParser = require('body-parser');
require('dotenv').config();

const charactersRouter = require('./routes/characters.routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

app.use('/api/characters/', charactersRouter);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
    
  });


module.exports = app;