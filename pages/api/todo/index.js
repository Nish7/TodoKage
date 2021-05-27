import Router from '@/middlewares/index';
import protect from '@/middlewares/protect';

const router = Router();
import asyncHandler from '@/utils/asyncHandler';
import User from '@/models/User';

/**
 * @route {GET} /api/todo/
 * @desc get all todos of user
 * @access Private
 */
router.get(
	protect,
	asyncHandler(async (req, res, next) => {
		const { googleId } = req.session.user;
		const { todos } = await User.findOne({ googleId }).select('todos -_id');

		res.status(200).json({ todos });
	}),
);

/**
 * @route {POST} /api/todo
 * @desc create a todo
 * @access Private
 */
router.post(
	protect,
	asyncHandler(async (req, res, next) => {
		const { googleId } = req.session.user;
		const todo = JSON.parse(req.body.body);

		const user = await User.findOne({ googleId }).select('todos');
		user.todos.push(todo);
		await user.save();

		res.status(201).json({ todos: user });
	}),
);

export default router;
