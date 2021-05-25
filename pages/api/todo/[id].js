import Router from '@/middlewares/index';
const router = Router();

/**
 * @route {GET} api/todo/[id]
 * @desc get todo by id
 * @access Public
 */
router.get(async (req, res, next) => {
	const { id } = req.query;

	res.json({ data: `Get todo by ${ids}` });
});

/**
 * @route {PUT} api/todo/[id]
 * @desc Edit a Todo
 * @access Private
 */
router.put(async (req, res, next) => {
	const { id } = req.query;

	res.json({ data: `put todo by ${id}` });
});

/**
 * @route {DELETE} api/todo/[id]
 * @desc delete todo by id
 * @access Private
 */
router.delete(async (req, res, next) => {
	const { id } = req.query;

	res.json({ data: `delete todo by ${id}` });
});

export default router;
