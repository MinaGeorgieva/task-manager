import mongoose from 'mongoose';
import { TaskSchema } from '../model';

const Task = mongoose.model('task',TaskSchema);


//POST (insert new task)
export const addNewTask = (req,res)=>{
    const newTask = new Task(req.body);

    newTask
        .save()
        .then((task)=>res.json(task))
        .catch((err)=>res.json(err));
}; //add new task

//GET (read all tasks)
export const getTasks = (req,res)=>{
    Task
        .find({})
        .then((tasks)=>res.json(tasks))
        .catch((err)=>res.json(err));
};//get tasks
//get by ID
export const getTaskById = (req,res)=>{
    Task
        .findOne({_id: req.params.taskId})
        .then((task)=>res.json(task))
        .catch((err)=>res.json(err));
};
//PUT
export const updateTask = (req,res)=>{
    Task
        .findOneAndUpdate({_id: req.params.taskId}, //критерий
                          req.body, //променените данни
                          {new:true
        })
        .then((task)=>res.json(task))
        .catch((err)=>res.json(err));
};//update contact

export const deleteTask = (req,res)=>{
    Task
        .deleteOne({_id:req.params.taskId})
        .then((status)=>res.json(status))
        .catch((err)=>req.json(err));
}; //delete contact