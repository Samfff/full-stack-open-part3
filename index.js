const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
      "name": "kurssi",
      "number": "123",
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

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (person) { res.json(person) }
  else { res.status(404).end()}

})

app.get('/info', (req, res) => {
  const info = `<p>Phonebook has info for ${persons.length}</p>
   <p>${(new Date()).toString()}
  `
  res.send(info)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(note => note.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const data = req.body

    if (!data.name || !data.number) {
        res.status(400).json({error: "Missing fields in request"})
    }
    else if (persons.map(person => person.name).includes(data.name)) {
        res.status(400).json({error: "Person exists in phonebook"})
    }

    const person = {
        name: data.name,
        number: data.number,
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    }

    persons = persons.concat(person)
    res.json(person)

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
