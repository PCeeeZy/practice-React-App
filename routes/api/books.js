// Dependencies
const router = require('express').Router()

// File Imports
const booksController = require('../../controllers/booksController');

// Matches with '/api/books'
router.route('/')
    .get(booksController.findAll);

// matches with '/api/books/:id'
router.route(':id')
    .get(booksController.findById)
    .post(booksController.addBook)
    .put(booksController.updateBook)
    .delete(booksController.deleteById);

module.exports = router;