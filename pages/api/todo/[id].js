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
		const { googleId } = req.session.user;
		const { task, tags } = JSON.parse(req.body.body);
		const { id } = req.query;

		// ? Needs to be refactored...! [Bug] new Todo is created everytime updated. (Seen by change in _id) | Should be mutated instead --> This is fixed [line 27 & 28] still kinda hacky, needs to be refactored

		const user = await User.findOne({ googleId });
		const { todos } = user;

		const idx = todos.findIndex((td) => td._id == id);
		todos[idx] = { ...todos[idx], task, tags, _id: id };
		const { todos: updatedTodos } = await user.save();

		res.status(201).json({ todos: updatedTodos });
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
		const { googleId } = req.session.user;
		const { id } = req.query;

		// ? very hacky :: needs to be refactored
		const user = await User.findOne({ googleId });
		user.todos = user.todos.filter((td) => td._id != id);
		await user.save();

		res.status(204).end();
	}),
);

export default router;
