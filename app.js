const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/api/tasks", function(req, res) {
  res.json(tasks);
});

app.post("/api/tasks", function(req, res) {
  const { topic, date } = req.body;

  const newTask = {
    id: Date.now(),
    topic: topic,
    date: date,
    completed: false
  };

  tasks.push(newTask);

  res.json({
    message: "Topic added successfully",
    task: newTask
  });
});

app.listen(port, function() {
  console.log(`Server running at http://localhost:${port}`);
});