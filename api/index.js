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
  "SELECT * FROM pokemon ORDER BY pokemon_num ASC"; 
  db.query(sqlSelect, (err, result) => {
    res.send(result)
  });
});

app.post('/api/insert', (req, res) => {
  const shinyState = req.body.shinyState;
  const shinyNumber = req.body.shinyNumber;

  const sqlInsert =
  "UPDATE pokemon SET shiny=? WHERE pokemon_num=?"; 
  db.query(sqlInsert, [shinyState, shinyNumber], (err, result) => {
   console.log(err);
  });
});

app.listen(3001, () =>{
  console.log("Running on port 3000");
});