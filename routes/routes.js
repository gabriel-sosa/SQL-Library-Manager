const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/detail', (req, res) => {
	res.render('book_detail')
});

router.use((req, res) => {
	res.render('page_not_found');
});

module.exports = router;