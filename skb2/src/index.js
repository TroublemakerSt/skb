import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/skb2a', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

app.get('/skb2b', (req, res) => {
  res.json({
    hello: 'JS World111',
  });
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
