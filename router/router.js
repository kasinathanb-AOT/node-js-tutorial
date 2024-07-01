const express = require('express')
const { fetchTasks, addTask, updateTasks, deleteTask } = require('../helper')
const router = express.Router()


router.get("/", fetchTasks);

router.post("/newTask", addTask);

router.put("/updateTask/:id", updateTasks);

router.delete("/deleteTask/:id", deleteTask);


module.exports = router;
