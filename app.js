// Require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// Set routes
app.get('/', (req, res) => {
  res.send('Set up Express! OK!')
})

// Start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on the localhost:${port}`)
})