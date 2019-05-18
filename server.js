const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.status(200).send('SUCCESSFULLY REACHED AT /');
});

app.listen(3000);
