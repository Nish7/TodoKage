import mongoose, { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	name: String,
	googleId: Number,
	date: { type: Date, default: new Date() },
	email: String,
	picture: String,
});

export default mongoose.models.User || model('User', UserSchema);
