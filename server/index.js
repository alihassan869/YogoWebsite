require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const UserContrllers = require('./Controllers/controller');
const port = process.env.PORT || 3000;
require('./Database/Conn');
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.post('/login', UserContrllers.Login);
app.post('/Register', UserContrllers.Register);
app.post('/Forget', UserContrllers.Forget);
app.post('/update', UserContrllers.update);
app.listen(port, () => {
  console.log(`server is connected on port ${port}`);
});
