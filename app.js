import express from 'express';
import 'dotenv/config';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;

const app = express();

// setup EJS views
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', (req, res, next) => {
	res.send('Hello');
});

app.listen(PORT, HOST, () => {
	console.log(`Server listening on ${HOST}:${PORT}...`);
});
