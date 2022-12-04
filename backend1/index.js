const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

const DB = require('./db');
const Vocabdata = require('./model/userSchema');
app.use(express.json());
const cors = require ("cors");
app.use(cors());


const port = 5000;

// app.use(require('./router/auth'));
app.use('/api/auth', require('./router/auth'));




// respond with "hello world" when a GET request is made to the homepage


app.listen(port, () => {
    console.log(`Server running at ${port}/`);
  });
