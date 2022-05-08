import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
	const params = { title: 'HTTP Request Methods' };
	res.render('pages/methods', params, (err, html) => {
		if (err) throw err;
		res.send(html);
	});
});

export default router;
