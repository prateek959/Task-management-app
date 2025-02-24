import express from 'express';
import { completeTask, createTask, deleteTasks, getCompleteTasks, getImpTasks, getInCompleteTasks, getTasks, importantTask, updateTasks } from '../controller/task.controller.js';
import authenticationToken from './auth.routes.js';

const taskRouter = express.Router();

taskRouter.post('/add', authenticationToken, createTask);
taskRouter.get('/getTasks', authenticationToken, getTasks);
taskRouter.delete('/deleteTasks/:id',authenticationToken, deleteTasks);
taskRouter.put('/updateTasks/:id', authenticationToken,updateTasks);
taskRouter.put('/update-imp-tasks/:id', authenticationToken,importantTask);
taskRouter.put('/update-complete-tasks/:id', authenticationToken,completeTask);
taskRouter.get('/get-imp-tasks', authenticationToken,getImpTasks);
taskRouter.get('/get-complete-tasks', authenticationToken,getCompleteTasks);
taskRouter.get('/get-incomplete-tasks', authenticationToken,getInCompleteTasks);


export default taskRouter;