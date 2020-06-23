const express = require('express')
const app = express()

const port = 5000
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`)
})

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

app.get('/', (req,res)=>{
  res.send('quang')
})

app.get('/api/nodes', (req,res)=>{
  res.json(notes)
})