const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Password required as argument')
}

const password = process.argv[2]

// <dbname> turned out to be the name of the mongo collection,
// since I forgot to change the name initially :_D

const clusterUrl = `mongodb+srv://samsihvonen_fullstack:${password}@cluster0.isb7d.mongodb.net/<dbname>?retryWrites=true`

mongoose.connect(clusterUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}

if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then(() => {
    console.log(
      `\r\n added ${process.argv[3]}: ${process.argv[4]} to phonebook.`
    )
    mongoose.connection.close()
  })
}

if (process.argv.length === 4 || process.argv.length > 5) {
  console.log('An incorrect number of arguments was passed.')
}
