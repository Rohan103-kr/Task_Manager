const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// In-Memory Database
let tasks = [];
let idCounter = 1;

// Routes

// 1. GET /tasks - Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// 2. POST /tasks - Create a new task
app.post("/tasks", (req, res) => {
  const { text } = req.body;
  if (!text || text.trim() === "") {
    return res.status(400).json({ error: "Task text cannot be empty." });
  }

  const newTask = {
    id: idCounter++,
    text: text.trim(),
    completed: false // Bonus handling
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 3. DELETE /tasks/:id - Delete a task
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== taskId);

  if (tasks.length === initialLength) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json({ message: "Deleted" });
});

// 4. PUT /tasks/:id - Update complete status (Bonus)
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (typeof req.body.completed === "boolean") {
    task.completed = req.body.completed;
  }
  if (req.body.text && req.body.text.trim() !== "") {
    task.text = req.body.text.trim();
  }

  res.json(task);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
