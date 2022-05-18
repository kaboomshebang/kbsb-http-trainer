import express from 'express';
import { default as index } from './routes/index.js';
import { default as headers } from './routes/headers.js';
import { default as methods } from './routes/methods.js';
import { default as requests } from './routes/requests.js';
import { default as codes } from './routes/codes.js';
import 'dotenv/config';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 5000;

const app = express();

// setup EJS views
app.set('views', './views');
app.set('view engine', 'ejs');

app.locals.siteTitle = 'HTTP Trainer | Kaboom Shebang';

// set a static asset folder
app.use(express.static('./public'));

// routes
app.use('/', index);
app.use('/requests', requests);
app.use('/methods', methods);
app.use('/codes', codes);
app.use('/headers', headers);

app.listen(PORT, HOST, () => {
	console.log(`Server listening on ${HOST}:${PORT}...`);
});
