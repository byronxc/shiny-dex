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
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
  const sqlSelect =
    "SELECT * FROM pokemon ORDER BY pokemon_num ASC";
  db.query(sqlSelect, (err, result) => {
    res.send(result)
  });
});

app.post('/api/update', (req, res) => {
  const shinyState = req.body.shinyState;
  const shinyNumber = req.body.shinyNumber;

  const sqlUpdate =
    "UPDATE pokemon SET shiny=? WHERE pokemon_num=?";
  db.query(sqlUpdate, [shinyState, shinyNumber], (err, result) => {
    console.log(err);
  });
});

app.post('/api/insert', (req, res) => {
  const shinyState = req.body.shinyState;
  const shinyNumber = req.body.shinyNumber;
  const shinyName = req.body.shinyName;
  const url = req.body.url;
  const urlShiny = req.body.urlShiny;
  const sqlInsert =
    "INSERT INTO pokemon (`pokemon_num`, `pokemon_name`, `shiny`, `url_image`, `shiny_url_image`) VALUES (?, ?, ?, ?, ?)";
  db.query(sqlInsert, [shinyNumber, shinyName, shinyState, url, urlShiny], (err, result) => {
    console.log(err);
  });
});

app.post('/api/delete', (req, res) => {
  const shinyNumber = req.body.shinyNumber;
  const sqlInsert =
    "DELETE FROM pokemon WHERE pokemon_num = ?";
  db.query(sqlInsert, [shinyNumber], (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("Running on port 3000");
});