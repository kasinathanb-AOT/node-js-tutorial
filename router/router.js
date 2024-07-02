const express = require('express')
const { fetchTasks, addTask, updateTasks, deleteTask, getTaskById } = require('../helper')
const router = express.Router()

router.get("/", fetchTasks);

router.get("/getTaskById/:id", getTaskById);

router.post("/newTask", addTask);

router.put("/updateTask/:id", updateTasks);

router.delete("/deleteTask/:id", deleteTask);

module.exports = router;