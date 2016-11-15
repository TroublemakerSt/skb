import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let pc = {};
fetch(pcUrl)
  .then(async (res) => {
    pc = await res.json();
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });

const app = express();
app.use(cors());

function notFoundErr(res){
  res.status(404).send('Not Found');
}

app.get('/skb3A', function (req, res) {
  res.json(pc);
});

app.get('/skb3A/volumes', function (req, res) {
  if (pc.hdd) {
    const volumes = {};
    pc.hdd.map ( (item) => {
        if (volumes[item.volume]) {
          volumes[item.volume] += item.size;
        }else {
          volumes[item.volume] = item.size;
        }
    });
    console.log(volumes, typeof(volumess), typeof(pc));

    Object.keys(volumes).forEach( (key) =>{
      volumes[key] += 'B';
    });

    res.json(volumes);

  }else {
    notFoundErr(res);
  }
});

app.get('/skb3A/:lvl1', (req, res) => {
  const p = req.params;
  if (pc[p.lvl1] !== undefined) {
    res.json(pc[p.lvl1]);
  } else {
    notFound(res);
  }
});

app.get('/skb3A/:lvl1/:lvl2', (req, res) => {
  const p = req.params;
  if (
      p.lvl2 !== 'length' &&
      pc[p.lvl1] !== undefined &&
      pc[p.lvl1][p.lvl2] !== undefined
  ) {
    res.json(pc[p.lvl1][p.lvl2]);
  } else {
    notFound(res);
  }
});

app.get('/skb3A/:lvl1/:lvl2/:lvl3', (req, res) => {
  const p = req.params;
  if (p.lvl3 !== 'length' &&
      pc[p.lvl1] !== undefined &&
      pc[p.lvl1][p.lvl2] !== undefined &&
      pc[p.lvl1][p.lvl2][p.lvl3] !== undefined
  ) {
    res.json(pc[p.lvl1][p.lvl2][p.lvl3]);
  } else {
    notFound(res);
  }
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
