var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('product', { title: 'product' });
});

router.get('/:no', function(req, res, next) {
  res.render('product_no', { title: '商品個別頁面' });
});
module.exports = router;
