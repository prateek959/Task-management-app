import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    important: { type: Boolean, default: false },
    complete: { type: Boolean, default: false },
}, { timestamps: true });

const Task = mongoose.model('task', TaskSchema);

export default Task;