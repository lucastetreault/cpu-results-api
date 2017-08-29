require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => res.json('yay!'))

app.listen(process.env.PORT || 3000)
