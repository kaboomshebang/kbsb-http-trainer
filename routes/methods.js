import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
	const params = { title: 'Methods' };
	res.render('routes/methods', params, (err, html) => {
		if (err) throw err;
		res.send(html);
	});
});

export default router;
