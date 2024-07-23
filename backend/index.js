const mysql = require('mysql')
const express = require('express')
const app = express()
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'intern'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})


const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})