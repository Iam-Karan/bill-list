var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('welcome', {name:'Karan',id :20920907, title : 'User Home'});
});

module.exports = router;
