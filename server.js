// use express to server files
const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const cors = require('cors')
const puppeteer = require('puppeteer');
const app = express();

// app.engine('html', ejs.__express)
app.set('view engine', 'ejs');
app.use(morgan('combined'));
app.use(express.static('dist'));
app.use(cors());

const http = require('http').Server(app);

// const Datastore = require('nedb')

const locations = [
	{
		id: 0,
		name: 'Tokyo',
		slug: 'tokyo',
		coordinates: [ 139.7328635, 35.6584421 ],
		topoindex: 82,
		utcOffsetHours: 9
	},
	{
		id: 1,
		name: 'Helsinki',
		slug: 'helsinki',
		coordinates: [ 24.949083, 60.169753 ],
		topoindex: 52,
		utcOffsetHours: 2 // TODO in the summer it's 3!!
	},
	{
		id: 2,
		name: 'New York',
		slug: 'newyork',
		coordinates: [ -73.9938438, 40.7406905 ],
		topoindex: 168,
		utcOffsetHours: -5 // -4 in the summer..
	},
	{
		id: 3,
		name: 'Amsterdam',
		slug: 'amsterdam',
		coordinates: [ 4.9040238, 52.3650691 ],
		topoindex: 117,
		utcOffsetHours: 1 // I guess I need some api for this..
	},
	{
		id: 4,
		name: 'Dubai',
		slug: 'dubai',
		coordinates: [ 55.1562243, 25.092535 ],
		topoindex: 3,
		utcOffsetHours: 4
	}
];

// setup database from file
const locationIdExists = (id) => {
	return locations.some((l) => l.id === id);
};

const tags = [
  '最难留疤',
  '容易焦虑',
  '非常脆弱',
  '喝咖啡较多',
  '比较怕痛',
  '不易长痘',
  '最难失眠',
  '叶酸需求较高',
  '最难留疤',
  '容易焦虑',
  '非常脆弱',
  '喝咖啡较多',
  '比较怕痛',
  '不易长痘',
  '最难失眠',
  '叶酸需求较高'
];

app.get('/test', (req, res) => {
	console.log(req.query)
	// let name = req.query.name
	res.render('test', { tags });
});

app.get('/data', (req, res) => {
	return res.json({
		success: true,
		locations
	});
});

app.get('/export/pdf', (req, res) => {
	(async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		const name = req.params.name || 'hello'

		await page.goto(`http://localhost:3000/test?name=${name}`, {
			waitUntil: 'load'
		});
		await page.setViewport({
			width: 376, // 320, 768, 1024, 1280
			height: 802
		});
		const path = `screenshots/screen-${Date.now()}.png`
		await page.screenshot({
      path: `dist/${path}`,
      fullPage: true
    });

		res.type('application/json');
		res.send({
      path
    });
		browser.close();
	})();
});

app.get('/', (req, res) => {
	res.sendFile(__dirname, '/index.html');
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
	console.log('Listening on: Localhost:' + port);
});
