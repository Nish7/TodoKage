import Router from '@/middlewares/index';
const router = Router();

import User from '@/models/User';
import protect from '@/middlewares/protect';
import asyncHandler from '@/utils/asyncHandler';


/**
 * @route {PUT} api/todo/[id]
 * @desc Edit a Todo
 * @access Private
 */
router.put(
	protect,
	asyncHandler(async (req, res, next) => {
		const { id: googleId } = req.session.user;
		const {name, email, }
		const todos = await User.findOneAndUpdate({ googleId }, ).select('todos');
		res.status(201).json({ todos });
	}),
);

/**
 * @route {DELETE} api/todo/[id]
 * @desc delete todo by id
 * @access Private
 */
router.delete(
	protect,
	asyncHandler(async (req, res, next) => {
		const { id } = req.query;

		res.json({ data: `delete todo by ${id}` });
	}),
);

export default router;
