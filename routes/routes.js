const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Book = require('../models').Book;

router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', (req, res) => {
	res.redirect('/books');
});

router.get('/books', (req, res, next) => {
	Book.findAll({
		order: [['title', 'ASC']], 
		where: {
			...(req.query.title  ? {title: {$like: `%${req.query.title}%`}}   : {}),
			...(req.query.author ? {author: {$like: `%${req.query.author}%`}} : {}),
			...(req.query.genre  ? {genre: {$like: `%${req.query.genre}%`}}   : {}),
			...(req.query.year   ? {year: req.query.year}                     : {})
		},
		limit: 5,
		offset: req.query.page ? parseInt(req.query.page) * 5 : 0
	})
		.then(books => res.render('index', {
			data: books,
			 ...req.query, 
			 nextPage: req.query.page ? 
			 				req.originalUrl.replace(/page=\d/, `page=${parseInt(req.query.page) + 1}`) : 
			 				req.originalUrl + (req.originalUrl.includes('?') ? '' : '?') + '&page=1',
			 prevPage: parseInt(req.query.page) > 0 && req.originalUrl.replace(/page=\d/, `page=${parseInt(req.query.page) - 1}`),
		}))
		.catch(err => {
			const error = new Error('books could not be retrieved from the database');
			error.status = 500;
			next(error);
		});
});

router.get('/books/new', (req, res) => {
	res.render('book', {newBook: true});
});

router.post('/books/new', (req, res, next) => {
	Book.create(req.body)
		.then(book => res.redirect('/books'))
		.catch(err => {
			if (err.name === 'SequelizeValidationError')
				res.render('book', {newBook: true, errors: err.errors, ...req.body}) 
			else  
				throw err
		})
		.catch(err => {
			const error = new Error('book could not be created');
			error.status = 500;
			next(error);
		});
});

router.get('/books/:id', (req, res, next) => {
	Book.findById(req.params.id)
		.then(book => res.render('book', book.dataValues))
		.catch(err => {
			const error = new Error('book not found');
			error.status = 404;
			next(error);
		});
});

router.post('/books/:id', (req, res, next) => {
	Book.findById(req.params.id)
		.then(book => book.update(req.body))
		.then(() => res.redirect('/books'))
		.catch(err => {
			if (err.name === 'SequelizeValidationError')
				res.render('book', {errors: err.errors, ...req.body, id: req.params.id}) 
			else  
				throw err
		})
		.catch(err => {
			const error = new Error('book could not be updated');
			error.status = 500;
			next(error);
		});
});

router.post('/books/:id/delete', (req, res, next) => {
	Book.findById(req.params.id)
		.then(book => book.destroy())
		.then(() => res.redirect('/books'))
		.catch(err => {
			const error = new Error('book could not be deleted');
			error.status = 500;
			next(error);
		});
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