const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ShinyDexDb',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
  const sqlSelect =
  "SELECT * FROM pokemon"; 
  db.query(sqlSelect, (err, result) => {
    res.send(result)
  });
});

app.listen(3001, () =>{
  console.log("Running on port 3000");
});