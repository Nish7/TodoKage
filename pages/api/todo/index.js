import Router from '@/middlewares/index';
import protect from '@/middlewares/protect';

const router = Router();

/**
 * @route {GET} /api/todo/
 * @desc get all todo
 * @access Public
 */
router.get(async (req, res, next) => {
	res.status(200).json({ data: 'Get all todos' });
});

/**
 * @route {POST} /api/todo
 * @desc create a todo
 * @access Private
 */
router.post(protect, async (req, res, next) => {
	res.status(200).json({ session: req.session });
});

export default router;
