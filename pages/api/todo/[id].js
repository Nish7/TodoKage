import Router from '@/middlewares/index';
const router = Router();

/**
 * @route api/todo/[id]
 * @desc get todo by id
 * @access Public
 */
router.get(async (req, res, next) => {
	const { id } = req.query;

	res.json({ data: `Get todo by ${ids}` });
});

/**
 * @route api/todo/[id]
 * @desc get todo by id
 * @access Public
 */
router.put(async (req, res, next) => {
	const { id } = req.query;

	res.json({ data: `put todo by ${id}` });
});

/**
 * @route api/todo/[id]
 * @desc get todo by id
 * @access Public
 */
router.delete(async (req, res, next) => {
	const { id } = req.query;

	res.json({ data: `delete todo by ${id}` });
});

export default router;
