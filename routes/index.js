import { Router } from 'express';

const router = Router();

// middleware

// routes
router.get('/', (req, res, next) => {
	const params = { title: 'Home' };
	res.render('routes/index', params, (err, html) => {
		if (err) throw err;
		res.send(html);
	});
});

export default router;
