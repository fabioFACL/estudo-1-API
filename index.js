const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())



//conecta ao banco de dados local
mongoose.connect('mongodb://localhost:27017/dev-library', err =>{
    if (err) return console.log(err)

    console.log('DB Connected')
})

//importa as rotas

const bookRoutes = require('./routes/book')

//define os middlewares das rotas
app.use('/book', bookRoutes)


app.listen(3001, ()=>{
    console.log('Server runnin at port 3001')
})