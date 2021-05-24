import dbConnect from '@/utils/dbConnect';

async function db(req, res, next) {
	await dbConnect();
	next();
}

export default db;
