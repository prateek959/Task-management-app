import Task from "../models/task.js";
import User from "../models/user.js";

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({
            title,
            description
        });
        const saveTask = await newTask.save();
        const taskId = saveTask._id;
        const userId = req.user.id;
        await User.findByIdAndUpdate(userId, { $push: { tasks: taskId } });
        res.status(201).json({ message: "Task is added" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getTasks = async (req, res) => {
    try {
        const id = req.user.id;
        const data = await User.findById(id).populate({
            path: "tasks",
            options: { sort: { createdAt: -1 } }
        });
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteTasks = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.headers.id;
        await Task.findByIdAndDelete(id);
        await User.findByIdAndUpdate(userId, { $pull: { tasks: id } });
        res.status(200).json({ message: "Task is Deleted" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateTasks = async(req, res)=>{
    try {
        const id = req.params.id;
        const {title, description} = req.body;
        await Task.findByIdAndUpdate(id, {title, description});
        res.status(200).json({message:"Task Updated successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const importantTask = async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await Task.findById(id);
        const impTask = data.important;
        await Task.findByIdAndUpdate(id, {important:!impTask});
        res.status(200).json({message:"Task Updated successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
};

const completeTask = async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await Task.findById(id);
        const completeTask = data.complete;
        await Task.findByIdAndUpdate(id, {complete:!completeTask});
        res.status(200).json({message:"Task Updated successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
};


const getImpTasks = async (req, res) => {
    try {
        const id = req.user.id;
        const data = await User.findById(id).populate({
            path: "tasks",
            match:{important:true},
            options: { sort: { createdAt: -1 } }
        });
        const ImpTaskData = data.tasks;
        res.status(200).json({data:ImpTaskData}); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getCompleteTasks = async (req, res) => {
    try {
        const id = req.user.id;
        const data = await User.findById(id).populate({
            path: "tasks",
            match:{complete:true},
            options: { sort: { createdAt: -1 } }
        });
        const compTaskData = data.tasks;
        res.status(200).json({data:compTaskData}); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getInCompleteTasks = async (req, res) => {
    try {
        const id = req.user.id;
        const data = await User.findById(id).populate({
            path: "tasks",
            match:{complete:true},
            options: { sort: { createdAt: -1 } }
        });
        const compTaskData = data.tasks;
        res.status(200).json({data:compTaskData}); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};




export { createTask, getTasks, deleteTasks, updateTasks, importantTask, completeTask, getImpTasks, getCompleteTasks, getInCompleteTasks };