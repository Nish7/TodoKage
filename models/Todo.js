import mongoose, { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
	task: {
		type: String,
		required: [true, 'Task is required'],
	},
	date: {
		type: Date,
		default: new Date(),
	},
	tags: {
		type: 'String',
	},
});

export default mongoose.models.Todo || model('Todo', TodoSchema);
