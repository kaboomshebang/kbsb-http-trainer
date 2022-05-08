import { Router } from 'express';

const router = Router();

// middleware

// routes
router.get('/', (req, res, next) => {
	res.render('pages/index', (err, html) => {
		if (err) throw err;
		res.send(html);
	});
});

export default router;
