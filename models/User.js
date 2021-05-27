import mongoose, { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
	task: {
		type: String,
		required: [true, 'Task is required'],
	},
	date: {
		type: Date,
		default: Date.now,
	},
	tags: {
		type: [String],
	},
});

const UserSchema = new Schema({
	name: String,
	googleId: Number,
	date: { type: Date, default: Date.now },
	email: String,
	picture: String,
	todos: {
		type: [TodoSchema],
	},
});

export default mongoose.models.User || model('User', UserSchema);
