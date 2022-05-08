import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
	const params = { title: 'HTTP Response Status Codes' };
	res.render('pages/codes', params, (err, html) => {
		if (err) throw err;
		res.send(html);
	});
});

export default router;
