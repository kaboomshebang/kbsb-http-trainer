import express from 'express';
import { default as index } from './routes/index.js';
import 'dotenv/config';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;

const app = express();

// setup EJS views
app.set('views', './views');
app.set('view engine', 'ejs');

// set a static asset folder
app.use(express.static('./public'));

// routes
app.use('/', index);

app.listen(PORT, HOST, () => {
	console.log(`Server listening on ${HOST}:${PORT}...`);
});
