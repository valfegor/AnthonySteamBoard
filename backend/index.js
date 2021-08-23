const express = require('express');

const cors = require('cors');

require('dotenv').config();

const {Database_connect} = require('../backend/bd/bd');
const Role = require('../backend/routes/roleRoutes')

app = express();

app.use(cors());

app.use(express.json());
app.use('/api/roles',Role);

app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))

Database_connect();