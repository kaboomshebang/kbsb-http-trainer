import { Router } from 'express';

const router = Router();

// middleware

// routes
router.get('/', (req, res, next) => {
	const params = { page: { title: 'Home' } };
	res.render('routes/index', params, (err, html) => {
		res.send(html);
	});
});

export default router;
