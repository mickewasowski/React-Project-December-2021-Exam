const {PORT, DATABASE_CONNECTION_STRING} = require('./config.json');
const cors = require('cors')

const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const petsRouter = require('./routes/pets');
app.use('/pets', petsRouter);

mongoose.connect(DATABASE_CONNECTION_STRING)
.then(app.listen(PORT, () => console.log(`Server started at http://localhost:5000 ...`)))
.catch(error => console.log(error));

