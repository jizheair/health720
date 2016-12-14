var express = require('express');
var router = express.Router();
var query = require('./../model/adDao.js');

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
    var result;
/*    query.getdata(function(result)
    {
        res.render('index', {body: result});
    })
    */
    query.deviceData.find().limit(1).sort({latestUploadTime:-1}).exec().then(function(results){
        res.render('index', {body: results});
    }).catch(function(err){
        //do something
    })
});

module.exports = router;
