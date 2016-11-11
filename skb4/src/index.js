import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const f2u = function(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

app.get('/', function (req, res) {
  let fullname = req.query.fullname || '';
  fullname = fullname.replace(/^\s*/,'').replace(/\s*$/,'').replace(/\s{2,}/g,' ');
  console.log('['+fullname+']');
  const re = /^[^0-9_\/]+$/;
  if (fullname && re.test(fullname)) {
    const f = fullname.split(' ');
    if (f.length == 1) {
      return res.send(f2u(f[0]));
    } else if (f.length == 2) {
      return res.send(`${f2u(f[1])} ${f2u(f[0][0])}.`);
    } if (f.length == 3) {
      return res.send(`${f2u(f[2])} ${f2u(f[0][0])}. ${f2u(f[1][0])}.`);
    }
  }
  return res.send('Invalid fullname');
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
