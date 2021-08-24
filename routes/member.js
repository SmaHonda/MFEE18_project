var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('member');
// });

router.get('/', function(req, res, next) {
  res.render('member', { title: 'member' });
});

router.get('/login', function(req, res, next) {
  res.render('member_login', { title: '會員登入' });
});
router.get('/register', function(req, res, next) {
  res.render('member_register', { title: '會員註冊' });
});
module.exports = router;
