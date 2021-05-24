// @route - api/hello
// @desc - test api route
// @access - Public

import Router from '../../middlewares/index';

const router = Router();

router.get(async (req, res, next) => {
	res.send('Hello');
});

export default router;
