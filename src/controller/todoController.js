const todoTasks = require("../model/Todo");

// get all Todos
exports.getAllTasks = async (req, res) => {
    try {
       let tasks = await todoTasks.find();
       if (tasks.length === 0) {
        res.status(404).json({
            success: false,
            message: "No Task Found"
        })
       }

       res.status(200).json({
        success: true,
        message: "Tasks Found",
        count: tasks.length,
        tasks
       })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal Server Error",
            error: error.message
        })
    }
}

// Add a Todo Task
exports.addTask = async (req, res) => {
    try {
        const task = await req.body;
        const newTask = await todoTasks.create(task);

        if (!newTask) {
            return res.status(404).json({
                success: false,
                message: "Task Creation Failed"
            })
        }

        return res.status(201).json({
            success: true,
            message: "Task Successfully Created",
            newTask
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


// Update Task
exports.updateTask = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let task = req.body;
        let update = await todoTasks.findOneAndUpdate(id, task, {new: true});

        if (!update) {
            return res.status(400).json({
                success: false,
                message: "Task not Updated"
            })
        }

        res.status(200).json({
            success: true,
            message: "Task Updated Successfully",
            update
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


// Delete Tasks
exports.deleteTask = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let deleted = await todoTasks.findOneAndRemove(id);

        if(!deleted) {
            return res.status(400).json({
                success: false,
                message: "Task not deleted"
            })
        }

        res.status(200).json({
            success: true,
            message: "Task Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}
