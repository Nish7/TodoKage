import Router from '@/middlewares/index';
const router = Router();

/**
 * @route /api/todo/
 * @desc get all todo
 * @access Public
 */
router.get(async (req, res, next) => {
	res.json({ data: 'Get all todos' });
});

export default router;
