const router = require('express').Router()
const Book = require('../model/book')

//retorna todos os livros
router.get('/', (req, res) => {
    //busca todos os livros
    Book.find({ }, (err, books) => {
        if(err) return res.status(400).send(err)

        res.send(books)
    })
})

//registra um novo livro
router.post('/add', (req,res) => {
// declara os dados do body 
const {writer, title, pages} ={...req.body}
 //checa se todos os dados foram enviados
 if(!writer || !title || !pages || pages < 0) return res.status(400).send ('envie todos os dados corretamente')




//cria o novo livro

const book = new Book({
    writer,
    title,
    pages
})

book.save()
    .catch(err=> res.status(400).send(err))
    .then(resul => res.send({book: resul._id}))
})


module.exports = router