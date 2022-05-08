import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
	const params = { title: 'Headers' };
	res.render('routes/headers', params, (err, html) => {
		if (err) throw err;
		res.send(html);
	});
});

export default router;
