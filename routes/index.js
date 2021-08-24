var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首頁' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: '關於我們' });
});
router.get('/story', function(req, res, next) {
  res.render('story', { title: '小故事' });
});
router.get('/faqs', function(req, res, next) {
  res.render('faqs', { title: '常見問答' });
});
router.get('/shopping_cart', function(req, res, next) {
  res.render('shopping_cart', { title: '購物車' });
});

module.exports = router;
