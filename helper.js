const { v4 } = require("uuid");

const tasks = [];

// Adding new task
const addTask = (req, res) => {
  const { title, desc, dueDate } = req.body;
  if (title && desc && dueDate) {
    const id = v4();
    const task = {
      id,
      title,
      desc,
      dueDate,
    };
    tasks.push(task);
    res.send(tasks);
  } else {
    res.status(400);
  }
};

// Getting all the task
const fetchTasks = (req, res) => {
  if (tasks) {
    return res.send(tasks);
  }
  res.status(500).json({ message: "No Tasks Available" });
};

// Fetch task by id
const getTaskById = (req, res) => {

  const { id } = req.params;
  const task = tasks.find((tasks) => tasks.id == id);
  if (task) {
    res.status(200).json({ task });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

// Updating the existing task
const updateTasks = (req, res) => {
  const id = req.params.id;
  const { title, desc, dueDate } = req.body;
  if (title && desc && dueDate) {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      task.title = title;
      task.desc = desc;
      task.dueDate = dueDate;
    }
    res.send(tasks);
  } else {
    res.status(400).json({ message: "Invalid Data" });
  }
};

// Deleting a task
const deleteTask = (req, res) => {
  const id = req.params.id;
  const task = tasks.find((task) => task.id === id);
  if (task) {
    const task = tasks.filter((task) => task.id !== id);
    res.send({ message: `Task with ${id} is deleted` });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

module.exports = {
  addTask,
  fetchTasks,
  getTaskById,
  updateTasks,
  deleteTask,
};
