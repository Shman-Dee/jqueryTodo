const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
  res.send("list of all task");
});

app.post("/addTask", (req, res) => {
  const ADD_QUERY = `INSERT INTO react_todos.tasks (task) VALUES ('${req.body.task}')`;
  
  connection.query(ADD_QUERY, (err) => {
    if (err) console.log(err)
    else res.send('task has been added successfully')
  });
  
});

app.delete("/deleteTask", (req, res) => {
  res.send("deleted task");
});

app.listen(3000, () => {
  console.log("listening on port 3000 dad");
});


//trying to link it up