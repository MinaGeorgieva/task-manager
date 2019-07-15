import {addNewTask,
    getTasks,
    updateTask,
    deleteTask,
    getTaskById} from '../controller';


export const routes = (app)=>{
        app.route('/task')
            //http://localhost:3000/task
            //POST
        .post((req,res,next)=>{
                console.log(`Add new task:${JSON.stringify(req.body)}`);
                next();
        }, addNewTask)
        //GET
        .get((req,res,next)=>{
                console.log(`Read all tasks ${req.url}, ${req.method}`);
                next();
        }, getTasks);

        //http://localhost:3000/contact/984a5c
        app.route('/task/:taskId')
            .get((req,res,next)=>{
                console.log(`GET task id:${req.params.taskId}`);
                next();
            }, getTaskById)
            .put((req,res,next)=>{
                console.log(`update task:${req.params.taskId}`);
                next();
            }, updateTask)
            .delete((req,res,next)=>{
                console.log(`delete task id:${req.params.taskId}`);
                next();
            }, deleteTask);
    };