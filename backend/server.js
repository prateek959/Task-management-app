import express from 'express';
import dotenv from 'dotenv';
import db from './connection/connection.js';
import userRouter from './routes/user.routes.js';
import cors from 'cors';
import taskRouter from './routes/task.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
res.send('Hello Backend');
});

app.use('/api/user',userRouter);
app.use('/api/task',taskRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, async ()=>{
    await db();
    console.log(`Server is running ${PORT}`);
})

