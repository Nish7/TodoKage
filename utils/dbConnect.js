import mongoose from 'mongoose';

if (!process.env.DB_URI) {
	throw new Error('Please Add a mongo db URI');
}

// global.cached = global.cached || {conn:null, promise:null}

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	// Check for cached connection
	if (cached.conn) {
		console.log('Database Connected! [Cached]');
		return;
	}

	// Check if there is any promise
	if (!cached.promise) {
		const opts = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		};

		cached.promise = mongoose.connect(process.env.DB_URI, opts);
	}

	// check if the promise is pending, if yes , then it will wait until resolved.
	cached.conn = await cached.promise;
	console.log('Database Connected! [New]');
	return;
}

export default dbConnect;
