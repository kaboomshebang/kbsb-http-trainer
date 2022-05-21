import express from 'express';
import { default as index } from './routes/index.js';
import { default as headers } from './routes/headers.js';
import { default as methods } from './routes/methods.js';
import { default as requests } from './routes/requests.js';
import { default as codes } from './routes/codes.js';
import 'dotenv/config';

import { default as livereload } from 'livereload';
import { default as connectLiveReload } from 'connect-livereload';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 5000;

// setup the livereloadserver
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
	setTimeout(() => {
		liveReloadServer.refresh('/');
	}, 100);
});

const app = express();

// setup EJS views
app.set('views', './views');
app.set('view engine', 'ejs');

app.locals.siteTitle = 'HTTP Trainer | Kaboom Shebang';

// set a static asset folder
app.use(express.static('./public'));

// conditional to load browser live reload
if (process.env.ENV === 'dev') {
	app.use(
		connectLiveReload({
			port: 35729,
		})
	);
}

// routes
app.use('/', index);
app.use('/requests', requests);
app.use('/methods', methods);
app.use('/codes', codes);
app.use('/headers', headers);

app.listen(PORT, HOST, () => {
	console.log(`Server listening on ${HOST}:${PORT}...`);
});
