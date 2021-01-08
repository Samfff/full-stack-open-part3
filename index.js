const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
      "name": "random",
      "number": "12312",
      "id": 1
    },
    {
      "name": "samsam",
      "number": "111",
      "id": 2
    },
    {
      "name": "samuel",
      "number": "222",
      "id": 3
    },
    {
      "name": "sam",
      "number": "2",
      "id": 4
    }
  ]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
