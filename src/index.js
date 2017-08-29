require('dotenv').config()

const express = require('express')
const {Client} = require('pg')

const app = express()

app.get('/', async (req, res) => {
  const client = new Client({connectionString: process.env.DATABASE_URL})

  await client.connect()
  const results = await client.query('SELECT * from results')
  res.json(results)
  await client.end()
})

app.listen(process.env.PORT || 3000)
