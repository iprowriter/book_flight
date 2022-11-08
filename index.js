const express = require('express')
const app = express()
const data = require('./flightApi.json')

app.get('/', (req, res) => {
  res.json(data)
})

app.listen(process.env.PORT || 5000, () => console.log("Server is up and runnning"));

