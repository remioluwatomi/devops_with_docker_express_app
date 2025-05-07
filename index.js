const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get("/test", (req, res)=> {
  res.json({
    "devops_with_docker": "true",
    "name": "tomi"
  })
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})