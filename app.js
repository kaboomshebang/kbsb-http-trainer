import express from 'express';
import 'dotenv/config';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;

const app = express();

// setup EJS views
app.set('views', './views');
app.set('view engine', 'ejs');

// set a static asset folder
app.use(express.static('./public'));

app.get('/', (req, res, next) => {
	const params = { page: { title: 'Home' } };
	res.render('index', params, (err, html) => {
		res.send(html);
	});
});

app.listen(PORT, HOST, () => {
	console.log(`Server listening on ${HOST}:${PORT}...`);
});
