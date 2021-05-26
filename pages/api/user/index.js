import Router from '@/middlewares/index';
const router = Router();

import protect from '@/middlewares/protect';
import User from '@/models/User';

/**
 * @route {POST} api/user
 * @desc Create a new user
 * @access Public
 */
router.post(async (req, res, next) => {
	const { name, email, picture, id: googleId } = JSON.parse(req.body.body);
	const user = await User.create({ name, email, picture, googleId });
	res.status(200).json({ user });
});

/**
 * @route {DELETE} api/user
 * @desc delete user by id (google)
 * @access Private
 */
router.delete(protect, async (req, res, next) => {
	const googleId = req.session.user.googleId;
	const user = await User.findOne({ googleId });

	if (!user) {
		return console.log('User not found');
	}

	await User.findOneAndDelete({ googleId });
	res.status(204).json({ data: 'Deletion Succesfull' });
});

export default router;
