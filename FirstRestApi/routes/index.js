var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'ee' });
 res.json({det:"Test1"});
});

module.exports = router;
