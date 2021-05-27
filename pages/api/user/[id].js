import Router from '@/middlewares/index';
const router = Router();

import User from '@/models/User';

/**
 * @route {GET} api/user/[id]
 * @desc get user by id (google)
 * @access Public
 */
router.get(async (req, res, next) => {
	const googleId = req.query.id;
	const user = await User.findOne({ googleId }).select('-todos');
	res.status(200).json({ user });
});

export default router;
