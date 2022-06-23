//esquema criado para saber o que meu db ira consumir
//no caso consome o titulo, escritor e numero de pags
// ainda no final geramos um export para usar em outros arquivos
const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title:{
    type: String,
    required: true
},
    writer: {
        type: String,
        required: true
    },
    pages :{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('book',bookSchema)