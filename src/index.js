const express = require('express');
const app = express();

app.get('/', (req, res) => res.json('yay!'));

app.get('/config', (req, res) => res.json(process.env));

app.listen(process.env.PORT || 3000);
