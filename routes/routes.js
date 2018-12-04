const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', (req, res) => {
	res.redirect('/books');
});

router.get('/books', (req, res) => {
	res.render('index', {data: [{id: 1, title: 'A brief history of time', author: 'Stephen Hawking', genre: 'Non Fiction', year: 1988}]});
});

router.get('/books/new', (req, res) => {
	res.render('book', {newBook: true});
});

router.post('/books/new', (req, res) => {
	res.send('Post request for new book');
});

router.get('/books/:id', (req, res) => {
	res.render('book', {id: req.params.id, title: 'A brief history of time', author: 'Stephen Hawking', genre: 'Non Fiction', year: 1988});
});

router.post('/books/:id', (req, res) => {
	res.send('Post request to update the  book: ' + req.body.title);
});

router.post('/books/:id/delete', (req, res) => {
	res.send('Post request to delete the book: ' + req.params.id);
});

router.use((req, res, next) => {
	error = new Error('Page Not Found');
	error.status = 404;
	next(error);
});

router.use((err, req, res, next) => {
	res.status(err.status);
	if (err.status === 404)
		res.render('page_not_found');
	else if (err.status === 500)
		res.render('error');
});

module.exports = router;