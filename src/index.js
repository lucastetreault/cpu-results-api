require('dotenv').config()

const express = require('express')
const {Client} = require('pg')

const app = express()

app.get('/', async (req, res) => {
  const client = new Client({connectionString: process.env.DATABASE_URL})

  await client.connect()
  const results = await client.query('SELECT * FROM results ORDER BY wilks DESC')
  const reduced = Array.from(results.rows.reduce((prev, curr) => {
    if (!prev.has(curr.name)) {
      console.log(curr.name)
      prev.set(curr.name, curr)
    }
    return prev
  }, new Map()).values()).slice(0, 100)
  res.json(reduced)
  await client.end()
})

app.listen(process.env.PORT || 3000)
