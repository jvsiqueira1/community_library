import bookService from '../service/book.service.js'

async function createBookController(req, res) {
    const newBook = req.body
    const userId = req.userId

    try {
        const createdBook = await bookServices.createBookService(newBook, userId)
        res.status(201).send(createdBook)
    } catch (e) {
        return res.status(400).send(e.message)
    }
}

async function findAllBooksController(req, res) {
    try {
        const books = await bookServices.findAllBooksService()
        res.send(books)
    } catch (e) {
        res.status(404).send(e.message)
    }
}

async function findBookByIdController(req, res) {
    const bookId = req.params.id

    try{
        const book = await bookService.findBookByIdService(bookId)
        return res.send(book)
    } catch (e) {
        return res.status(400).send(e.message)
    }
}

async function updateBookController(req, res) {
    const updatedBook = req.body
    const bookId = req.params.id
    const userId = req.userId

    try {
        const response = await bookService.updateBookService(
            updatedBook,
            bookId,
            userId
        )
        return res.send(response)
    } catch (e) {
        return res.status(400).send(e.message)
    }
}

async function deleteBookController(req, res) {
    const bookId = req.params.id
    const userId = req.userId

    try {
        const response = await bookService.deleteBookService(bookId, userId)
        return res.send(response)
    } catch (e) {
        return res.status(400).send(e.message)
    }
}

async function searchBooksController(req, res) {
    const { search } = req.query

    try {
        const books = await bookService.searchBooksService(search)
        return res.send(books)
    } catch (e) {
        return res.status(400).send(e.message)
    }
}

export default {
    createBookController,
    findAllBooksController,
    findBookByIdController,
    updateBookController,
    deleteBookController,
    searchBooksController
}