import express from 'express';

import canonize from './canonize';

const app = express();

app.get('/', (req, res) => {
	const username = canonize(req.query.username);
	res.json({
		username: req.query.username,
		username,
	});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
