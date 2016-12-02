var express = require('express');
var router = express.Router();
var query = require('./adDao.js');

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
    var result;
    query.getresult(function(result)
    {
        res.render('index', {body: result});
    })
});

module.exports = router;
